// src/environments/environment.prod.ts
export const environment = {
  appName: "Portalize",
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
