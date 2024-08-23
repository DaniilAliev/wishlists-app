import { Input, TextField } from "@mui/material"
import { FC } from "react"
// import { createTheme } from '@material-ui/styles'

// const theme = createTheme({
//   components: {
//     MuiOutlinedInput: {
//       styleOverrides: {
//         root: {
//           borderRadius: '8px' // Установите желаемый радиус закругления
//         }
//       }
//     }
//   }
// })

const AppInput: FC<{ placeholder: string, type?: string }> &
  React.ComponentProps<'input'> = ({ placeholder, type, ...props }) => {
  return (
    <div className="h-14 mt-6">
      <TextField
        fullWidth
        label={placeholder}
        color="error"
        type={type}
        {...props}
      />
    </div>
  )
}

export default AppInput
