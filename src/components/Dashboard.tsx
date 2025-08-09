import React from 'react';
import LineChart from './charts/LineChart';
import BarChart from './charts/BarChart';
import MetricCard from './MetricCard';
import { useTheme } from '../context/ThemeContext';

interface DashboardProps {
  data: any[];
  socket: any;
}

const Dashboard: React.FC<DashboardProps> = ({ data, socket }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dashboard ${theme}`}>
      <header className="dashboard-header">
        <h1>Real-Time Analytics Dashboard</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </header>
      
      <div className="metrics-grid">
        <MetricCard title="Total Revenue" value="$1.2M" change="+12%" />
        <MetricCard title="Active Users" value="8,432" change="+5%" />
        <MetricCard title="Conversion Rate" value="3.4%" change="+0.8%" />
        <MetricCard title="Avg Response Time" value="95ms" change="-15%" />
      </div>

      <div className="charts-grid">
        <LineChart data={data} title="Real-Time Transactions" />
        <BarChart data={data} title="Revenue by Category" />
      </div>
    </div>
  );
};

export default Dashboard;