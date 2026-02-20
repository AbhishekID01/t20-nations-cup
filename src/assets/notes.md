## RADAR CHART

```jsx
<ResponsiveContainer width="100%" height="100%">
  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarChartData}>
    <PolarGrid stroke="#4a4a4a" />
    <PolarAngleAxis
      dataKey="stat"
      stroke="#e0e0e0"
      tick={{ fill: "#e0e0e0", fontSize: 12 }}
    />
    <PolarRadiusAxis
      angle={90}
      domain={[0, 100]} // Max value for stats (0-100)
      stroke="#4a4a4a"
      tick={{ fill: "#4a4a4a", fontSize: 10 }}
      tickCount={5} // Show 5 ticks on radius axis
    />
    <Radar
      name={selectedPlayer.name}
      dataKey="A"
      stroke="#34D399" // Emerald-400
      fill="#34D399" // Emerald-400
      fillOpacity={0.6}
    />
  </RadarChart>
</ResponsiveContainer>
```
