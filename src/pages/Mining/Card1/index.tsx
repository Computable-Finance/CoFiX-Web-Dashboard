import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {Trans} from "@lingui/macro";

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
  const [sum, setSum] = useState(0)
  const asyncFetchSum = () => {
    fetch('http://api.cofix.io/dashboard/mining/production/9999')
      .then((response) => response.json())
      .then((json) => {
        console.log(json)
        const list = json['value']
        let s = 0
        for (let i = 0; i < list.length; ++i) {
          s += list[i]['y']
        }
        setSum(s)
      })
      .catch((error) => console.log('error', error))
  }

  useEffect(()=> {
    asyncFetchSum()
  }, [])

  return (
    <div>
      <Title>{sum===0 ? "-" : sum}</Title>
      <Desc><Trans>Total Mining (COFI)</Trans></Desc>
    </div>
  )
}

export default Card
