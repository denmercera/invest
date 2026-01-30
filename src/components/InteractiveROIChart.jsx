import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, AreaChart, Area } from 'recharts';
import Card from './Card';

const InteractiveROIChart = () => {
    const investment = 19000;
    const monthlyBurn = 14000; // Salary + Rent + Food Cost + Tax approx
    const monthlyRevenue = 17500; // ~50-60 checks
    // Net ~3500

    // Simulation
    // Month 0: -19000
    // Month 1: -19000 - 3000 (losses start) + revenue... simplified:
    // Let's say Month 1-2 ramp up, Month 3 stable.

    const data = [
        { month: 'Старт', balance: -19000, cashflow: 0 },
        { month: 'Месяц 1', balance: -20500, cashflow: -1500 }, // Ramp up loss
        { month: 'Месяц 2', balance: -21000, cashflow: -500 },  // Ramp up loss
        { month: 'Месяц 3', balance: -20500, cashflow: 500 },   // Small profit
        { month: 'Месяц 4', balance: -18500, cashflow: 2000 },  // Growth
        { month: 'Месяц 5', balance: -16000, cashflow: 2500 },
        { month: 'Месяц 6', balance: -13000, cashflow: 3000 },
        { month: 'Месяц 7', balance: -10000, cashflow: 3000 },
        { month: 'Месяц 8', balance: -7000, cashflow: 3000 },
        { month: 'Месяц 9', balance: -4000, cashflow: 3000 },
        { month: 'Месяц 10', balance: -1000, cashflow: 3000 },
        { month: 'Месяц 11', balance: 2000, cashflow: 3000 }, // ROI Break even
        { month: 'Месяц 12', balance: 5000, cashflow: 3000 },
    ];

    return (
        <Card className="h-full flex flex-col">
            <h3 className="mb-2">📉 Финансовая модель</h3>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                Накопительный итог. Точка безубыточности (операционная) — 3-й месяц. Полный возврат инвестиций — 11-й месяц.
            </div>
            <div className="h-[250px] md:h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                            <linearGradient id="colorBalance" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#198754" stopOpacity={0.8} />
                                <stop offset="95%" stopColor="#198754" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip
                            formatter={(value) => `${value} €`}
                            contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                        />
                        <ReferenceLine y={0} stroke="#000" />
                        <Area
                            type="monotone"
                            dataKey="balance"
                            stroke="#198754"
                            fillOpacity={1}
                            fill="url(#colorBalance)"
                            name="Баланс"
                        />
                        <Line type="monotone" dataKey="cashflow" stroke="#ff7300" strokeWidth={2} name="Прибыль/мес" dot={false} />
                        <Legend verticalAlign="top" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </Card>
    );
};

export default InteractiveROIChart;
