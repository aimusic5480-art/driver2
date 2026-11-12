import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.twende.driver',
  appName: 'Aletwende Driver',
  webDir: 'dist',
  android: {
    allowMixedContent: true,
  },
};

export default config;
