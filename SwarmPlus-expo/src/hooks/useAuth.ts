import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { useEffect } from 'react'
import { auth } from '@/libs/firebase/firebase'
import Constants from 'expo-constants'
import { atom, useRecoilState } from 'recoil'

const idTokenAtom = atom<string | undefined>({ key: 'idTokenAtom', default: '' })

WebBrowser.maybeCompleteAuthSession()
const useAuth = () => {
  const [idToken, setIdToken] = useRecoilState(idTokenAtom)
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    iosClientId: Constants.manifest?.extra?.iosClientId,
  })

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params

      const getCredential = GoogleAuthProvider.credential
      const credential = getCredential(id_token)
      signInWithCredential(auth, credential)
    }
  }, [response])

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, async (user) => {
      if (user != null) {
        setIdToken(await user.getIdToken())
        console.log('We are authenticated now!')
      } else {
        setIdToken('')
      }

      // Do other things
    })

    return () => {
      unsubscribed()
    }
  }, [])

  return { request, promptAsync, signOut, idToken }
}

const signOut = () => {
  auth.signOut()
}

export default useAuth
