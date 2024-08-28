import AppButton from "@/components/AppButton"
import AppInput from "@/components/AppInput"
import AppLink from "@/components/AppLink/AppLink"
import { NAV_NAME } from "@/data/Nav/constants"
import { NAV_ROUTES } from "@/router/navRoutes"
import { useTranslations } from "next-intl"
import { signIn } from '@/auth'

type button = {
      text: string,
      variant: 'grey' | 'red' | 'transparent',
      onClick: () => void
    }

const SignIn = () => {
  const t = useTranslations('SignIn')

  const buttons: Array<button> = [
    {
      text: t('google'),
      variant: 'grey',
      onClick: () => {}
    },
    {
      text: t('apple'),
      variant: 'grey',
      onClick: () => {}
    },
    {
      text: t('forgotPassword'),
      variant: 'transparent',
      onClick: () => {}
    },
    {
      text: t('next'),
      variant: 'red',
      onClick: () => {}
    }
  ]
  return (
    <div className="sing-in pt-24">
      <div className="flex justify-center">
        <h1 className="text-xl">{t('header')}</h1>
      </div>

      <form action="">
        <AppInput placeholder={t('login')} />
        <AppInput placeholder={t('password')} type="password" />

        <div className="flex justify-center my-4">
          <AppLink
            link={NAV_ROUTES[NAV_NAME.SIGN_UP]}
            text="Don't have an account yet? Sign up"
            className="text-sm"
          />
        </div>
      </form>

      <form
        action={async () => {
          'use server'
          const res = await signIn('github', { redirectTo: '/' })
        }}
      >
        <AppButton
          text={t('github')}
          color={'grey'}
          type="submit"
          width="w-full"
          className="mb-6"
        />
      </form>
    </div>
  )
}

export default SignIn
