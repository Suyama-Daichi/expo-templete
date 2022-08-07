import { GoogleAuthProvider, onAuthStateChanged, signInWithCredential } from 'firebase/auth'
import * as Google from 'expo-auth-session/providers/google'
import * as WebBrowser from 'expo-web-browser'
import { useEffect } from 'react'
import { auth } from '@/libs/firebase/firebase'
import Constants from 'expo-constants'

WebBrowser.maybeCompleteAuthSession()
const useAuth = () => {
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

  return { request, promptAsync, signOut }
}
onAuthStateChanged(auth, (user) => {
  if (user != null) {
    console.log('We are authenticated now!')
  }

  // Do other things
})
const signOut = () => {
  auth.signOut()
}

export default useAuth
