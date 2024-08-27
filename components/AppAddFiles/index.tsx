import AttachSVG from '@/assets/images/Attach.svg'

const AppAddFiles = () => {
  return (
    <button className='flex items-center gap-2'>
      <AttachSVG />
      <span className='text-dark-red'>Add Files</span>
    </button>
  )
}

export default AppAddFiles
