
import React, { useState, useMemo } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend, LineChart, Line, ReferenceLine } from 'recharts';
import { ArrowLeft, TrendingUp, TrendingDown, DollarSign, Activity, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FinancialModelPage = () => {
    const navigate = useNavigate();
    const [scenario, setScenario] = useState('realistic'); // 'pessimistic', 'realistic', 'optimistic'

    // --- INPUT ASSUMPTIONS (Model Inputs) ---
    const CAPEX = 80000;

    const scenarios = {
        pessimistic: {
            name: 'Пессимистичный',
            dailyChecks: [30, 40, 50, 60, 60, 65, 70, 70, 75, 75, 80, 80],
            avgCheck: 8.5,
            foodCostPct: 0.35, // Higher waste
        },
        realistic: {
            name: 'Реалистичный',
            dailyChecks: [40, 60, 80, 100, 120, 130, 140, 145, 150, 155, 160, 160],
            avgCheck: 9.0,
            foodCostPct: 0.32,
        },
        optimistic: {
            name: 'Оптимистичный',
            dailyChecks: [50, 80, 120, 150, 180, 200, 220, 230, 240, 250, 260, 270],
            avgCheck: 9.5,
            foodCostPct: 0.30, // Optimized
        }
    };

    const currentScenario = scenarios[scenario];

    // --- OPEX CONSTANTS ---
    const RENT = 1200;
    const UTILITIES = 500;
    const MARKETING = 1000;
    const PAYROLL_FIXED = 6500; // Manager(2000) + Cooks + Cleaning
    const OTHER_FIXED = 300;

    // --- CALCULATION ENGINE ---
    const monthlyData = useMemo(() => {
        let cumulativeCashFlow = -CAPEX;
        const workingDays = 30;

        return currentScenario.dailyChecks.map((checks, index) => {
            const month = index + 1;

            // Revenue
            const revenue = checks * currentScenario.avgCheck * workingDays;

            // COGS & Variable
            const cogs = revenue * currentScenario.foodCostPct;
            const packaging = revenue * 0.03;
            const variableOpex = revenue * 0.02; // acquiring

            const grossProfit = revenue - cogs - packaging;

            // Fixed Costs
            const taxes = revenue * 0.05;
            const totalFixed = RENT + UTILITIES + MARKETING + PAYROLL_FIXED + OTHER_FIXED;

            // EBITDA
            const ebitda = grossProfit - totalFixed - variableOpex;

            // Net Profit
            const netProfit = ebitda - taxes;

            // Cash Flow
            cumulativeCashFlow += netProfit;

            return {
                month: `M${month}`,
                revenue: Math.round(revenue),
                cogs: Math.round(cogs),
                packaging: Math.round(packaging),
                variableOpex: Math.round(variableOpex),
                payroll: PAYROLL_FIXED,
                taxes: Math.round(taxes),
                netProfit: Math.round(netProfit),
                ebitda: Math.round(ebitda),
                cumulativeCashFlow: Math.round(cumulativeCashFlow),
                checks: checks
            };
        });
    }, [scenario, currentScenario]);

    // --- KPIS ---
    const totalYearRevenue = monthlyData.reduce((acc, curr) => acc + curr.revenue, 0);
    const totalYearProfit = monthlyData.reduce((acc, curr) => acc + curr.netProfit, 0);
    const totalYearEBITDA = monthlyData.reduce((acc, curr) => acc + curr.ebitda, 0);

    const avgMonthlyRevenue = Math.round(totalYearRevenue / 12);
    const netMargin = ((totalYearProfit / totalYearRevenue) * 100).toFixed(1);

    // Payback
    const paybackMonthIndex = monthlyData.findIndex(d => d.cumulativeCashFlow >= 0);
    const paybackPeriod = paybackMonthIndex !== -1 ? `${paybackMonthIndex + 1} мес.` : '> 12 мес.';

    // Break-even (approximate daily checks needed)
    // Fixed Costs / (AvgCheck - VarCostsPerCheck)
    const varCostsPerCheck = (currentScenario.avgCheck * currentScenario.foodCostPct) + (currentScenario.avgCheck * 0.05);
    const contributionMargin = currentScenario.avgCheck - varCostsPerCheck;
    const totalMonthlyFixed = RENT + UTILITIES + MARKETING + PAYROLL_FIXED + OTHER_FIXED;
    const breakEvenChecks = Math.ceil((totalMonthlyFixed / 30) / contributionMargin);


    return (
        <div className="min-h-screen bg-gray-50 text-gray-900 font-sans pb-20">

            {/* Header */}
            <header className="bg-white border-b border-gray-200 sticky top-0 z-30">
                <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
                        <div className="text-right md:text-left">
                            <h1 className="text-3xl font-poster text-[#059669] tracking-wide">Вкусно</h1>
                            <p className="text-xs md:text-sm text-gray-500 font-sans">Financial Model • Столовая</p>
                        </div>
                    </div>
                    <div className="flex bg-gray-100 p-1 rounded-lg w-full md:w-auto overflow-x-auto">
                        {Object.keys(scenarios).map(s => (
                            <button
                                key={s}
                                onClick={() => setScenario(s)}
                                className={`flex-1 md:flex-none px-3 py-2 text-xs md:text-sm font-medium rounded-md transition-all whitespace-nowrap ${scenario === s ? 'bg-white shadow-sm text-blue-600' : 'text-gray-500 hover:text-gray-900'
                                    }`}
                            >
                                {scenarios[s].name}
                            </button>
                        ))}
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-4 py-8">

                {/* KPI Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
                    <KpiCard title="Общие Инвестиции (CAPEX)" value="€80,000" sub="Фикс. затраты (всё включено)" icon={<DollarSign className="text-gray-400" />} />
                    <KpiCard title="Точка безубыточности" value={`${breakEvenChecks} чеков/день`} sub="Покрытие операционки" icon={<Activity className="text-orange-400" />} />
                    <KpiCard
                        title="Срок окупаемости"
                        value={paybackPeriod}
                        sub="Возврат тела инвестиций"
                        icon={<Calendar className="text-blue-400" />}
                        highlight={paybackMonthIndex !== -1}
                    />
                    <KpiCard
                        title="Прибыль (1-й год)"
                        value={`€${totalYearProfit.toLocaleString()}`}
                        sub={`${netMargin}% PnL Margin`}
                        icon={<TrendingUp className="text-green-500" />}
                        highlight
                    />
                </div>

                {/* Charts Row 1 */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
                    {/* P&L Composition */}
                    <div className="lg:col-span-2 bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Monthly P&L (Выручка / Прибыль)</h3>
                        <div className="h-[250px] md:h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={monthlyData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" axisLine={false} tickLine={false} style={{ fontSize: '12px' }} />
                                    <YAxis axisLine={false} tickLine={false} tickFormatter={(v) => `€${v / 1000}k`} style={{ fontSize: '12px' }} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
                                        formatter={(value) => [`€${value.toLocaleString()}`, '']}
                                    />
                                    <Legend wrapperStyle={{ fontSize: '12px' }} />
                                    <Bar dataKey="revenue" name="Выручка" fill="#E5E7EB" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="ebitda" name="EBITDA" fill="#60A5FA" radius={[4, 4, 0, 0]} />
                                    <Bar dataKey="netProfit" name="Net Profit" fill="#10B981" radius={[4, 4, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Cash Flow */}
                    <div className="bg-white p-4 md:p-6 rounded-xl border border-gray-200 shadow-sm">
                        <h3 className="text-lg font-bold mb-4 md:mb-6">Cumulative Cash Flow (Накопленный итог)</h3>
                        <div className="h-[250px] md:h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={monthlyData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorCf" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.1} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="month" fontSize={12} tickLine={false} axisLine={false} />
                                    <YAxis fontSize={12} tickLine={false} axisLine={false} tickFormatter={(v) => `${v / 1000}k`} />
                                    <Tooltip formatter={(value) => `€${value.toLocaleString()}`} />
                                    <ReferenceLine y={0} stroke="#000" strokeDasharray="3 3" />
                                    <Area type="monotone" dataKey="cumulativeCashFlow" stroke="#059669" strokeWidth={3} fillOpacity={1} fill="url(#colorCf)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <div className="mt-4 text-xs md:text-sm text-gray-500 text-center">
                            Старт (Max Risk): -€{CAPEX.toLocaleString()}
                        </div>
                    </div>
                </div>

                {/* Detailed Table */}
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h3 className="text-lg font-bold">Детальный прогноз (1 год)</h3>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-sm text-left">
                            <thead className="bg-gray-50 text-gray-500">
                                <tr>
                                    <th className="px-6 py-3 font-medium whitespace-nowrap sticky left-0 bg-gray-50 z-10">Метрика / Месяц</th>
                                    {monthlyData.map(d => <th key={d.month} className="px-4 py-3 font-medium text-right">{d.month}</th>)}
                                    <th className="px-6 py-3 font-bold text-right bg-gray-100 min-w-[100px]">Итого</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                <tr>
                                    <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap sticky left-0 bg-white shadow-sm md:shadow-none">Чеков / день</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right">{d.checks}</td>)}
                                    <td className="px-6 py-3 text-right font-bold bg-gray-50">-</td>
                                </tr>
                                <tr className="bg-green-50/50">
                                    <td className="px-6 py-3 font-bold text-gray-900 whitespace-nowrap sticky left-0 bg-green-50 shadow-sm md:shadow-none">Выручка (Revenue)</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right">€{d.revenue.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-bold bg-green-50">€{totalYearRevenue.toLocaleString()}</td>
                                </tr>

                                {/* COGS Section */}
                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white italic">Себестоимость (32%)</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{d.cogs.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{monthlyData.reduce((acc, c) => acc + c.cogs, 0).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white italic">Упаковка (3%)</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{d.packaging.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{monthlyData.reduce((acc, c) => acc + c.packaging, 0).toLocaleString()}</td>
                                </tr>

                                {/* OPEX Section */}
                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white">ФОТ (Зарплаты)</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{d.payroll.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{(PAYROLL_FIXED * 12).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white">Аренда + ЖКУ</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{(RENT + UTILITIES).toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{((RENT + UTILITIES) * 12).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white">Маркетинг</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{MARKETING.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{(MARKETING * 12).toLocaleString()}</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white text-xs">Прочее (Банк 2% + Расходники)</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{(d.variableOpex + 300).toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{monthlyData.reduce((acc, c) => acc + c.variableOpex + 300, 0).toLocaleString()}</td>
                                </tr>

                                <tr className="bg-blue-50/50">
                                    <td className="px-6 py-3 font-bold text-gray-900 pl-8 whitespace-nowrap sticky left-0 bg-blue-50">EBITDA</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right font-bold text-blue-600">€{d.ebitda.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-bold bg-blue-50">€{totalYearEBITDA.toLocaleString()}</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-3 text-gray-500 pl-8 whitespace-nowrap sticky left-0 bg-white italic">Налоги (5%)</td>
                                    {monthlyData.map(d => <td key={d.month} className="px-4 py-3 text-right text-red-400">-€{d.taxes.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-medium text-gray-500">-€{monthlyData.reduce((acc, c) => acc + c.taxes, 0).toLocaleString()}</td>
                                </tr>

                                <tr>
                                    <td className="px-6 py-3 font-bold text-gray-900 border-t border-gray-200 whitespace-nowrap sticky left-0 bg-white">Чистая прибыль (Net)</td>
                                    {monthlyData.map(d => <td key={d.month} className={`px-4 py-3 text-right font-bold ${d.netProfit > 0 ? 'text-green-600' : 'text-red-500'}`}>€{d.netProfit.toLocaleString()}</td>)}
                                    <td className="px-6 py-3 text-right font-bold bg-gray-100 border-t border-gray-200">€{totalYearProfit.toLocaleString()}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </main>
        </div>
    );
};

const KpiCard = ({ title, value, sub, icon, highlight }) => (
    <div className={`bg-white p-6 rounded-xl border ${highlight ? 'border-green-200 bg-green-50/30' : 'border-gray-200'} shadow-sm flex items-start justify-between`}>
        <div>
            <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
            <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{value}</h3>
            <p className="text-xs text-gray-400 mt-2">{sub}</p>
        </div>
        <div className="p-3 bg-gray-50 rounded-lg">
            {icon}
        </div>
    </div>
);

export default FinancialModelPage;
