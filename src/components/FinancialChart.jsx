import React from 'react';
import Card from './Card';

const data = [
    { name: 'Кухня (2130 €)', value: 2130, color: '#0F5132' },
    { name: 'Хранение (800 €)', value: 800, color: '#198754' },
    { name: 'Зал и Вентиляция (5400 €)', value: 5400, color: '#20C997' },
    { name: 'Доставка (2100 €)', value: 2100, color: '#0DCAF0' },
    { name: 'Ремонт и Старт (5900 €)', value: 5900, color: '#6C757D' },
];

const total = data.reduce((acc, item) => acc + item.value, 0);

const FinancialChart = () => {
    // Generate conic-gradient string
    let currentAngle = 0;
    const gradientParts = data.map(item => {
        const percentage = item.value / total;
        const angle = percentage * 360;
        const start = currentAngle;
        const end = currentAngle + angle;
        currentAngle = end;
        return `${item.color} ${start}deg ${end}deg`;
    });

    const gradientString = `conic-gradient(${gradientParts.join(', ')})`;

    return (
        <div className="grid grid-cols-2" style={{ alignItems: 'center' }}>
            <Card>
                <h3>📊 Структура инвестиций</h3>
                <p className="mb-4">Общая сумма: ~17 000 - 19 000 €</p>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {/* CSS Pie Chart */}
                    <div style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: gradientString,
                        position: 'relative',
                        flexShrink: 0
                    }}>
                        {/* Inner White Circle for Donut Effect */}
                        <div style={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            width: '120px',
                            height: '120px',
                            borderRadius: '50%',
                            backgroundColor: 'var(--color-card-bg)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.5rem',
                            fontWeight: 'bold'
                        }}>
                            100%
                        </div>
                    </div>

                    {/* Legend */}
                    <ul style={{ fontSize: '0.9rem' }}>
                        {data.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <div style={{ width: 12, height: 12, backgroundColor: item.color, borderRadius: '50%', marginRight: 8 }}></div>
                                {item.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </Card>

            <div className="grid">
                <Card className="text-center" style={{ backgroundColor: 'var(--color-accent-light)' }}>
                    <h3 style={{ color: 'var(--color-accent-dark)' }}>Окупаемость</h3>
                    <div style={{ fontSize: '3rem', fontWeight: 'bold', color: 'var(--color-accent-main)' }}>10-14</div>
                    <p style={{ color: 'var(--color-accent-dark)' }}>месяцев</p>
                </Card>
                <Card className="text-center">
                    <h3>Чистая прибыль</h3>
                    <div style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>2 000 - 3 500 €</div>
                    <p>в месяц</p>
                </Card>
            </div>
        </div>
    );
};

export default FinancialChart;
