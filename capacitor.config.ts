import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.blip.pe',
  appName: 'Blip',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    "GoogleAuth": {
      "scopes": [
        "profile",
        "email"
      ],
      "serverClientId": "1065508143243-0nnjgpqihtstvqt17lulhtkh682587of.apps.googleusercontent.com",
      "forceCodeForRefreshToken": true
    }
  }
};

export default config;
