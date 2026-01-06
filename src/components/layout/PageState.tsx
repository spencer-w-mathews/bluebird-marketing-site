import styled from 'styled-components'
import {Card} from '../ui/Card'
import {Section} from '../ui/Section'

const StateCard = styled(Card)`
  text-align: center;
  padding: 40px;
`

export const LoadingState = ({label = 'Loading content...'}: {label?: string}) => (
  <Section>
    <StateCard>{label}</StateCard>
  </Section>
)

export const ErrorState = ({message}: {message?: string}) => (
  <Section>
    <StateCard>{message || 'Something went wrong.'}</StateCard>
  </Section>
)
