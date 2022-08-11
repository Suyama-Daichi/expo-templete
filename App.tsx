import { StatusBar } from 'expo-status-bar'
import useColorScheme from '@/hooks/useColorScheme'
import Navigation from '@/navigation'
import useInitialize from '@/hooks/useInitialize'

export default function App() {
  const colorScheme = useColorScheme()
  const { isLoadingComplete } = useInitialize()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </>
    )
  }
}
