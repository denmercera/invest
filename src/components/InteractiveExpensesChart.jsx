import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './Card';

const data = [
    { name: 'Оборудование и запуск', value: 21830, color: '#0F5132' },
    { name: 'Подушка (3 мес + запас)', value: 21100, color: '#FFC107' },
];

// Calculate total for center text
const total = data.reduce((acc, item) => acc + item.value, 0);

const InteractiveExpensesChart = () => {
    return (
        <Card className="h-full flex flex-col">
            <h3 className="mb-4">Структура инвестиций (~ {total} €)</h3>
            <div className="h-[250px] md:h-[350px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value} €`} />
                        <Legend iconType="circle" />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            {total} €
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
                Включает подушку безопасности на 3 месяца (Зарплата + Аренда) * 3 + 1000 € на непредвиденные расходы.
            </p>
        </Card>
    );
};

export default InteractiveExpensesChart;
