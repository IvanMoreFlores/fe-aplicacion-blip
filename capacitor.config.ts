import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'host.blip.pe',
  appName: 'bliphostfrontend',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Facebook: {
      appId: "TU_APP_ID_DE_FACEBOOK",
      appName: "Your App Name"
    }
  }
};

export default config;
