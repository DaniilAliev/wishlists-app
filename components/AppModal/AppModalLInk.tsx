import AppButton from "../AppButton"
import AppInput from "../AppInput"

const AppModalLink = () => {
  return (
    <form>
      <AppInput placeholder="Link" />
      <p className="py-4 text-price-color">
        Drop the link of your desirable item, and it will parse all the info
        automatically. This parser supports only specific list of sourses, so
        watch out
      </p>

      <div className="fixed bottom-0 left-0 right-0 px-2 pb-4">
        <AppButton text="Save" color="red" width="w-full" type="submit" />
      </div>
    </form>
  )
}

export default AppModalLink
