import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'apphost.blip.pe',
  appName: 'bliphostfrontend',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    Facebook: {
      appId: "479280344913959",  
      appName: "Blip"
    }
  }
};

export default config;
