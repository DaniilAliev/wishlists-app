import AppButton from "@/components/AppButton"
import AppInput from "@/components/AppInput"
import { useTranslations } from "next-intl"

const SignUp = () => {
  const t = useTranslations('SignUp')

  return (
    <div className="sign-up">
      <div className="flex justify-center">
        <h1 className="text-xl">{t('header')}</h1>
      </div>

      <form action="">
        <AppInput placeholder={t('login')} />
        <AppInput placeholder={t('password')} type="password" />
        <AppInput placeholder={t('confirm')} type="password" />

        <AppButton 
          type='submit'
          color="red"
          text={t('next')}
          width="w-full"
          className="mt-6"
        />
      </form>

    </div>
  )
}

export default SignUp
