import { StyleSheet } from 'react-native'

import { Text, View } from '../components/Themed'
import { RootTabScreenProps } from '../../types'
import { Button } from 'native-base'
import useAuth from '@/hooks/useAuth'

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const { request, promptAsync, signOut, idToken } = useAuth()
  return (
    <View style={styles.container}>
      <Button isLoading={!request} onPress={() => promptAsync()}>
        Googleでログイン
      </Button>
      <Text>{idToken}</Text>
      <Button onPress={() => signOut()}>ログアウト</Button>
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
})
