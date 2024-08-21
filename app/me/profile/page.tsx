import AppEditField from '@/components/AppEditField/AppEditField'
import AppImage from '@/components/AppImage/AppImage'
import AppLink from '@/components/AppLink/AppLink'

const Profile = () => {
  const fields = [
    {
      type: 'First name',
      value: 'Daniil'
    },
    {
      type: 'Second name',
      value: 'Aliev'
    },
    {
      type: 'Email',
      value: 'de.aliev@yandex.ru'
    }
  ]
  return (
    <div className="profile-settings mt-8">
      <form action="">
        <div className="size-full flex flex-col items-center ">
          <div className="w-72 aspect-square">
            <AppImage src="" />
          </div>
          <AppLink link={'#'} text="Edit your profile pic" className="p-4" />
        </div>
        {fields.map(item => (
          <AppEditField type={item.type} value={item.value} key={item.type} />
        ))}
      </form>
    </div>
  )
}

export default Profile
