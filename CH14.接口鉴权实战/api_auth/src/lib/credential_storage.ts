export interface CredentialStorage {
  getPasswordByAppId(appId: string): Promise<string>;
}
