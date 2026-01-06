import styled from 'styled-components'

export const Badge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: ${({theme}) => theme.radii.pill};
  background: rgba(35, 66, 97, 0.08);
  color: ${({theme}) => theme.colors.navy};
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.01em;
`
