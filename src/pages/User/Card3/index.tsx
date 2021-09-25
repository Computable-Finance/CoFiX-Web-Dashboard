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

const Card = () => {
  const [data, setData] = useState(0)
  const asyncFetch = () => {
    fetch('http://api.cofix.io/dashboard/user/overview')
      .then((response) => response.json())
      .then((json) => setData(json['value']["trading"]))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  useEffect(() => {
    asyncFetch()
  }, [])

  return (
    <div>
      <Title>{data}</Title>
      <Desc><Trans>Total trading users</Trans></Desc>
    </div>
  )
}

export default Card
