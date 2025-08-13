import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'apphost.blip.pe',
  appName: 'Blip Host',
  webDir: 'www',
  server: {
    androidScheme: 'https',
  },
  plugins: {
    Facebook: {
      appId: '479280344913959',
      appName: 'Blip',
    },
    Keyboard: {
      resize: 'none' as any, // Deshabilitar el ajuste automático del teclado
    },
    Camera: {
      androidScaleType: 'CENTER_CROP',
      // Configuración adicional para Android
      android: {
        permissions: [
          'android.permission.CAMERA',
          'android.permission.READ_EXTERNAL_STORAGE',
          'android.permission.WRITE_EXTERNAL_STORAGE',
          'android.permission.READ_MEDIA_IMAGES',
        ],
      },
    },
  },
};

export default config;
