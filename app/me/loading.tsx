import { Skeleton } from '@mui/material'

const Loading = () => {
  return (
    <div>
      <div>
        <Skeleton height={300} variant="rounded" />
      </div>
      <div className="mt-6">
        <Skeleton height={40} width={200} variant="rounded" />
      </div>
      <div className="mt-4">
        <Skeleton height={24} width={170} variant="rounded" />
      </div>
    </div>
  )
}

export default Loading
