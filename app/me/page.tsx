import { useTranslations } from 'next-intl'
import { Suspense } from 'react'

import { signOut } from '@/auth'
import AppButton from '@/components/AppButton'
import AppHorizontalMenuLink from '@/components/AppHorizontalMenuLink/AppHorizontalMenuLink'
import PageMePersonalInfo from '@/widgets/PageMe/PageMePersonalInfo'

import Loading from './loading'

const PageMe = () => {
  const t = useTranslations('Me')

  const options = [
    { name: t('settings'), link: '' },
    { name: t('about'), link: '' }
  ]

  return (
    <div className="me pt-16">
      <Suspense fallback={<Loading />}>
        <PageMePersonalInfo />
      </Suspense>

      <div className="me-settings mt-32 pb-32 flex flex-col gap-6">
        {options.map(option => (
          <AppHorizontalMenuLink
            text={option.name}
            link={option.link}
            key={option.name}
          />
        ))}

        <form
          action={async () => {
            'use server'
            await signOut({ redirectTo: '/signin' })
          }}
        >
          <AppButton text={t('logout')} color="red" type="submit" />
        </form>
      </div>
    </div>
  )
}

export default PageMe
