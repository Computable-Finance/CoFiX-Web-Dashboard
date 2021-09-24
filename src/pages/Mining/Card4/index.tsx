import React, { useState, useEffect } from 'react'
import { Column } from '@ant-design/charts'
import { Trans } from '@lingui/macro'

const Card: React.FC = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('7')
  useEffect(() => {
    asyncFetch()
  }, [value])
  const asyncFetch = () => {
    fetch('http://api.cofix.io/dashboard/mining/production/' + value)
      .then((response) => response.json())
      .then((json) => setData(json['value']))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const handleChoice = (value: string) => {
    setValue(value)
  }
  const config = {
    data: data,
    isGroup: true,
    xField: 'x',
    yField: 'y',
    seriesField: 'name',
    style: {
      height: 300,
      width: '100%',
    },
  }
  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
        <div>
          <div style={{ marginBottom: 10 }}>
            <Trans>Daily Mining (COFI)</Trans>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 120 }}>
          <div
            onClick={() => handleChoice('7')}
            style={{ color: value === '7' ? '#5ac276' : 'black', cursor: 'pointer', userSelect: 'none' }}
          >
            <Trans>1W</Trans>
          </div>
          <div
            onClick={() => handleChoice('30')}
            style={{ color: value === '30' ? '#5ac276' : 'black', cursor: 'pointer', userSelect: 'none' }}
          >
            <Trans>1M</Trans>
          </div>
          <div
            onClick={() => handleChoice('9999')}
            style={{ color: value === '9999' ? '#5ac276' : 'black', cursor: 'pointer', userSelect: 'none' }}
          >
            <Trans>All</Trans>
          </div>
        </div>
      </div>
      <Column {...config} />
    </div>
  )
}

export default Card
