import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Trans} from "@lingui/macro";

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
  const [mining, setMining] = useState(0)
  const [repurchase, setRepurchase] = useState(0)
  const asyncFetchMining = () => {
    fetch('http://api.cofix.io/dashboard/mining/production/9999')
      .then((response) => response.json())
      .then((json) => {
        const list = json['value']
        let s = 0
        for (let i = 0; i < list.length; ++i) {
          s += list[i]['y']
        }
        setMining(s)
      })
      .catch((error) => console.log('error', error))
  }

  const asyncFetchRepurchase = () => {
    fetch('http://api.cofix.io/dashboard/mining/redeem/9999')
      .then((response) => response.json())
      .then((json) => {
        const list = json['value']
        let s = 0
        for (let i = 0; i < list.length; ++i) {
          s += list[i]['y']
        }
        setRepurchase(s)
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(()=> {
    asyncFetchMining()
    asyncFetchRepurchase()
  }, [])

  return (
    <div>
      <Title>{ (mining === 0 || repurchase === 0) ? "-" : mining-repurchase}</Title>
      <Desc><Trans>Current Circulation (COFI)</Trans></Desc>
    </div>
  )
}

export default Card
