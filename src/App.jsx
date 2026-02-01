import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import BusinessModel from './components/BusinessModel';
import { Slideshow, Slide, useSlideshow } from './components/Slideshow';
import InteractiveROIChart from './components/InteractiveROIChart';
import InteractiveExpensesChart from './components/InteractiveExpensesChart';
import { ArrowRight, Star, ChartBar, Target, Person, ShieldCheck, Envelope, Smartphone, Check, ShoppingBag, MapPin, LayoutList, Diamond, Display, Rocket, Flame, ShieldExclamation } from '@gravity-ui/icons';
import bgImage from './assets/bg.png';

// Button that uses the context to navigate
const StartButton = ({ label, onClick, className, variant = 'primary' }) => {
  return (
    <Button
      className={`px-6 py-4 text-lg md:text-xl w-full md:w-auto ${className}`}
      style={{
        backgroundColor: variant === 'primary' ? 'var(--color-accent-main)' : '#333',
        color: 'white'
      }}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default function App() {
  const [activeModel, setActiveModel] = useState('canteen');
  // We need to access context, but useSlideshow is internal to Slideshow. 
  // Actually, we can't use useSlideshow here because App is outside Slideshow.
  // We need to pass the selection logic down or handle it inside the Slide 1 component.

  /* Dark Kitchen Data Updates
     Ventilation: 2,500
     Cushion: 15,000 (approx 2 months)
     Total: ~28,080
  */
  const dkEquipment = [
    { name: 'Ремонт помещения', value: '2,000 €' },
    { name: 'Оборудование (Кухня + Хранение)', value: '3,730 €' },
    { name: 'Вентиляция и рабочая зона', value: '2,500 €' },
    { name: 'Машина + Доставка', value: '4,600 €' },
    { name: 'Офис + Инвентарь', value: '250 €' },
    { name: 'Подушка (2 мес)', value: '15,000 €', highlight: true }
  ];

  const canteenEquipment = [
    { name: 'Оборудование', value: '9,830 €' },
    { name: 'Вентиляция и зал', value: '5,400 €' },
    { name: 'Ремонт / Мебель', value: '3,500 €' },
    { name: 'Машина / Авто', value: '4,000 €' },
    { name: 'Маркетинг + Док.', value: '1,100 €' },
    { name: 'Подушка (3 мес)', value: '21,100 €', highlight: true }
  ];

  const dkOpex = {
    team: [
      { name: 'Повар', value: '1,000 €', icon: <Star /> },
      { name: 'Управляющий', value: '1,500 €', icon: <ShieldCheck /> },
      { name: 'Водитель / Уборщица', value: '1,200 €', icon: <Flame /> },
      { name: 'Менеджеры (Менеджмент)', value: '600 €', icon: <Person /> },
    ],
    fixed: [
      { name: 'Аренда', value: '1,000 €', icon: <MapPin /> },
      { name: 'Реклама + Таргет', value: '1,000 €', icon: <Smartphone /> },
      { name: 'Налоги + Касса + Комм.', value: '1,200 €', icon: <Diamond /> },
    ],
    totalTeam: '~4,300 €',
    totalFixed: '~3,200 €'
  };

  const canteenOpex = {
    team: [
      { name: 'Повара (2 чел)', value: '2,000 €', icon: <Star /> },
      { name: 'Управляющий', value: '1,500 €', icon: <ShieldCheck /> },
      { name: 'Кассир', value: '800 €', icon: <ShoppingBag /> },
      { name: 'Уборка / Водитель', value: '1,200 €', icon: <Flame /> },
    ],
    fixed: [
      { name: 'Аренда помещения', value: '1,200 €', icon: <MapPin /> },
      { name: 'Коммуналка', value: '500 €', icon: <Diamond /> },
      { name: 'Маркетинг', value: '1,000 €', icon: <Smartphone /> },
    ],
    totalTeam: '~5,500 €',
    totalFixed: '~2,700 €'
  };

  const opexData = activeModel === 'canteen' ? canteenOpex : dkOpex;
  const equipData = activeModel === 'canteen' ? canteenEquipment : dkEquipment;
  const totalInvest = activeModel === 'canteen' ? '42,930 €' : '28,080 €';
  return (
    <div className="app">
      <Slideshow>
        {/* SLIDE 1: HERO */}
        <Slide style={{ padding: 0, maxWidth: 'none', width: '100vw' }}>
          <div className="flex flex-col h-full w-full">
            {/* Top Image - Full Width */}
            <div className="w-full h-[30vh] md:h-[45%] overflow-hidden">
              <img src="/slide1.PNG" alt="Вкусно" className="w-full h-full object-cover" />
            </div>

            {/* Content - shifted left */}
            <div className="flex-1 flex flex-col justify-center px-8 md:px-16 text-left bg-white py-8">
              <div className="max-w-4xl">
                <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 md:mb-6 text-black leading-none tracking-tighter">
                  <span className="font-poster text-6xl sm:text-7xl md:text-8xl">Вкусно</span> — <span className="text-[#059669]">
                    {activeModel === 'canteen' ? 'Столовая' : 'Дарк Китчен'}
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-10 leading-snug max-w-xl">
                  Выберите модель инвестирования для просмотра презентации:
                </p>
                <div className="flex flex-col md:flex-row gap-4">
                  <div
                    onClick={() => { setActiveModel('canteen'); document.querySelector('.swiper-button-next')?.click(); }}
                    className="cursor-pointer group p-6 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#059669] transition-all bg-white hover:bg-green-50 w-full md:w-[320px]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-green-100 rounded-lg text-green-700"><ShoppingBag /></div>
                      <h3 className="font-bold text-lg">Классическая Столовая</h3>
                    </div>
                    <p className="text-sm text-gray-500">Оффлайн зал + Доставка. <br />Проверенная модель.</p>
                    <div className="mt-4 font-bold text-[#059669] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Выбрать эту модель <ArrowRight width={16} />
                    </div>
                  </div>

                  <div
                    onClick={() => { setActiveModel('darkKitchen'); document.querySelector('.swiper-button-next')?.click(); }}
                    className="cursor-pointer group p-6 rounded-2xl border-2 border-[#E5E7EB] hover:border-[#333] transition-all bg-white hover:bg-gray-50 w-full md:w-[320px]"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-gray-200 rounded-lg text-black"><Rocket /></div>
                      <h3 className="font-bold text-lg">Dark Kitchen</h3>
                    </div>
                    <p className="text-sm text-gray-500">Только доставка (Wolt, Glovo + Своя). <br />Быстрый запуск.</p>
                    <div className="mt-4 font-bold text-black group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Выбрать эту модель <ArrowRight width={16} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 2: IDEA & SCALE */}
        <Slide title={activeModel === 'canteen' ? "Концепция и Рынок" : "Концепция Dark Kitchen"} className={activeModel === 'canteen' ? "bg-[#059669] text-white" : "bg-[#1f2937] text-white"}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            {/* Concept Card - Large */}
            <div className="col-span-1 md:col-span-8 p-8 rounded-3xl bg-white text-black flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 rounded-full">
                    {activeModel === 'canteen' ? <ShoppingBag style={{ width: 24, height: 24 }} /> : <Rocket style={{ width: 24, height: 24 }} />}
                  </div>
                  <h3 className="text-2xl font-bold">
                    {activeModel === 'canteen' ? 'Фри-фло Столовая' : 'Фабрика-кухня (Delivery Only)'}
                  </h3>
                </div>
                <p className="text-xl leading-snug mb-6 text-gray-800">
                  {activeModel === 'canteen'
                    ? 'Современный формат: вкусная домашняя еда, высокая скорость обслуживания и честные цены. Никакого ожидания официантов.'
                    : 'Оптимизированное производство для работы с агрегаторами (Wolt, Glovo) и собственной доставки в офисы/на дом.'}
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-gray-50 p-4 rounded-xl flex-1">
                  <div className="text-sm opacity-70 mb-1">Кухня</div>
                  <div className="font-bold text-lg">Русская / Домашняя</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex-1">
                  <div className="text-sm opacity-70 mb-1">Средний чек</div>
                  <div className="font-bold text-lg">{activeModel === 'canteen' ? '7 - 9 €' : '10 - 12 €'}</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex-1">
                  <div className="text-sm opacity-70 mb-1">Время</div>
                  <div className="font-bold text-lg">{activeModel === 'canteen' ? '3 мин' : '15 мин (дост)'}</div>
                </div>
              </div>
            </div>

            {/* Target Audience - Vertical */}
            <div className="col-span-1 md:col-span-4 p-8 rounded-3xl bg-white text-black flex flex-col justify-between">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Person style={{ width: 20 }} /> Целевая аудитория
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black font-bold text-xs">ИТ</div>
                  <div>
                    <div className="font-bold">ИТ-специалисты</div>
                    <div className="text-xs text-gray-500">Белград (100к+)</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-black"><Person /></div>
                  <div>
                    <div className="font-bold">Простые обыватели</div>
                    <div className="text-xs text-gray-500">Мужчины и женщины</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                  <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-black"><ShoppingBag /></div>
                  <div>
                    <div className="font-bold">На вынос / Домой</div>
                    <div className="text-xs text-gray-500">Wolt / Glovo / С собой</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Location & Timeline - Bottom Row */}
            <div className="col-span-1 md:col-span-6 p-6 rounded-3xl bg-white text-black flex items-center gap-4">
              <div className="p-4 bg-gray-100 rounded-full text-black"><MapPin /></div>
              <div>
                <h4 className="font-bold text-lg">Локация</h4>
                <p className="text-sm opacity-80">Белград: Врачар или Новый Белград</p>
              </div>
            </div>

            <div className="col-span-1 md:col-span-6 p-6 rounded-3xl bg-white text-black flex items-center gap-4">
              <div className="p-4 bg-gray-100 rounded-full text-black"><Check /></div>
              <div>
                <h4 className="font-bold text-lg">Старт проекта</h4>
                <p className="text-sm opacity-80">Февраль 2026 &rarr; Открытие Апрель 2026</p>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 3: EXPERIENCE */}
        <Slide title="Команда и опыт">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full items-center">
            {/* Left: Text Block */}
            <div className="p-8 rounded-3xl bg-gray-50 h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-black"><ShieldCheck width={24} height={24} /></div>
                Наш опыт
              </h3>
              <p className="text-xl text-gray-700 leading-snug mb-8">
                Мы успешно обеспечивали питание в офисах крупнейших компаний.
                Нашими услугами ежедневно пользовались сотрудники ведущих технологических брендов.
              </p>
              <p className="text-lg text-gray-600 border-t border-gray-200 pt-8 leading-snug">
                Мы знаем все нюансы: от оптимизации стоимости продуктов до управления качеством.
                Налаженные процессы и проверенные поставщики.
              </p>
            </div>

            {/* Right: Clients Grid */}
            <div className="grid grid-cols-1 gap-4">
              <div className="text-center mb-2 text-gray-400 font-medium text-sm">Нам доверяют</div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center justify-center h-32">
                <img src="/yandex.png" alt="Яндекс" className="h-16 w-auto object-contain" />
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center justify-center h-32">
                <img src="/rzd.png" alt="РЖД" className="h-14 w-auto object-contain" />
              </div>
              <div className="bg-gray-50 p-8 rounded-3xl flex items-center justify-center h-32">
                <img src="/navi.png" alt="Нави" className="h-16 w-auto object-contain" />
              </div>
            </div>
          </div>
        </Slide>

        <Slide title="Структура инвестиций">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 h-full">
            {/* Chart Area */}
            <div className="col-span-1 md:col-span-5 bg-gray-50 rounded-3xl p-4">
              <InteractiveExpensesChart model={activeModel} />
            </div>

            {/* Grid of Expenses */}
            <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
              {/* Header */}
              <div className="flex justify-between items-end border-b pb-4">
                <span className="text-gray-500 text-sm font-bold">Детализация запуска</span>
                <span className="text-4xl font-bold text-green-700">{totalInvest}</span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {equipData.map((item, idx) => (
                  <div key={idx} className={`p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm`}>
                    <div className={`text-gray-500 font-medium ${item.highlight ? 'font-bold' : ''}`}>{item.name}</div>
                    <div className={`p-2 rounded-lg text-black font-bold ${item.highlight ? 'bg-yellow-100' : 'bg-gray-100'}`}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 5: MONTHLY EXPENSES */}
        <Slide title="Операционные расходы" className={activeModel === 'canteen' ? "bg-[#059669] text-white" : "bg-[#1f2937] text-white"}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">

            {/* Team Block */}
            <div className="bg-gray-50 text-black rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Person className="text-black" /> Команда
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">{opexData.totalTeam} / мес</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {opexData.team.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black">
                        {member.icon}
                      </div>
                      <span className="font-bold text-gray-700">{member.name}</span>
                    </div>
                    <span className="font-bold">{member.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Fixed Costs Block */}
            <div className="bg-white text-black rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Target className="text-black" /> Постоянные расходы
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">{opexData.totalFixed} / мес</span>
              </div>

              <div className="space-y-6">
                {opexData.fixed.map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-4 ${idx !== opexData.fixed.length - 1 ? 'pb-4 border-b border-gray-100' : ''}`}>
                    <div className="p-3 bg-gray-100 rounded-xl">
                      {React.cloneElement(item.icon, { className: 'text-black' })}
                    </div>
                    <div>
                      <div className="text-2xl font-bold">{item.value}</div>
                      <div className="text-gray-500">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Slide>

        {/* SLIDE 6: FINANCIAL MODEL */}
        <Slide title="Финансовая модель">
          <div className="flex flex-col h-full gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4">
                  {activeModel === 'canteen' ? <ShoppingBag /> : <Rocket />}
                </div>
                <h4 className="text-xl font-bold mb-2">
                  {activeModel === 'canteen' ? '1. Зал (Оффлайн)' : '1. Масштаб'}
                </h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {activeModel === 'canteen' ? '40 ' : '100% '}
                  <span className="text-sm text-gray-400 font-normal">
                    {activeModel === 'canteen' ? 'чел/день' : 'Фокус на доставку'}
                  </span>
                </div>
                <p className="text-gray-500 leading-snug">
                  {activeModel === 'canteen' ? 'Стационарный трафик. Русская кухня.' : 'Минимальная аренда — максимум кухни.'}
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4"><Smartphone /></div>
                <h4 className="text-xl font-bold mb-2">2. Доставка</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {activeModel === 'canteen' ? '20' : '50'} <span className="text-sm text-gray-400 font-normal">зак/день</span>
                </div>
                <p className="text-gray-500 leading-snug">Wolt / Glovo. Обед на дом.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4"><LayoutList /></div>
                <h4 className="text-xl font-bold mb-2">3. Питание компаний</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">
                  {activeModel === 'canteen' ? '50' : '80'} <span className="text-sm text-gray-400 font-normal">обедов</span>
                </div>
                <p className="text-gray-500 leading-snug">Корпоративные контракты.</p>
              </div>
            </div>

            <div className="h-[300px] md:flex-1 bg-gray-50 rounded-3xl p-4 overflow-hidden">
              <InteractiveROIChart model={activeModel} />
            </div>
          </div>
        </Slide>

        {/* SLIDE 7: INVESTMENT SUM */}
        <Slide title="Инвестиционное предложение">
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#666' }}>Необходимая сумма инвестиций</div>
            <div className="text-6xl md:text-8xl font-bold text-[#059669] mb-8 md:mb-12">
              {totalInvest}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-[1000px] mx-auto">
              <Card>
                <h4>Доля инвестора</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>30%</div>
                <p style={{ fontSize: '0.9rem' }}>от чистой прибыли (навсегда)</p>
              </Card>
              <Card>
                <h4>Возврат тела</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>100%</div>
                <p style={{ fontSize: '0.9rem' }}>приоритетные выплаты до возврата</p>
              </Card>
              <Card>
                <h4>Контроль</h4>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>Полный</div>
                <p style={{ fontSize: '0.9rem' }}>прозрачная отчетность в Телеграм</p>
              </Card>
            </div>
          </div>
        </Slide>

        {/* SLIDE 8: BREAK EVEN */}
        <Slide title="Точка безубыточности">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 h-full items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">Первые шаги</h3>
              <p className="mb-8 text-xl text-gray-600 leading-snug">
                Первые 3 месяца — планово-убыточные. Мы закладываем это в модель.
              </p>

              <div className="relative border-l-4 border-gray-200 ml-4 space-y-8 pl-8 py-2">
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-red-500 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">Месяц 1: Открытие</h4>
                  <p className="text-gray-500">-2,000 € (Убыток)</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-orange-400 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">Месяц 2: Рост</h4>
                  <p className="text-gray-500">-500 € (Набор оборотов)</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-yellow-400 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">Месяц 3: Окупаемость</h4>
                  <p className="text-gray-500">0 € (Выход в ноль)</p>
                </div>
                <div className="relative">
                  <span className="absolute -left-[42px] top-1 w-6 h-6 rounded-full bg-green-500 border-4 border-white"></span>
                  <h4 className="font-bold text-lg">Месяц 4: Прибыль</h4>
                  <p className="text-gray-500 font-bold text-green-700">+1,500 € (Первый плюс)</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-black mb-4 flex items-center gap-3">
                <div className="p-2 bg-gray-100 rounded-full text-black"><ShieldCheck width={24} height={24} /></div>
                Риски
              </h3>
              <div className="bg-gray-50 p-6 rounded-2xl mb-4">
                <h4 className="font-bold text-red-900 mb-2">Риск: Медленный старт</h4>
                <p className="text-gray-600 leading-snug">Если мы не наберем 60 гостей в день за 3 месяца.</p>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="font-bold text-green-900 mb-2 font-bold">Решение:</h4>
                <ul className="space-y-2 text-green-800 leading-snug">
                  <li className="flex items-center gap-2 font-bold"><Check className="w-4 h-4" /> Реклама в 200+ чатах Телеграм</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="w-4 h-4" /> Таргет на русскоязычных (Inst)</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="w-4 h-4" /> Листовки в офисы рядом</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 9: VISUALS */}
        <Slide title="Атмосфера">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 h-full items-center">
            <div className="h-[250px] md:h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0143.JPG" alt="Интерьер 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[250px] md:h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0144.JPG" alt="Интерьер 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-[250px] md:h-[400px] bg-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0145.JPG" alt="Интерьер 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </Slide>

        {/* SLIDE 10: CONTACTS */}
        <Slide>
          <div className="text-center">
            <h2 className="text-5xl md:text-7xl font-bold mb-4">Давайте обсудим?</h2>
            <p className="text-xl md:text-2xl mb-8 md:mb-16 text-gray-600">
              Рынок свободен. Нужно занимать нишу сейчас.
            </p>

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 justify-center mb-12 md:mb-16">
              <div className="bg-gray-50 rounded-3xl p-8 w-full md:w-[300px] flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4">
                  <Envelope style={{ width: 32, height: 32 }} />
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Телеграм</div>
                <div style={{ color: 'var(--color-accent-main)', fontWeight: 'bold' }}>@vkusnoporus</div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-8 w-full md:w-[300px] flex flex-col items-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4">
                  <Smartphone style={{ width: 32, height: 32 }} />
                </div>
                <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>Телефон</div>
                <div style={{ color: 'var(--color-accent-main)', fontWeight: 'bold' }}>+381 61 681 9650</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-24 h-24 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/natalia.png" alt="Наталия Романова" className="w-full h-full object-cover" />
              </div>
              <div style={{ color: '#1d1d1f', fontWeight: 'bold' }}>
                Наталия Романова<br />
                <span style={{ color: '#888', fontWeight: 'normal' }}>Основатель проекта</span>
              </div>
            </div>
          </div>
        </Slide>
      </Slideshow>
    </div>
  );
}


