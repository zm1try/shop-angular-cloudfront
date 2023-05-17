import { Config } from './config.interface';

export const environment: Config = {
  production: true,
  apiEndpoints: {
    product: 'https://k4bw7kw927.execute-api.us-east-1.amazonaws.com/dev',
    order: 'https://675acblhn3.execute-api.us-east-1.amazonaws.com/dev',
    import: 'https://rwzs06n2za.execute-api.us-east-1.amazonaws.com/dev',
    bff: 'https://k4bw7kw927.execute-api.us-east-1.amazonaws.com/dev',
    cart: 'https://675acblhn3.execute-api.us-east-1.amazonaws.com/dev',
  },
  apiEndpointsEnabled: {
    product: true,
    order: true,
    import: true,
    bff: true,
    cart: true,
  },
};
