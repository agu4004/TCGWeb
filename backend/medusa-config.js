const plugins = [
  {
    resolve: "medusa-plugin-meilisearch",
    options: {
      config: {
        host: process.env.MEILISEARCH_HOST || "http://localhost:7700",
        apiKey: process.env.MEILISEARCH_API_KEY,
      },
      settings: {
        products: {
          indexSettings: {
            searchableAttributes: [
              "title",
              "description",
              "tags",
              "categories",
            ],
            filterableAttributes: [
              "status",
              "source",
              "seller_id",
              "price_cents",
            ],
          },
        },
      },
    },
  },
  {
    resolve: "medusa-plugin-sendgrid",
    options: {
      api_key: process.env.SENDGRID_API_KEY,
      from: "noreply@yourdomain.com",
      order_placed_template: "d-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      order_canceled_template: "d-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      order_completed_template: "d-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
      customer_password_reset_template: "d-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    },
  },
  {
    resolve: "medusa-plugin-stripe",
    options: {
      api_key: process.env.STRIPE_SECRET_KEY,
      webhook_secret: process.env.STRIPE_WEBHOOK_SECRET,
    },
  },
];

module.exports = {
  projectConfig: {
    redis_url: process.env.REDIS_URL,
    database_url: process.env.DATABASE_URL,
    database_type: "postgres",
    store_cors: process.env.STORE_CORS,
    admin_cors: process.env.ADMIN_CORS,
  },
  plugins,
}; 