import { BaseService } from "@/utils/BaseService"
import { User } from '@prisma/client'

class ProfileServiсeClass extends BaseService {
  async getProfile() {
    const { data } = await this.httpClient.get<User>(this.getPath(''))
    return data
  }
}

export const ProfileService = new ProfileServiсeClass('/profile')
