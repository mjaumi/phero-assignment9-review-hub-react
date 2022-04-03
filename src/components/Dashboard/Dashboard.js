import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import useCharts from '../../hooks/useCharts';

const Dashboard = () => {
    const [chart] = useCharts();

    return (
        <section className='py-36 min-h-screen'>
            <h2 className='font-semibold text-4xl mb-20 text-review-hub-base-green'>Sell, Investment & Revenue Data</h2>
            <div className='grid grid-cols-2 w-4/5 mx-auto gap-y-20'>
                {/* line chart */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='font-semibold text-2xl mb-4 text-white'>Month Wise Sell</h2>
                    <LineChart width={400} height={400} data={chart}>
                        <Line type="monotone" dataKey="sell" stroke="#9aef0a" />
                        <XAxis dataKey='month' stroke="#ffffff" />
                        <YAxis stroke="#ffffff" />
                        <Tooltip />
                        <Legend />
                    </LineChart>
                </div>
                {/* area chart */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='font-semibold text-2xl mb-4 text-white'>Investment VS Revenue</h2>
                    <AreaChart width={400} height={400} data={chart}>
                        <XAxis dataKey='month' stroke="#ffffff" />
                        <YAxis stroke="#ffffff" />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Area type="monotone" dataKey="investment" stackId="1" stroke="#9aef0a" fill="#9aef0a" />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#ffffff" fill="#ffffff" />
                    </AreaChart>
                </div>
                {/* bar chart */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='font-semibold text-2xl mb-4 text-white'>Investment VS Revenue</h2>
                    <BarChart width={400} height={400} data={chart}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="investment" stackId="a" fill="#9aef0a" />
                        <Bar dataKey="revenue" stackId="a" fill="#ffffff" />
                    </BarChart>
                </div>
                {/* pie chart  */}
                <div className='flex flex-col justify-center items-center'>
                    <h2 className='font-semibold text-2xl mb-4 text-white'>Investment VS Revenue</h2>
                    <PieChart width={400} height={400}>
                        <Tooltip />
                        <Legend />
                        <Pie data={chart} dataKey="investment" cx="50%" cy="50%" outerRadius={90} fill="#9aef0a" stroke="#201f24" />
                        <Pie data={chart} dataKey="revenue" cx="50%" cy="50%" innerRadius={100} outerRadius={120} fill="#ffffff" stroke="#201f24" label />
                    </PieChart>
                </div>
            </div>
        </section>
    );
};

export default Dashboard;