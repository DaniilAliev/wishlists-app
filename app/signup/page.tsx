import AppButton from '@/components/AppButton'
import AppInput from '@/components/AppInput'
import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

const SignUp = () => {
  const t = useTranslations('SignUp')

  return (
    <div className="sign-up pt-24">
      <div className="flex justify-center">
        <h1 className="text-xl">{t('header')}</h1>
      </div>

      <form action="">
        <AppInput placeholder={t('login')} />
        <AppInput placeholder={t('password')} type="password" />
        <AppInput placeholder={t('confirm')} type="password" />

        <AppButton
          type="submit"
          color="red"
          text={t('next')}
          width="w-full"
          className="mt-6"
        />

        <Link href={NAV_ROUTES[NAV_NAME.SIGN_IN]}>
          <AppButton
            color="grey"
            text="Back"
            width="w-full"
            className="mt-6"
          />
        </Link>
      </form>
    </div>
  )
}

export default SignUp
