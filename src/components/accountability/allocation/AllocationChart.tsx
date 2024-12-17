import React from 'react';
import { Pie } from 'react-chartjs-2';

interface Allocation {
  category: string;
  amount: number;
  description: string;
}

interface AllocationChartProps {
  allocations: Allocation[];
}

export const AllocationChart: React.FC<AllocationChartProps> = ({ allocations }) => {
  const data = {
    labels: allocations.map(a => a.category),
    datasets: [
      {
        data: allocations.map(a => a.amount),
        backgroundColor: [
          'rgb(249, 115, 22)',
          'rgb(59, 130, 246)',
          'rgb(16, 185, 129)',
          'rgb(139, 92, 246)'
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const
      }
    }
  };

  return (
    <div className="relative">
      <Pie data={data} options={options} />
    </div>
  );
};