import React from 'react';

const SummaryCard = ({ icon, title, value, color }) => {
  return (
    <div className={`bg-white p-5 border border-gray-200 flex items-center space-x-4 border-l-4 ${color}`}>
      <div className={`text-3xl p-3 rounded-full bg-gray-100 ${color.replace('border', 'text')}`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500 font-medium">{title}</p>
        <p className="text-2xl font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default SummaryCard;