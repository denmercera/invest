import React from 'react';
import Card from './Card';

const RevenueChart = () => {
    // Daily model
    // 50 visitors * 7 EUR = 350 EUR
    // 80 visitors * 7 EUR = 560 EUR

    const scenarios = [
        { label: 'Пессим.', visitors: 30, check: 7, color: '#6C757D' },
        { label: 'Норма', visitors: 50, check: 7.5, color: '#198754' },
        { label: 'Оптим.', visitors: 80, check: 8, color: '#0DCAF0' }
    ];

    const maxRevenue = Math.max(...scenarios.map(s => s.visitors * s.check));
    const height = 200;

    return (
        <Card>
            <h3 className="mb-4">💰 Выручка в день (Сценарии)</h3>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'flex-end', height: `${height}px`, paddingTop: '20px' }}>
                {scenarios.map((s, i) => {
                    const revenue = s.visitors * s.check;
                    const barHeight = (revenue / maxRevenue) * (height - 40);

                    return (
                        <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
                            <div style={{ fontWeight: 'bold', color: s.color }}>{Math.round(revenue)} €</div>
                            <div style={{
                                width: '60px',
                                height: `${barHeight}px`,
                                backgroundColor: s.color,
                                borderRadius: '8px 8px 0 0',
                                transition: 'height 0.5s ease'
                            }}></div>
                            <div style={{ textAlign: 'center', fontSize: '0.9rem' }}>
                                <div style={{ fontWeight: 'bold' }}>{s.label}</div>
                                <div style={{ fontSize: '0.8rem', color: '#888' }}>{s.visitors} чел</div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
                Прогноз дневной выручки при среднем чеке 7-8 €.
            </div>
        </Card>
    );
};

export default RevenueChart;
