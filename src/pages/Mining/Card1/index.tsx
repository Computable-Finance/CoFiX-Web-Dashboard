import React from 'react'
import styled from 'styled-components'
import {Trans} from "@lingui/macro";
import useDAOInfo from 'src/hooks/useDAOInfo'
import {toBigNumber} from "../../../libs/web3/util";

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
  color: #878787;
`

const Card: React.FC = () => {
  const daoInfo = useDAOInfo()
  return (
    <div>
      <Title>{daoInfo ? toBigNumber(daoInfo.cofiCirculationAmount).toFormat(0) : '--'}</Title>
      <Desc><Trans>Total Mining (COFI)</Trans></Desc>
    </div>
  )
}

export default Card
