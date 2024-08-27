import { useTranslations } from "next-intl"
import AppAddFiles from "../AppAddFiles"
import AppButton from "../AppButton"
import AppInput from "../AppInput"

const AppModalInput = () => {
  const t = useTranslations('AddItem')

  return (
    <form>
      <AppInput placeholder={t('name')} />
      <AppInput placeholder={t('price')} type="number" />
      <AppInput placeholder={t('desc')} multiline rows={4} />
      <div className="fixed bottom-0 left-0 right-0 px-2 pb-4">
        <AppButton text={t('save')} color="red" width="w-full" type="submit" />
      </div>

      <div className="py-24">
        <AppAddFiles />
      </div>
    </form>
  )
}

export default AppModalInput
