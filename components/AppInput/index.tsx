import { TextField } from "@mui/material"
import { FC } from "react"

const AppInput: FC<{ placeholder: string, type?: string, multiline?: boolean, rows?: number }> &
  React.ComponentProps<'input'> = ({ placeholder, type, multiline, rows, ...props }) => {
  return (
    <div className="h-14 mt-6 rounded-xl">
      <TextField
        fullWidth
        label={placeholder}
        color="error"
        type={type}
        multiline={multiline}
        rows={rows}
        className="bg-background-color rounded-md"
        {...props}
      />
    </div>
  )
}

export default AppInput
