import 'dotenv/config'

let Config = {
  apiUrl: 'https://localhost:3000',
}

if (process.env.APP_ENV === 'production') {
  Config.apiUrl = 'https://api.production.com'
} else if (process.env.APP_ENV === 'staging') {
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
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/images/adaptive-icon.png',
      backgroundColor: '#ffffff',
    },
  },
  web: {
    favicon: './assets/images/favicon.png',
  },
}
