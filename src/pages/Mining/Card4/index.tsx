import React, {useState} from 'react';
import { Line } from '@ant-design/charts';

const Card4: React.FC = () => {
  const data = [
    {
      year: '1991',
      value: 3,
    },
    {
      year: '1992',
      value: 4,
    },
    {
      year: '1993',
      value: 3.5,
    },
    {
      year: '1994',
      value: 5,
    },
    {
      year: '1995',
      value: 4.9,
    },
    {
      year: '1996',
      value: 6,
    },
    {
      year: '1997',
      value: 7,
    },
    {
      year: '1998',
      value: 9,
    },
    {
      year: '1999',
      value: 13,
    },
  ];
  const config = {
    data: data,
    xField: 'year',
    yField: 'value',
    label: {},
    point: {
      size: 5,
      shape: 'diamond',
      style: {
        fill: 'white',
        stroke: '#5B8FF9',
        lineWidth: 2,
      },
    },
    tooltip: {showMarkers: false},
    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: '#000',
          fill: 'red',
        },
      },
    },
    style: {
      height: 300,
      width: "100%"
    },
    interactions: [{type: 'marker-active'}],
  };
  const [value, setValue] = useState("1W")
  const handleChoice = (value: string) => {
    setValue(value)
  }

  return (
    <div style={{ padding: "0 20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40 }}>
        <div>
          <div style={{marginBottom: 10}}>TVL</div>
          <div>Value</div>
        </div>
        <div style={{display: "flex", justifyContent: "space-between", width: 120}}>
          <div onClick={() => handleChoice("1W")} style={{ color: value === "1W" ? "#5ac276" : "black", cursor: "pointer", userSelect: "none" }}>1W</div>
          <div onClick={() => handleChoice("1M")} style={{ color: value === "1M" ? "#5ac276" : "black", cursor: "pointer", userSelect: "none" }}>1M</div>
          <div onClick={() => handleChoice("All")} style={{ color: value === "All" ? "#5ac276" : "black", cursor: "pointer", userSelect: "none" }}>All</div>
        </div>
      </div>
      <Line {...config} />
    </div>
  );
};

export default Card4;