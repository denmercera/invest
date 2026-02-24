import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Card from './Card';

const modelsData = {
    canteen: [
        { name: 'Оборудование и кухня', value: 18000, color: '#0F5132' },
        { name: 'Вытяжка и вентиляция', value: 6000, color: '#10B981' },
        { name: 'Ремонт и Мебель', value: 5000, color: '#059669' },
        { name: 'Авто/Транспорт', value: 4000, color: '#6EE7B7' },
        { name: 'Подушка (Безопасность)', value: 12200, color: '#FFC107' },
    ],
    darkKitchen: [
        { name: 'Кухня (Оборудование)', value: 8000, color: '#0F5132' },
        { name: 'Вентиляция (Пром)', value: 4000, color: '#1F2937' },
        { name: 'Автопарк', value: 6000, color: '#374151' },
        { name: 'Ремонт/Интерьер', value: 5000, color: '#9CA3AF' },
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
            <div className="h-[300px] md:h-[400px] w-full relative flex items-center justify-center">
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={70}
                            outerRadius={100}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value.toLocaleString()} €`} />
                        <Legend
                            verticalAlign="bottom"
                            align="center"
                            iconType="circle"
                        />
                    </PieChart>
                </ResponsiveContainer>

                {/* Overlay for perfect centering */}
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-[calc(50%+55px)] flex flex-col items-center justify-center pointer-events-none">
                    <span className="text-xl md:text-3xl font-bold text-black leading-none">
                        {total.toLocaleString()} €
                    </span>
                    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-bold mt-1">всего</span>
                </div>
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
                Включает подушку безопасности на 3 месяца (Зарплата + Аренда) * 3 + {model === 'canteen' ? '1000' : '0'} € на непредвиденные расходы.
            </p>
        </Card>
    );
};

export default InteractiveExpensesChart;
