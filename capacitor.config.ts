import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'host.blip.pe',
  appName: 'bliphostfrontend',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
