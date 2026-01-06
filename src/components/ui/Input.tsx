import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  padding: 14px 14px;
  border-radius: ${({theme}) => theme.radii.md};
  border: 1px solid ${({theme}) => theme.colors.border};
  background: #ffffff;
  font-size: 1rem;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({theme}) => theme.colors.navy};
    box-shadow: 0 0 0 3px rgba(35, 66, 97, 0.12);
  }
`
