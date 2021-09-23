import React, { useState, useEffect } from 'react'
import { Line } from '@ant-design/charts'

const DemoLine: React.FC = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    asyncFetch()
  }, [])
  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const [value, setValue] = useState('1W')
  const handleChoice = (value: string) => {
    setValue(value)
  }
  const config = {
    data: data,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
    style: {
      height: 300,
      width: '100%',
    },
  }
  return (
    <div style={{ padding: '0 20px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
        <div>
          <div style={{ marginBottom: 10 }}>新增用户</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: 120 }}>
          <div
            onClick={() => handleChoice('1W')}
            style={{ color: value === '1W' ? '#5ac276' : 'black', cursor: 'pointer', userSelect: 'none' }}
          >
            1W
          </div>
          <div
            onClick={() => handleChoice('1M')}
            style={{ color: value === '1M' ? '#5ac276' : 'black', cursor: 'pointer', userSelect: 'none' }}
          >
            1M
          </div>
          <div
            onClick={() => handleChoice('All')}
            style={{ color: value === 'All' ? '#5ac276' : 'black', cursor: 'pointer', userSelect: 'none' }}
          >
            All
          </div>
        </div>
      </div>
      <Line {...config} />
    </div>
  )
}

export default DemoLine
