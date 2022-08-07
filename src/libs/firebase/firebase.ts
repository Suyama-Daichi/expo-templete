import { getApp, getApps, initializeApp } from 'firebase/app'
import Constants from 'expo-constants'
import { getReactNativePersistence } from 'firebase/auth/react-native'
// Optionally import the services that you want to use
import { getAuth, initializeAuth } from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'
//import {...} from "firebase/database";
//import {...} from "firebase/firestore";
//import {...} from "firebase/functions";
//import {...} from "firebase/storage";
const firebaseConfig = Constants.manifest?.web?.config?.firebase

const apps = getApps()
const app = !apps.length ? initializeApp(firebaseConfig || {}) : apps[0]
export const auth = initializeAuth(app, {
  // use async-storage in @react-native-async-storage instead of react-native
  persistence: getReactNativePersistence(AsyncStorage),
})

export default app
