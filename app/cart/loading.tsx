import { Skeleton } from '@mui/material'

const Loading = () => {
  return (
    <div className="mt-28">
      <Skeleton height={124} />
      <Skeleton height={124} />
    </div>
  )
}

export default Loading
