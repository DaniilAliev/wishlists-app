import { Suspense } from 'react'

import PageProfile from '@/widgets/PageProfile'

import Loading from './loading'

const Profile = () => {
  return (
    <Suspense fallback={<Loading />}>
      <PageProfile />
    </Suspense>
  )
}

export default Profile
