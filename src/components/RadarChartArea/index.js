import React from 'react';
import {
    Radar,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
  } from 'recharts';


function RadarChartArea({data}) {
  
  return (
    <ResponsiveContainer>
          <RadarChart outerRadius={100} data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" stroke="#571089" />
            <PolarRadiusAxis />
            <Radar
              dataKey="value"
              stroke="#571089"
              fill="#571089"
              fillOpacity={0.6}
            />
          </RadarChart>
        </ResponsiveContainer>
  );
}

export default RadarChartArea;