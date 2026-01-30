import React from 'react';
import Card from './Card';

const ROIChart = () => {
    // Data points: Months 0 to 18
    // Investment: -19000
    // Monthly Profit: ~3000 (avg)
    // Month 0: -19000
    // Month 1: -16000
    // ...
    // Month 6: -1000
    // Month 7: +2000 (Break even approx)

    const investment = 19000;
    const monthlyProfit = 2800; // Conservative avg
    const months = 14;

    // Generate data points
    const data = Array.from({ length: months + 1 }, (_, i) => {
        return {
            month: i,
            balance: -investment + (i * monthlyProfit)
        };
    });

    // Chart dimensions
    const width = 600;
    const height = 300;
    const padding = 40;

    // Scales
    const maxBalance = Math.max(...data.map(d => d.balance));
    const minBalance = Math.min(...data.map(d => d.balance));
    const rangeY = maxBalance - minBalance;

    const getX = (month) => padding + (month / months) * (width - padding * 2);
    const getY = (balance) => height - padding - ((balance - minBalance) / rangeY) * (height - padding * 2);

    const zeroLineY = getY(0);

    const points = data.map(d => `${getX(d.month)},${getY(d.balance)}`).join(' ');

    return (
        <Card className="w-full">
            <h3 className="mb-4">📈 График окупаемости</h3>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible', maxWidth: '800px' }}>
                    {/* Grid Lines */}
                    <line x1={padding} y1={zeroLineY} x2={width - padding} y2={zeroLineY} stroke="#ccc" strokeDasharray="4" strokeWidth="2" />
                    <text x={width - padding + 10} y={zeroLineY} dy="5" fontSize="12" fill="#666">0 €</text>

                    {/* Y Axis Labels (Approx) */}
                    <text x={padding - 10} y={getY(-investment)} textAnchor="end" fontSize="12" fill="#d32f2f">-{investment}€</text>
                    <text x={padding - 10} y={getY(maxBalance)} textAnchor="end" fontSize="12" fill="#198754">+{Math.round(maxBalance)}€</text>

                    {/* X Axis Labels */}
                    {data.map((d, i) => i % 2 === 0 && (
                        <text key={i} x={getX(d.month)} y={height - 10} textAnchor="middle" fontSize="12" fill="#666">{d.month} мес</text>
                    ))}

                    {/* The Line */}
                    <polyline points={points} fill="none" stroke="var(--color-accent-main)" strokeWidth="3" />

                    {/* Points */}
                    {data.map((d, i) => (
                        <circle
                            key={i}
                            cx={getX(d.month)}
                            cy={getY(d.balance)}
                            r="4"
                            fill={d.balance >= 0 ? "#198754" : "#d32f2f"}
                            stroke="#fff"
                            strokeWidth="2"
                        />
                    ))}

                    {/* Break Even Annotation */}
                    <text x={getX(investment / monthlyProfit)} y={zeroLineY - 10} textAnchor="middle" fontWeight="bold" fontSize="12" fill="#198754">
                        Точка 0
                    </text>
                </svg>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
                Прогноз накопительным итогом. Выход в "плюс" на ~7-й месяц работы.
            </div>
        </Card>
    );
};

export default ROIChart;
