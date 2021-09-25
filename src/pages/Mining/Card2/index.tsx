import React from 'react'
import styled from 'styled-components'
import {Trans} from "@lingui/macro";

const Title = styled.div`
  font-family: AmericanTypewriterBold, serif;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  background: linear-gradient(91.55deg, #59c3af 0%, #6acec6 100%);
  background-clip: initial;
  -webkit-background-clip: text;
  color: transparent;
`

const Desc = styled.div`
  font-family: OPPOSansLight;
  font-weight: lighter;
  font-size: 12px;
  text-align: center;
  color: #878787;
`

const Card: React.FC = () => {
  return (
    <div>
      <Title>72438.908</Title>
      <Desc><Trans>Total repurchase (COFI)</Trans></Desc>
    </div>
  )
}

export default Card
