import AppButton from '@/components/AppButton'
import AppEditField from '@/components/AppEditField/AppEditField'
import AppGoBackLink from '@/components/AppGoBackLink'
import AppImage from '@/components/AppImage/AppImage'
import AppLink from '@/components/AppLink/AppLink'
import { NAV_NAME } from '@/data/Nav/constants'
import { NAV_ROUTES } from '@/router/navRoutes'
import { useTranslations } from 'next-intl'

const Profile = () => {
  const t = useTranslations('Profile')
  const fields = [
    {
      type: t('first name'),
      value: 'Daniil'
    },
    {
      type: t('second name'),
      value: 'Aliev'
    },
    {
      type: t('email'),
      value: 'de.aliev@yandex.ru'
    }
  ]
  return (
    <div className="profile-settings pt-16 pb-20 ">
      <div className="mb-4">
        <AppGoBackLink link={NAV_ROUTES[NAV_NAME.ME]} />
      </div>

      <form action="" className="profile-settings__form">
        <div className="profile-settings__edit-pic size-full flex flex-col items-center ">
          <div className="w-72 aspect-square">
            <AppImage src="" />
          </div>
          <AppLink link={'#'} text={t('editPic')} className="p-4" />
        </div>
        <div className="profile-settings__edits">
          {fields.map(item => (
            <AppEditField type={item.type} value={item.value} key={item.type} />
          ))}
        </div>

        <div className="profile-settings__button-container h-24 fixed bottom-0 left-0 right-0 bg-background-color px-4 pt-4">
          <AppButton
            text="Save"
            className="profile-settings__button"
            width="w-full"
            color="red"
          />
        </div>
      </form>
    </div>
  )
}

export default Profile
