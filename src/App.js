import "./styles.css";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip
} from "victory";

const earningsData = [
  { quarter: 1, earnings: 13000, label: "$13K" },
  { quarter: 2, earnings: 16500, label: "$16.5K" },
  { quarter: 3, earnings: 14250, label: "$14.25K" },
  { quarter: 4, earnings: 19000, label: "$19K" }
];

export default function App() {
  return (
    <div className="App">
      <VictoryChart domainPadding={20} theme={VictoryTheme.material}>
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis dependentAxis tickFormat={(amt) => `$${amt / 1000}k`} />

        <VictoryBar
          labelComponent={<VictoryTooltip />}
          data={earningsData}
          x="quarter"
          y="earnings"
        />
      </VictoryChart>
    </div>
  );
}
