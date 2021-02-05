import { createHmac } from 'crypto';

export class AuthToken {
  static readonly DEFAULT_EXPIRATION = 1 * 60 * 1000;
  readonly token: string;
  readonly createTime: number;
  readonly expiration: number;

  constructor(
    token: string,
    createTime: number,
    expiration = AuthToken.DEFAULT_EXPIRATION
  ) {
    this.token = token;
    this.createTime = createTime;
    this.expiration = expiration;
  }

  static create(
    baseUrl: string,
    createTime: number,
    appId: string,
    password: string
  ): AuthToken {
    const token = createHmac('sha1', password)
      .update(`${baseUrl}.${appId}.${createTime}`)
      .digest('hex');
    return new AuthToken(token, createTime);
  }

  isExpired(): boolean {
    return this.createTime + this.expiration > Date.now();
  }

  match(authToken: AuthToken): boolean {
    return this.token === authToken.token;
  }
}
