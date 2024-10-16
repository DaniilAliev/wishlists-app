import { useTranslations } from "next-intl"
import AppButton from "../AppButton"
import AppInput from "../AppInput"

const AppModalAddWishlist = () => {
  const t = useTranslations('AddWishlist')

  return (
    <form>
      <AppInput placeholder={t('name')} />
      <div className="fixed bottom-0 left-0 right-0 px-2 pb-4">
        <AppButton text={t('add')} color="red" width="w-full" type="submit" />
      </div>
    </form>
  )
}

export default AppModalAddWishlist
