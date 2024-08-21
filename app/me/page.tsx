import { useTranslations } from 'next-intl'

import AppH1Header from '@/components/AppH1Header/AppH1Header'
import AppHorizontalMenuLink from '@/components/AppHorizontalMenuLink/AppHorizontalMenuLink'
import AppImage from '@/components/AppImage/AppImage'
import AppLink from '@/components/AppLink/AppLink'
import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'

const Me = () => {
  const options = [
    { name: 'Settings', link: '' },
    { name: 'About', link: '' }
  ]
  const t = useTranslations('Me')
  return (
    <div className="me mt-4">
      <div className="me_personal-info h-40 grid grid-cols-2 gap-5">
        <div className="flex flex-col justify-between">
          <AppH1Header text="Daniil Aliev" />
          <AppLink link={NAV_ROUTES[NAV_NAME.PROFILE]} text={t('link')} />
        </div>
        <AppImage src="" />
      </div>

      <div className="me-settings mt-9 flex flex-col gap-6">
        {options.map(option => (
          <AppHorizontalMenuLink
            text={option.name}
            link={option.link}
            key={option.name}
          />
        ))}
      </div>
    </div>
  )
}

export default Me
