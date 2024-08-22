import clsx from "clsx"
import { FC } from "react"

const AppButton: FC<{ text: string, width?: string, className?: string }> & React.ComponentProps<'button'> = ({text, className, width, ...props}) => {
  return (
    <button
      {...props}
      className={clsx(
        'h-12 bg-red-500 hover:bg-red-600 text-white rounded-xl',
        className,
        width
      )}
    >
      {text}
    </button>
  )
}

export default AppButton
