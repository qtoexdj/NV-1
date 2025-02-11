import React from 'react';

interface MetricCardProps {
  title: string;
  value: string;
  change?: {
    value: string;
    timeframe: string;
  };
}

const MetricCard: React.FC<MetricCardProps> = ({ title, value, change }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <h3 className="text-gray-500">{title}</h3>
      <p className="text-2xl font-bold">{value}</p>
      {change && (
        <p className="text-green-500">
          {change.value} {change.timeframe}
        </p>
      )}
    </div>
  );
};

export default MetricCard;
