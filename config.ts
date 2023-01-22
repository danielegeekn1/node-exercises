const missingPort = "Warning, no port avaiable";
const config = {
  PORT: process.env.PORT || missingPort,
  SESSION_SECRET: process.env.SESSION_SECRET || missingPort,
  GITHUB_CLIENT_ID: process.env.GITHUB_CLIENT_ID || missingPort,
  GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET || missingPort,
  GITHUB_CALLBACK_URL: process.env.GITHUB_CALLBACK_URL || missingPort,
};
export default config;
