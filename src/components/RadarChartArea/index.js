import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from 'recharts';


function RadarChartArea(data) {
  return (
    <ResponsiveContainer>
          <RadarChart outerRadius={100} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" stroke="#000" />
            <PolarRadiusAxis />
            <Radar
              dataKey="value"
              stroke="#000"
              fill="#000"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
  );
}

export default RadarChartArea;