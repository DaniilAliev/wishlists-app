import './PageMePersonalInfo.scss'

import { useTranslations } from 'next-intl'

import { auth } from '@/auth'
import AppH1Header from '@/components/AppH1Header/AppH1Header'
import AppImage from '@/components/AppImage/AppImage'
import AppLink from '@/components/AppLink/AppLink'
import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'

const PageMePersonalInfo = async () => {
  const t = useTranslations('Me')

  const session = await auth()

  const user = session?.user

  return (
    <div className="me_personal-info">
      <AppImage src={user?.image} />
      <div className="flex flex-col justify-between mt-6">
        <AppH1Header text={user?.name || ''} />
        <AppLink
          link={NAV_ROUTES[NAV_NAME.PROFILE]}
          text={t('link')}
          className="mt-4"
        />
      </div>
    </div>
  )
}

export default PageMePersonalInfo
