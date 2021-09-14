import React from 'react';
import { Pie } from '@ant-design/charts';

const Card3: React.FC = () => {
  const data = [
    {
      type: '分类一',
      value: 27,
    },
    {
      type: '分类二',
      value: 25,
    },
    {
      type: '分类三',
      value: 18,
    },
    {
      type: '分类四',
      value: 15,
    },
    {
      type: '分类五',
      value: 10,
    },
    {
      type: '其他',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data: data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    style: {
      width: "100%",
      height: 500,
      margin: 0,
      padding: 40
    },
    interactions: [{type: 'pie-legend-active'}, {type: 'element-active'}],
  };
  return <Pie {...config}/>;
};

export default Card3;