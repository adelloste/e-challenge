export const environment = {
  production: true,
  api: {
    baseUrl: 'assets/stubs',
    message: {
      contentType: 'application/json',
      method: 'GET',
      timeout: 30000,
      uri: '/messages.json'
    }
  }
};
