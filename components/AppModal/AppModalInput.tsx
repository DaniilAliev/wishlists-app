import AppAddFiles from "../AppAddFiles"
import AppButton from "../AppButton"
import AppInput from "../AppInput"

const AppModalInput = () => {
  return (
    <form>
      <AppInput placeholder="Name" />
      <AppInput placeholder="Price" type="number" />
      <AppInput placeholder="Description" multiline rows={4} />
      <div className="fixed bottom-0 left-0 right-0 px-2 pb-4">
        <AppButton text="Save" color="red" width="w-full" type="submit" />
      </div>

      <div className="py-24">
        <AppAddFiles />
      </div>
    </form>
  )
}

export default AppModalInput
