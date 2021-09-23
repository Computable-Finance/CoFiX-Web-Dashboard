import React, { useEffect, useState } from 'react'
import { Pie } from '@ant-design/charts'

const Card: React.FC = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    asyncFetch()
  }, [])
  const asyncFetch = () => {
    fetch('http://api.cofix.io/dashboard/pair/tvl/pool')
      .then((response) => response.json())
      .then((json) => setData(json['value']))
      .catch((error) => {
        console.log('fetch data failed', error)
      })
  }
  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'y',
    colorField: 'x',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    smooth: true,
    style: {
      width: '100%',
      height: 210,
      margin: 0,
    },
    interactions: [{ type: 'pie-legend-active' }, { type: 'element-active' }],
  }
  return <Pie {...config} />
}

export default Card
