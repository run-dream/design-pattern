import { ApiAuthenticator } from './api_authenticator';
import { ApiRequest } from './api_request';
import { CredentialStorage } from './credential_storage';
import { AuthToken } from './auth_token';
export class DefaultApiAuthenticator implements ApiAuthenticator {
  readonly credentialStorage: CredentialStorage;
  constructor(credentialStorage: CredentialStorage) {
    this.credentialStorage = credentialStorage;
  }
  async auth(param: ApiRequest | string): Promise<boolean> {
    let apiRequest: ApiRequest;
    if (param instanceof ApiRequest) {
      apiRequest = param as ApiRequest;
    } else {
      apiRequest = ApiRequest.createFromUrl(param);
    }
    const clientAuth = new AuthToken(apiRequest.token, apiRequest.timestamp);
    if (clientAuth.isExpired()) {
      return false;
    }
    const password = await this.credentialStorage.getPasswordByAppId(
      apiRequest.appId
    );
    const serverAuth = AuthToken.create(
      apiRequest.baseUrl,
      apiRequest.timestamp,
      apiRequest.appId,
      password
    );
    return clientAuth.match(serverAuth);
  }
}
