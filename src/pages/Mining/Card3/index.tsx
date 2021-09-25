import React from 'react'
import styled from 'styled-components'
import {Trans} from "@lingui/macro";
import {toBigNumber} from "../../../libs/web3/util";
import useDAOInfo from "../../../hooks/useDAOInfo";

const Title = styled.div`
  font-family: AmericanTypewriterBold, serif;
  font-weight: bold;
  font-size: 32px;
  text-align: center;
  background: linear-gradient(91.55deg, #53bdf2 0%, #55b1d3 100%);
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
      <Desc><Trans>Current Circulation (COFI)</Trans></Desc>
    </div>
  )
}

export default Card
