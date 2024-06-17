import { useContext } from "react";
import { PatientsContext } from "./../../Home";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  plugins,
} from "chart.js";
ChartJs.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
export const LineChart = () => {
  const { singlePatient } = useContext(PatientsContext);
  let lastSixMonths = singlePatient["diagnosis_history"].slice(0, 6);
  const labels = lastSixMonths.map((item) => `${item.month} ${item.year}`);
  const systolicData = lastSixMonths.map(
    (item) => item.blood_pressure.systolic.value
  );
  const diastolicData = lastSixMonths.map(
    (item) => item.blood_pressure.diastolic.value
  );
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: false,
        text: "blood",
        position: "left",
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        ticks: {
          margin: 0, // Adjust padding between Y-axis scales
        },
      },
    },
  };
  const data = {
    // last 6 monthes
    labels: labels.reverse(),
    // two lines for blood presure
    datasets: [
      {
        data: diastolicData.reverse(),
        borderColor: "#7E6CAB",
        pointBackgroundColor: "#7E6CAB",
        pointStyle: "circle",
        pointBorderWidth: 4,
      },
      {
        data: systolicData.reverse(),
        borderColor: "#C26EB4",
        pointBackgroundColor: "#C26EB4",
        pointStyle: "circle",
        pointBorderWidth: 4,
      },
    ],
  };
  return (
    <div style={{ width: "100%",paddingLeft:'0' }}>
      <Line options={options} data={data} />
    </div>
  );
};
