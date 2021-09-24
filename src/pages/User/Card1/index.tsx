import React from 'react'
import styled from 'styled-components'

const Title = styled.div`
  font-family: AmericanTypewriterBold, serif;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  background: linear-gradient(91.55deg, #df5a4a 0%, #d68d6f 100%);
  background-clip: initial;
  -webkit-background-clip: text;
  color: transparent;
`

const Desc = styled.div`
  font-family: OPPOSansLight;
  font-weight: lighter;
  font-size: 12px;
  text-align: center;
`

const Card: React.FC = () => {
  return (
    <div>
      <Title>72438.908</Title>
      <Desc>Accumulated repurchase (COFI)</Desc>
    </div>
  )
}

export default Card
