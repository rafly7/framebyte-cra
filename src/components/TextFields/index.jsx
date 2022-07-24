import {
  InputLabel,
  OutlinedInput,
  styled
} from '@mui/material'


export const CustomInputLabel = styled(({
  color,
  colorFocused,
  ...props
}) => <InputLabel {...props}/>)`
  ${props => props.color && `
    &.MuiInputLabel-outlined {
      color: ${props.color};
    }
    &.Mui-focused {
      color: ${props.colorFocused || props.color};
    }
  `}
`

export const CustomOutlinedInput = styled(({
  color,
  colorNotched,
  colorHoverNotched,
  colorFocusedNotched,
  ...props
}) => <OutlinedInput {...props} />)`
  ${props => props.color && `
    color: ${props.color};
  `}  
  ${props => props.colorNotched && `
    .MuiOutlinedInput-notchedOutline {
      border-color: ${props.colorNotched};
    }
    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: ${props.colorHoverNotched || props.colorNotched};
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: ${props.colorFocusedNotched || props.colorHoverNotched || props.colorNotched};
    }
  `}
`