import {forwardRef, type ElementType, type ReactNode} from 'react'
import styled, {css} from 'styled-components'
import {MotionButton} from '../../motion/Motion'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

type ButtonProps = {
  children: ReactNode
  variant?: ButtonVariant
  fullWidth?: boolean
  href?: string
  to?: string
  as?: ElementType
} & Omit<React.ComponentPropsWithoutRef<typeof MotionButton>, 'as'>

const variantStyles = {
  primary: css`
    background-image: ${({theme}) => theme.colors.accent};
    color: #ffffff;
    box-shadow: ${({theme}) => theme.shadows.soft};
  `,
  secondary: css`
    background: #ffffff;
    color: ${({theme}) => theme.colors.navy};
    border: 1px solid ${({theme}) => theme.colors.border};
  `,
  ghost: css`
    background: transparent;
    color: ${({theme}) => theme.colors.text};
    border: 1px solid ${({theme}) => theme.colors.border};
  `,
}

const BaseButton = styled(MotionButton)<{$variant: ButtonVariant; $fullWidth?: boolean}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: ${({theme}) => theme.spacing.sm};
  padding: 14px 20px;
  border-radius: ${({theme}) => theme.radii.pill};
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  width: ${({$fullWidth}) => ($fullWidth ? '100%' : 'auto')};
  text-decoration: none;
  transition: box-shadow 0.2s ease, transform 0.2s ease, border-color 0.2s ease;
  ${({$variant}) => variantStyles[$variant]};

  &:focus-visible {
    outline: 2px solid ${({theme}) => theme.colors.slate};
    outline-offset: 2px;
  }
`

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {children, variant = 'primary', fullWidth, ...props},
  ref,
) {
  return (
    <BaseButton
      ref={ref}
      $variant={variant}
      $fullWidth={fullWidth}
      whileHover={{y: -2, scale: 1.01}}
      whileTap={{scale: 0.99}}
      {...props}
    >
      {children}
    </BaseButton>
  )
})
