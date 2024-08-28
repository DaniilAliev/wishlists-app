import AppButton from '@/components/AppButton'
import AppEditField from '@/components/AppEditField/AppEditField'
import AppGoBackLink from '@/components/AppGoBackLink'
import AppImage from '@/components/AppImage/AppImage'
import AppLink from '@/components/AppLink/AppLink'
import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'
import PageProfile from '@/widgets/PageProfile'
import { Skeleton } from '@mui/material'
import { useTranslations } from 'next-intl'
import { Suspense } from 'react'
import Loading from './loading'

const Profile = () => {
  return (
    <Suspense fallback={<Loading />} >
      <PageProfile />
    </Suspense>
  )
}

export default Profile
