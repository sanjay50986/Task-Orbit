import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mon', value: 20 },
  { name: 'Tue', value: 30 },
  { name: 'Wed', value: 60 },
  { name: 'Thu', value: 55 },
  { name: 'Fri', value: 70 },
  { name: 'Sat', value: 65 },
  { name: 'Sun', value: 75 },
];

const CustomXAxisTick = ({ x, y, payload }) => {
  const isToday = payload.value === 'Wed';
  return (
    <text
      x={x}
      y={y + 10}
      textAnchor="middle"
      fontWeight={isToday ? 'bold' : 'normal'}
      fill="#444"
      fontSize={12}
    >
      {payload.value}
    </text>
  );
};

const TeamPerformanceChart = () => {
  return (
    <div className="h-40 px-4">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#7575C6" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#7575C6" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" tick={<CustomXAxisTick />} />
          <YAxis hide />
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#7575C6"
            strokeWidth={2}
            dot={{ stroke: '#7575C6', strokeWidth: 2, fill: '#fff', r: 4 }}
            activeDot={{ r: 5 }}
            fillOpacity={1}
            fill="url(#chartGradient)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TeamPerformanceChart;
