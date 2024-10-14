import { signOut } from '@/auth'
import axios, { AxiosInstance } from 'axios'
import urlJoin from 'url-join'
import { cookies } from 'next/headers'

const httpClient = axios.create({
  baseURL: 'your_api_base_url',
});

httpClient.interceptors.request.use((config) => {
  const cookie = cookies().get('authjs.session-token');
  if (cookie?.value) {
    config.headers['Authorization'] = `Bearer ${cookie.value}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});


export class BaseService {
  protected endpoint: string
  protected httpClient: AxiosInstance
  protected apiHost: string

  constructor(endpoint: string) {
    this.httpClient = httpClient
    this.endpoint = endpoint
    this.apiHost = process.env.NEXT_PUBLIC_API_URL as string
  }

  getPath(path: string) {
    return urlJoin(this.apiHost, this.endpoint, path)
  }
}
