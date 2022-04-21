import { PlaywrightTestConfig } from "@playwright/test";
import baseConfig from "./base.config";
const config: PlaywrightTestConfig = {
  ...baseConfig,
  use: {
    ...baseConfig.use,
    baseURL: "http://localhost:3000",
  },
};
export default config;
