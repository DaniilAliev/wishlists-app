import axios, { AxiosInstance } from 'axios'
import urlJoin from 'url-join'

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export class BaseService {
  protected endpoint: string
  protected httpClient: AxiosInstance
  protected apiHost: string

  constructor(endpoint: string) {
    this.httpClient = instance
    this.endpoint = endpoint
    this.apiHost = process.env.NEXT_PUBLIC_API_URL as string
  }

  getPath(path: string) {
    return urlJoin(this.apiHost, this.endpoint, path)
  }
}
