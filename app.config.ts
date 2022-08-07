import 'dotenv/config'

const appEnv = process.env.APP_ENV

let Config = {
  apiUrl: 'https://localhost:3000',
}

if (appEnv === 'production') {
  Config.apiUrl = 'https://api.production.com'
} else if (appEnv === 'staging') {
  Config.apiUrl = 'https://api.staging.com'
}

export default {
  name: 'SwarmPlus',
  slug: 'SwarmPlus',
  version: '0.0.1',
  orientation: 'portrait',
  icon: './assets/images/icon.png',
  scheme: 'swarm-plus',
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/images/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: 'com.donchan.swarmplus',
    googleServicesFile:
      appEnv === 'production'
        ? '/GoogleService-Info-production.plist'
        : './GoogleService-Info-develop.plist',
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/images/favicon.png',
    config: {
      firebase: {
        apiKey: process.env.API_KEY,
        authDomain: process.env.AUTH_DOMAIN,
        databaseURL: process.env.DATABASE_URL,
        projectId: process.env.PROJECT_ID,
        storageBucket: process.env.STORAGE_BUCKET,
        messagingSenderId: process.env.MESSAGING_SENDER_ID,
        appId: process.env.APP_ID,
        measurementId: process.env.MEASUREMENT_ID,
      },
    },
  },
  extra: {
    iosClientId: process.env.IOS_CLIENT_ID,
  },
}
