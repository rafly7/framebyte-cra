import Button from '@mui/material/Button'
import styled from '@mui/material/styles/styled'

export const CustomButton = styled(({
  width,
  margin,
  customColor,
  backgroundColor,
  backgroundHoverColor,
  isOutlined,
  colorOutlined,
  borderWidthOutline,
  ...props
}) => <Button {...props}/>)`
${props => props.width && `
  width: ${props.width};
`}
${props => props.margin && `
  margin: ${props.margin};
`}
${props => props.customColor && `
  color: ${props.customColor};
`}
${props => props.backgroundColor && `
  background: ${props.backgroundColor};
  &:hover {
    background: ${props.backgroundHoverColor || props.backgroundColor};
  }
`}
${props => {
  return props.isOutlined && props.colorOutlined && props.borderWidthOutline && `
  border: ${props.borderWidthOutline} solid;
  border-color: ${props.colorOutlined};
`}}
`