import React, { useEffect, useState } from 'react'
import { Line } from '@ant-design/charts'
import { Trans } from '@lingui/macro'

const Card: React.FC = () => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('7')
  const [sum, setSum] = useState(0)
  useEffect(() => {
    asyncFetch()
    asyncFetchSum()
  }, [value])
  const asyncFetchSum = () => {
    fetch('http://api.cofix.io/dashboard/trading/fee/9999')
      .then((response) => response.json())
      .then((json) => {
        const list = json['value']
        let s = 0
        for (let i = 0; i < list.length; ++i) {
          s += list[i]['y']
        }
        setSum(s)
      })
      .catch((error) => console.log('error', error))
  }
  const asyncFetch = () => {
    fetch('http://api.cofix.io/dashboard/trading/fee/' + value)
      .then((response) => response.json())
      .then((json) => setData(json['value']))
      .catch((error) => console.log('error', error))
  }
  const config = {
    data: data,
    xField: 'x',
    yField: 'y',
    seriesField: 'name',
    label: {},
    point: {
      size: 2,
      shape: 'circle',
      style: {
        fill: 'white',
        stroke: '#59c3b1',
        lineWidth: 1,
      },
    },
    tooltip: { showMarkers: false },
    state: {
      active: {
        style: {
          shadowBlur: 4,
          fill: '#59c3b1',
        },
      },
    },
    style: {
      height: 300,
      width: '100%',
    },
    lineStyle: {
      stroke: 'l(0) 0:#5ac276 0.5:#59c3b1 1:#6fd8c4',
    },
    interactions: [{ type: 'marker-active' }],
  }

  const handleChoice = (value: string) => {
    setValue(value)
  }

  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
        <div>
          <div style={{ marginBottom: 10 }}>
            <Trans>Total fee income</Trans>
          </div>
          <div>$ {sum}</div>
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
      <Line {...config} />
    </div>
  )
}

export default Card
