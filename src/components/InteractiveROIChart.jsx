import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine, AreaChart, Area } from 'recharts';
import Card from './Card';

const modelsData = {
    canteen: {
        investment: 42930,
        monthlyProfit: 8350,
        initialBurn: [-2000, -500, 0]
    },
    darkKitchen: {
        investment: 28080,
        monthlyProfit: 6500, // Assumed target profit
        initialBurn: [-2500, -1000, 0] // Assumed slightly higher burn due to delivery-only launch
    }
};

const InteractiveROIChart = ({ model = 'canteen' }) => {
    const config = modelsData[model] || modelsData.canteen;

    const data = [
        { month: 'Старт', balance: -config.investment, cashflow: 0 },
        { month: 'Месяц 1', balance: -config.investment + config.initialBurn[0], cashflow: config.initialBurn[0] },
        { month: 'Месяц 2', balance: -config.investment + config.initialBurn[0] + config.initialBurn[1], cashflow: config.initialBurn[1] },
        { month: 'Месяц 3', balance: -config.investment + config.initialBurn[0] + config.initialBurn[1] + config.initialBurn[2], cashflow: config.initialBurn[2] },
    ];

    // Calculate months 4-12
    let currentBalance = data[3].balance;
    for (let i = 4; i <= 12; i++) {
        currentBalance += config.monthlyProfit;
        data.push({
            month: `Месяц ${i}`,
            balance: currentBalance,
            cashflow: config.monthlyProfit
        });
    }

    const breakEvenMonth = data.findIndex(d => d.balance >= 0);

    return (
        <Card className="h-full flex flex-col">
            <h3 className="mb-2">📉 Финансовая модель</h3>
            <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                Накопительный итог. Точка безубыточности (операционная) — 3-й месяц. Полный возврат инвестиций — {breakEvenMonth > 0 ? breakEvenMonth : '11'}-й месяц.
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
                            formatter={(value) => `${value.toLocaleString()} €`}
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
