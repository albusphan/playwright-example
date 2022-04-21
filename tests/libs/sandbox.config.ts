import { PlaywrightTestConfig } from "@playwright/test";
import baseConfig from "./base.config";
const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    baseURL: "https://heartbeat.sandbox.predictablexp.com",
  },
};
export default config;
