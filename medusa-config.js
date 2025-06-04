const dotenv = require("dotenv");
let ENV_FILE_NAME = "";
switch (process.env.NODE_ENV) {
  case "production":
    ENV_FILE_NAME = ".env.production";
    break;
  case "staging":
    ENV_FILE_NAME = ".env.staging";
    break;
  case "test":
    ENV_FILE_NAME = ".env.test";
    break;
  case "development":
  default:
    ENV_FILE_NAME = ".env.local";
    break;
}

try {
  dotenv.config({ path: process.cwd() + "/" + ENV_FILE_NAME });
} catch (e) {}

module.exports = {
  projectConfig: {
    jwt_secret: process.env.JWT_SECRET,
    cookie_secret: process.env.COOKIE_SECRET,
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    store_cors: "http://localhost:3000",
    admin_cors: "http://localhost:7001",
  },
  plugins: [
    {
      resolve: "@medusajs/meilisearch",
      options: {
        config: {
          host: process.env.MEILISEARCH_HOST,
          apiKey: process.env.MEILISEARCH_API_KEY,
        },
        settings: {
          products: {
            indexSettings: {
              searchableAttributes: ["title", "description"],
              displayedAttributes: ["title", "description", "handle", "thumbnail"],
            },
          },
        },
      },
    },
  ],
}; 
