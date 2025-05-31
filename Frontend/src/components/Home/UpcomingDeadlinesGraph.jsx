import React from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LabelList,
} from 'recharts';

const data = [
  { name: 'Mon', tasks: 8 },
  { name: 'Tue', tasks: 15 },
  { name: 'Wed', tasks: 10 },
  { name: 'Thu', tasks: 14 },
  { name: 'Fri', tasks: 19 }, // current day (highlighted)
  { name: 'Sat', tasks: 17 },
  { name: 'Sun', tasks: 13 },
];

const HIGHLIGHT_INDEX = 4; // Index of the bar to highlight

const CustomizedBar = (props) => {
  const { fill, x, y, width, height, index, value } = props;
  const isHighlighted = index === HIGHLIGHT_INDEX;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx={6}
        ry={6}
        fill={isHighlighted ? '#7575C6' : '#F0EFFD'}
      />
      <text
        x={x + width / 2}
        y={y + height / 2 + 5}
        textAnchor="middle"
        fill="#7575C6"
        fontSize={13}
        fontWeight={isHighlighted ? 600 : 500}
      >
        {value}
      </text>
    </g>
  );
};

const UpcomingDeadlinesGraph = () => {
  return (
    <div className="h-40 px-4">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#444' }} />
          <YAxis hide />
          <Tooltip />
          <Bar
            dataKey="tasks"
            barSize={26}
            shape={<CustomizedBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UpcomingDeadlinesGraph;
