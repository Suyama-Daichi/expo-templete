import { StyleSheet } from 'react-native'

import EditScreenInfo from '../components/EditScreenInfo'
import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../../types'
import { Button } from 'native-base'
import useAuth from '@/hooks/useAuth'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { request, promptAsync, signOut, idToken } = useAuth()
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Button isLoading={!request} onPress={() => promptAsync()}>
        Googleでログイン
      </Button>
      <Text>{idToken}</Text>
      <Button onPress={() => signOut()}>ログアウト</Button>
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
})
