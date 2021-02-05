export class ApiRequest {
  readonly baseUrl: string;
  readonly token: string;
  readonly appId: string;
  readonly timestamp: number;

  constructor(
    baseUrl: string,
    token: string,
    appId: string,
    timestamp: number
  ) {
    this.baseUrl = baseUrl;
    this.token = token;
    this.appId = appId;
    this.timestamp = timestamp;
  }

  static createFromUrl(url: string): ApiRequest {
    const parts = url.split('?');
    if (!parts.length || parts.length < 2) {
      throw new Error('url 格式错误');
    }
    const baseUrl = parts[0];
    const strParams = parts[1];
    const params: any = strParams
      .split('&')
      .map(value => value.split('='))
      .reduce((result, value) => (result[value[0]] = value[1]), {});
    if (!params.token || !params.appId || !params.timestamp) {
      throw new Error('URL信息不完整');
    }
    return new ApiRequest(
      baseUrl,
      params.token,
      params.appId,
      params.timestamp
    );
  }
}
