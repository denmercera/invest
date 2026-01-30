import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, AreaChart, Area } from 'recharts';
import Card from './Card';

const InteractiveROIChart = () => {
    const investment = 42930;
    const monthlyBurn = 9500; // Rent + Salary + Food Cost + Tax
    const monthlyRevenue = 17850; // ~70-90 checks
    const monthlyProfit = 8350;

    const data = [
        { month: 'Старт', balance: -42930, cashflow: 0 },
        { month: 'Месяц 1', balance: -44930, cashflow: -2000 },
        { month: 'Месяц 2', balance: -45430, cashflow: -500 },
        { month: 'Месяц 3', balance: -45430, cashflow: 0 },
        { month: 'Месяц 4', balance: -37080, cashflow: 8350 },
        { month: 'Месяц 5', balance: -28730, cashflow: 8350 },
        { month: 'Месяц 6', balance: -20380, cashflow: 8350 },
        { month: 'Месяц 7', balance: -12030, cashflow: 8350 },
        { month: 'Месяц 8', balance: -3680, cashflow: 8350 },
        { month: 'Месяц 9', balance: 4670, cashflow: 8350 },    // ROI Break even
        { month: 'Месяц 10', balance: 13020, cashflow: 8350 },
        { month: 'Месяц 11', balance: 21370, cashflow: 8350 },
        { month: 'Месяц 12', balance: 29720, cashflow: 8350 },
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
