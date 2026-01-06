import styled from 'styled-components'

const Glow = styled.div<{top?: string; left?: string; size?: string; color?: string}>`
  position: absolute;
  top: ${({top}) => top || '10%'};
  left: ${({left}) => left || '5%'};
  width: ${({size}) => size || '320px'};
  height: ${({size}) => size || '320px'};
  background: radial-gradient(circle, ${({color}) => color || 'rgba(109, 146, 180, 0.35)'} 0%, transparent 60%);
  filter: blur(60px);
  opacity: 0.6;
  pointer-events: none;
  z-index: 0;
`

export const GradientBackdrop = () => (
  <>
    <Glow />
    <Glow top="60%" left="70%" size="260px" color="rgba(46, 115, 76, 0.32)" />
  </>
)
