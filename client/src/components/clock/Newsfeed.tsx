import Marquee from 'react-fast-marquee'
import styled from 'styled-components'

const MarqueeContainer = styled.div`
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.blue};
  font-size: min(3vh, 4vw);
  display: flex;
  align-items: center
  font-weight: bold;
  height: 4vh;


  @media only screen and (min-height: 800) {
      height: 10vh;
  }
`

const Newsfeed = ({ headline }: { headline: string }) => {
  return (
    <MarqueeContainer>
      <Marquee
        style={{ fontWeight: 'bold' }}
        gradient={false}
        gradientWidth={10}
        speed={200}
      >
        {headline}
      </Marquee>
    </MarqueeContainer>
  )
}

export default Newsfeed
