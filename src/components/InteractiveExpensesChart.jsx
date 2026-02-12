import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './Card';

const modelsData = {
    canteen: [
        { name: 'Оборудование', value: 15000, color: '#0F5132' },
        { name: 'Вентиляция и Зал', value: 6000, color: '#10B981' },
        { name: 'Ремонт и Мебель', value: 5000, color: '#059669' },
        { name: 'Авто/Транспорт', value: 4000, color: '#6EE7B7' },
        { name: 'Маркетинг', value: 2500, color: '#D1FAE5' },
        { name: 'Подушка (3 мес)', value: 7500, color: '#FFC107' },
    ],
    darkKitchen: [
        { name: 'Кухня (Оборудование)', value: 8000, color: '#0F5132' },
        { name: 'Вентиляция (Пром)', value: 4000, color: '#1F2937' },
        { name: 'Автопарк', value: 6000, color: '#374151' },
        { name: 'Ремонт/Интерьер', value: 5000, color: '#9CA3AF' }, // 3k repair + 2k office
        { name: 'Подушка (Безопасность)', value: 17000, color: '#FFC107' },
    ]
};

const InteractiveExpensesChart = ({ model = 'canteen' }) => {
    const data = modelsData[model] || modelsData.canteen;

    // Calculate total for center text
    const total = data.reduce((acc, item) => acc + item.value, 0);

    return (
        <Card className="h-full flex flex-col">
            <h3 className="mb-4">Структура инвестиций (~ {total.toLocaleString()} €)</h3>
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
                        <Tooltip formatter={(value) => `${value.toLocaleString()} €`} />
                        <Legend iconType="circle" />
                        <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                            {total.toLocaleString()} €
                        </text>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
                Включает подушку безопасности на 3 месяца (Зарплата + Аренда) * 3 + {model === 'canteen' ? '1000' : '0'} € на непредвиденные расходы.
            </p>
        </Card>
    );
};

export default InteractiveExpensesChart;
