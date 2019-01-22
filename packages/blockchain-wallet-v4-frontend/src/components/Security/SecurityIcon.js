import React from 'react'
import styled from 'styled-components'
import { Icon } from 'blockchain-info-components'
import Media from 'services/ResponsiveService'

const Circle = styled.div`
  justify-content: center;
  align-self: center;
  align-items: center;
  width: 74px;
  height: 74px;
  background: ${props => props.theme['white']};
  border: 2px solid ${props => props.theme['gray-2']};
  display: flex;
  border-radius: 74px;
  &.active {
    background: ${props => props.theme['white-blue']};
  }
  ${Media.mobile`
    display: none;
  `};
`
const StyledIcon = styled(Icon)`
  display: flex;
`

const SecurityIcon = props => (
  <Circle className={props.enabled ? 'active' : ''}>
    <StyledIcon
      size='40px'
      color={props.enabled ? 'success' : 'gray-2'}
      name={props.enabled ? 'checkmark-in-circle-filled' : props.name}
    />
  </Circle>
)

export default SecurityIcon
