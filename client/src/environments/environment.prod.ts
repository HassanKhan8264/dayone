// src/environments/environment.prod.ts
export const environment = {
  appName: "bedoer",
  production: true,
  server: {
    self: {
      HOST: "https://example.com",
      getUrl() {
        return `${this.HOST}`;
      },
    },
  },
};
