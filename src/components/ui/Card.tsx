import styled from 'styled-components'
import {MotionBox} from '../../motion/Motion'

export const Card = styled(MotionBox)`
  background: ${({theme}) => theme.colors.card};
  border-radius: ${({theme}) => theme.radii.lg};
  padding: ${({theme}) => theme.spacing.xl};
  border: 1px solid ${({theme}) => theme.colors.border};
  box-shadow: ${({theme}) => theme.shadows.outline};
  transition: transform 0.2s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: ${({theme}) => theme.shadows.strong};
    border-color: rgba(35, 66, 97, 0.2);
  }
`
