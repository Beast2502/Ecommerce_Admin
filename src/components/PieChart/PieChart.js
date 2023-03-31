import { Pie } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const PieChart = () => {
  const data = [1, 2, 3, 4, 4];
  const options = {
    labels: ["Vaccinated", "Not Vaccinated"],
    datasets: [
      {
        label: "My First Dataset",
        data: data,
        backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
        hoverOffset: 4,
      },
    ],
    height: "50%",
  };
  return (
    <div>
      <Pie data={options} />
    </div>
  );
};

export default PieChart;
