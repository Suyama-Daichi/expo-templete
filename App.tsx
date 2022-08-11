import { StatusBar } from 'expo-status-bar'
import useColorScheme from '@/hooks/useColorScheme'
import Navigation from '@/navigation'
import useInitialize from '@/hooks/useInitialize'
import { Providers } from '@/components/Providers'

export default function App() {
  const colorScheme = useColorScheme()
  const { isLoadingComplete } = useInitialize()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <Providers>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </Providers>
    )
  }
}
