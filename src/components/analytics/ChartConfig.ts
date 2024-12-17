import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
} from 'chart.js';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Default chart options
export const defaultOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom' as const,
    },
    title: {
      display: true,
      text: 'Campaign Analytics'
    }
  }
};

// Chart colors
export const chartColors = {
  primary: 'rgb(249, 115, 22)', // orange-500
  secondary: 'rgb(59, 130, 246)', // blue-500
  tertiary: 'rgb(16, 185, 129)', // green-500
  quaternary: 'rgb(139, 92, 246)' // purple-500
};