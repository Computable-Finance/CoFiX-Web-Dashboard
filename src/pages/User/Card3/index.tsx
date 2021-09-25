import React, {useEffect, useState} from 'react'
import styled from 'styled-components'

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
`

const Card = () => {
  const [data, setData] = useState(0)
  const asyncFetch = () => {
    fetch('http://api.cofix.io/dashboard/user/overview')
      .then((response) => response.json())
      .then((json) => setData(json['value']["redeem"]))
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
      <Desc>redeem</Desc>
    </div>
  )
}

export default Card
