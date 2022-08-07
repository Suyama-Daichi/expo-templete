import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'

import useCachedResources from '@/hooks/useCachedResources'
import useColorScheme from '@/hooks/useColorScheme'
import Navigation from '@/navigation'
import { NativeBaseProvider } from 'native-base'
import { RecoilRoot } from 'recoil'

export default function App() {
  const colorScheme = useColorScheme()
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <RecoilRoot>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Navigation colorScheme={colorScheme} />
            <StatusBar />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </RecoilRoot>
    )
  }
}
