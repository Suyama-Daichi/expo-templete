import { NativeBaseProvider } from 'native-base'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RecoilRoot } from 'recoil'

export const Providers: React.FC = ({ children }) => {
  return (
    <RecoilRoot>
      <NativeBaseProvider>
        <SafeAreaProvider>{children}</SafeAreaProvider>
      </NativeBaseProvider>
    </RecoilRoot>
  )
}
