import { Skeleton } from '@mui/material'

const Loading = () => {
  return (
    <div>
      <div className="pb-4 pt-16">
        <Skeleton variant="rounded" height={16} width={100}/>
      </div>
      <div className="px-6">
        <Skeleton variant="rounded" height={288} />
      </div>
      <div className="py-4">
        <Skeleton variant="rounded" height={16} />
      </div>
    </div>
  )
}

export default Loading
