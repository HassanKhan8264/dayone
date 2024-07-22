// src/environments/environment.prod.ts
export const environment = {
  appName: "Dayone",
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
