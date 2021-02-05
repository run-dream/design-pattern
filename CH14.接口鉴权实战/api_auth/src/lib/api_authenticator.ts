import { ApiRequest } from './api_request';
export interface ApiAuthenticator {
  auth(apiRequest: ApiRequest): Promise<boolean>;
  auth(url: string): Promise<boolean>;
}
