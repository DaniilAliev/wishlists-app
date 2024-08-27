import { useTranslations } from "next-intl"
import AppButton from "../AppButton"
import AppInput from "../AppInput"

const AppModalLink = () => {
  const t = useTranslations('AddItem')

  return (
    <form>
      <AppInput placeholder={t('linkInput')} />
      <p className="py-4 text-price-color">
        Drop the link of your desirable item, and it will parse all the info
        automatically. This parser supports only specific list of sourses, so
        watch out
      </p>

      <div className="fixed bottom-0 left-0 right-0 px-2 pb-4">
        <AppButton text={t('save')} color="red" width="w-full" type="submit" />
      </div>
    </form>
  )
}

export default AppModalLink
