import { useContext } from 'react'
import Marquee from 'react-fast-marquee'
import styled from 'styled-components'

import { IsMobileContext } from '../../App'

const MarqueeContainer = styled.div<{ isMobile: boolean }>`
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.blue};
  font-size: min(3vh, 4vw);
  display: flex;
  align-items: center
  font-weight: bold;
  height: ${(props) => (props.isMobile ? '10vh' : '4vh')};
`

const Newsfeed = ({ headline }: { headline: string }) => {
  const isMobile = useContext(IsMobileContext)

  return (
    <MarqueeContainer isMobile={isMobile}>
      <Marquee
        style={{ fontWeight: 'bold' }}
        gradient={false}
        gradientWidth={10}
        speed={isMobile ? 150 : 200}
      >
        {headline}
      </Marquee>
    </MarqueeContainer>
  )
}

export default Newsfeed
