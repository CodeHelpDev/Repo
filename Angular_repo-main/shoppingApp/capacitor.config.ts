import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'shoppingapp',
  webDir: 'www',
  "server": {
  "url": "http://192.your.local.ip:8100"
}
};

export default config;
