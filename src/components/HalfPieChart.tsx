import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { COLORS } from "../constans/pieChartColors";
import "../styles/HalfPieChart.scss";

import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { pieChartDataSelector } from "../redux/selectors";

export const HalfPieChart = () => {
  const data = useSelector((state: RootState) =>
    pieChartDataSelector(state.quiz)
  );

  return (
    <>
      <ResponsiveContainer width="100%" height={150}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="100%"
            startAngle={180}
            endAngle={0}
            innerRadius={50}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={2}
            dataKey="value"
          >
            {data.map((_entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            wrapperStyle={{ width: "100%" }}
            verticalAlign="top"
            align="center"
          />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
};
