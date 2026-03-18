import React, { useState } from 'react';
import Card from './components/Card';
import Button from './components/Button';
import BusinessModel from './components/BusinessModel';
import { Slideshow, Slide, useSlideshow } from './components/Slideshow';
import InteractiveROIChart from './components/InteractiveROIChart';
import InteractiveExpensesChart from './components/InteractiveExpensesChart';
import { ArrowRight, Star, ChartBar, Target, Person, ShieldCheck, Envelope, Smartphone, Check, ShoppingBag, MapPin, LayoutList, Diamond, Display, Rocket, Flame, ShieldExclamation, CreditCard, Clock } from '@gravity-ui/icons';
import bgImage from './assets/bg.png';

const HeroSlide = ({ activeModel, setActiveModel }) => {
  const { nextSlide } = useSlideshow();

  const handleSelect = (model) => {
    setActiveModel(model);
    setTimeout(() => nextSlide(), 10);
  };

  return (
    <Slide style={{ padding: 0, maxWidth: 'none', width: '100vw' }}>
      <div className="flex flex-col md:flex-row h-full w-full">
        {/* Left Side: Content */}
        <div className="w-full md:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-20 bg-white pt-24 pb-8 md:py-12 flex-1">
          <div className="max-w-xl">
            <h1 className="font-poster text-6xl sm:text-7xl md:text-9xl mb-1 md:mb-2 text-black leading-none">
              Вкусно
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 mb-8 md:mb-12 font-medium tracking-tight leading-snug">
              Инвестиционное предложение 2026
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div
                onClick={() => handleSelect('darkKitchen')}
                className={`cursor-pointer group p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[32px] border-2 transition-all flex items-center justify-between ${activeModel === 'darkKitchen' ? 'border-black bg-gray-50' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors ${activeModel === 'darkKitchen' ? 'bg-black text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-black group-hover:text-white'}`}>
                    <Rocket className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-1">Dark Kitchen</h3>
                    <p className="text-sm md:text-base text-gray-500">Только доставка. Быстрый запуск.</p>
                  </div>
                </div>
                <ArrowRight className={`transition-all ${activeModel === 'darkKitchen' ? 'opacity-100 translate-x-1 md:translate-x-2' : 'opacity-0'}`} />
              </div>

              <div
                onClick={() => handleSelect('canteen')}
                className={`cursor-pointer group p-4 sm:p-6 md:p-8 rounded-2xl md:rounded-[32px] border-2 transition-all flex items-center justify-between ${activeModel === 'canteen' ? 'border-[#059669] bg-green-50' : 'border-gray-100 hover:border-gray-300 bg-white'}`}
              >
                <div className="flex items-center gap-4 md:gap-6">
                  <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl flex items-center justify-center transition-colors ${activeModel === 'canteen' ? 'bg-[#059669] text-white' : 'bg-gray-100 text-gray-400 group-hover:bg-[#059669] group-hover:text-white'}`}>
                    <ShoppingBag className="w-6 h-6 md:w-8 md:h-8" />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl md:text-2xl mb-1">Столовая</h3>
                    <p className="text-sm md:text-base text-gray-500">Оффлайн зал + Доставка.</p>
                  </div>
                </div>
                <ArrowRight className={`transition-all text-[#059669] ${activeModel === 'canteen' ? 'opacity-100 translate-x-1 md:translate-x-2' : 'opacity-0'}`} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/2 h-[35vh] sm:h-[40vh] md:h-full overflow-hidden shrink-0">
          <img
            src="/slide1.PNG"
            alt="Вкусно"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Slide>
  );
};

const ModelToggle = ({ activeModel, setActiveModel }) => {
  const { currentSlide } = useSlideshow();

  if (currentSlide === 0) return null;

  return (
    <div className="fixed top-4 right-4 md:top-6 md:right-8 z-[100] bg-white/90 backdrop-blur-md p-1 rounded-2xl border border-gray-200 shadow-xl flex gap-1">
      <button
        onClick={() => setActiveModel('darkKitchen')}
        className={`px-3 py-2 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${activeModel === 'darkKitchen' ? 'bg-black text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        Dark Kitchen
      </button>
      <button
        onClick={() => setActiveModel('canteen')}
        className={`px-3 py-2 md:px-4 md:py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${activeModel === 'canteen' ? 'bg-[#059669] text-white shadow-sm' : 'text-gray-500 hover:bg-gray-100'}`}
      >
        Столовая
      </button>
    </div>
  );
};

export default function App() {
  const [activeModel, setActiveModel] = useState('canteen');
  // We need to access context, but useSlideshow is internal to Slideshow. 
  // Actually, we can't use useSlideshow here because App is outside Slideshow.
  // We need to pass the selection logic down or handle it inside the Slide 1 component.

  /* Dark Kitchen Data Updates (Target ~80k)
     Reform: 6,000
     Equipment: 15,000
     Ventilation: 8,000
     Car/Deliv: 12,000
     Office/Inv: 4,000
     Cushion: 35,000
     Total: 80,000
  */
  const dkEquipment = [
    { name: 'Ремонт помещения', value: '3,000 €' },
    { name: 'Оборудование (кухня)', value: '8,000 €' },
    { name: 'Вентиляция (пром)', value: '4,000 €' },
    { name: 'Автопарк / Доставка', value: '6,000 €' },
    { name: 'Офис + Инвентарь', value: '2,000 €' },
    { name: 'Подушка (Безопасность) * 3 мес', value: '26,100 €', highlight: true }
  ];

  /* Canteen Data Updates (Target ~80k)
     Equip: 25,000
     Vent/Hall: 12,000
     Repair: 10,000
     Car: 8,000
     Marketing: 5,000
     Cushion: 20,000
     Total: 80,000
  */
  const canteenEquipment = [
    { name: 'Оборудование и кухня', value: '18,000 €' },
    { name: 'Вытяжка и вентиляция', value: '6,000 €' },
    { name: 'Ремонт / Мебель', value: '5,000 €' },
    { name: 'Машина / Авто', value: '4,000 €' },
    { name: 'Подушка (Безопасность) * 3 мес', value: '36,600 €', highlight: true }
  ];

  const dkOpex = {
    team: [
      { name: 'Повар', value: '1,000 €', icon: <Star /> },
      { name: 'Управляющий', value: '2,000 €', icon: <ShieldCheck /> },
      { name: 'Водитель / Уборщица', value: '1,200 €', icon: <Flame /> },
      { name: 'Менеджеры (Менеджмент)', value: '600 €', icon: <Person /> },
      { name: 'Бухгалтер', value: '300 €', icon: <ChartBar /> },
      { name: 'Тех менеджер', value: '400 €', icon: <Rocket /> },
    ],
    fixed: [
      { name: 'Аренда', value: '1,000 €', icon: <MapPin /> },
      { name: 'Реклама + Таргет', value: '1,000 €', icon: <Smartphone /> },
      { name: 'Налоги + Касса + Комм.', value: '1,200 €', icon: <Diamond /> },
    ],
    totalTeam: '5,500 €',
    totalFixed: '3,200 €'
  };

  const canteenOpex = {
    team: [
      { name: 'Повара (3 чел)', value: '2,400 €', icon: <Star /> },
      { name: 'Управляющий (шеф-повар)', value: '2,000 €', icon: <ShieldCheck /> },
      { name: 'Кассиры (2 чел)', value: '1,600 €', icon: <ShoppingBag /> },
      { name: 'Раздача еды (2 чел)', value: '1,600 €', icon: <Person /> },
      { name: 'Уборка / Водитель', value: '1,200 €', icon: <Flame /> },
      { name: 'Бухгалтер', value: '300 €', icon: <ChartBar /> },
      { name: 'Тех менеджер', value: '400 €', icon: <Rocket /> },
    ],
    fixed: [
      { name: 'Аренда помещения', value: '1,200 €', icon: <MapPin /> },
      { name: 'Коммуналка', value: '500 €', icon: <Diamond /> },
      { name: 'Маркетинг', value: '1,000 €', icon: <Smartphone /> },
    ],
    totalTeam: '9,500 €',
    totalFixed: '2,700 €'
  };

  const opexData = activeModel === 'canteen' ? canteenOpex : dkOpex;
  const equipData = activeModel === 'canteen' ? canteenEquipment : dkEquipment;
  const totalInvest = activeModel === 'canteen' ? '69,600 €' : '49,100 €';
  return (
    <div className="app">
      <Slideshow
        extraContent={<ModelToggle activeModel={activeModel} setActiveModel={setActiveModel} />}
      >
        <HeroSlide activeModel={activeModel} setActiveModel={setActiveModel} />

        {/* SLIDE 2: IDEA & SCALE */}
        <Slide title={activeModel === 'canteen' ? "Концепция и Рынок" : "Концепция Dark Kitchen"} className={activeModel === 'canteen' ? "bg-[#059669] text-white" : "bg-[#1f2937] text-white"}>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            {/* Concept Card - Large */}
            <div className="col-span-1 md:col-span-12 p-8 rounded-3xl bg-white text-black flex flex-col justify-between">
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
                    ? 'За 6 лет жизни в Сербии мы увидели четкий тренд: русские рестораны закрываются из-за сложности управления и высоких цен. Люди устали от долгого ожидания и переплат за сервис.'
                    : 'Оптимизированное производство для работы с агрегаторами (Wolt, Glovo) и собственной доставки в офисы/на дом.'}
                </p>
                {activeModel === 'canteen' && (
                  <p className="text-lg leading-snug mb-6 text-gray-600 italic border-l-4 border-[#059669] pl-4">
                    Видим огромный спрос на "честную еду": быстро, по-домашнему вкусно и по доступной цене. Пустота между дорогими ресторанами и фастфудом — наша ниша.
                  </p>
                )}
              </div>
              <div className="flex flex-col h-full gap-4 md:gap-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 flex-1">
                  <div className="bg-white/10 p-5 sm:p-6 md:p-8 rounded-[32px] flex flex-col justify-center backdrop-blur-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-6">Почему {activeModel === 'canteen' ? 'Фри-фло Столовая' : 'Dark Kitchen'}?</h3>
                    <ul className="space-y-3 md:space-y-4 text-base md:text-lg">
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          {activeModel === 'canteen' ? <ShoppingBag style={{ width: 20, height: 20 }} /> : <Rocket style={{ width: 20, height: 20 }} />}
                        </div>
                        <div>
                          <span className="font-bold">
                            {activeModel === 'canteen' ? 'Современный формат:' : 'Оптимизированное производство:'}
                          </span>
                          {' '}
                          {activeModel === 'canteen'
                            ? 'вкусная домашняя еда, высокая скорость обслуживания и честные цены. Никакого ожидания официантов.'
                            : 'для работы с агрегаторами (Wolt, Glovo) и собственной доставки в офисы/на дом.'}
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          <Star style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                          <span className="font-bold">Кухня:</span> Русская / Домашняя.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          <CreditCard style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                          <span className="font-bold">Средний чек:</span> {activeModel === 'canteen' ? '7 - 9 €' : '10 - 12 €'}.
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="p-2 bg-white/20 rounded-full shrink-0 mt-1">
                          <Clock style={{ width: 20, height: 20 }} />
                        </div>
                        <div>
                          <span className="font-bold">Время обслуживания:</span> {activeModel === 'canteen' ? '3 мин' : '15 мин (доставка)'}.
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white/10 p-5 sm:p-6 md:p-8 rounded-[32px] flex flex-col justify-center backdrop-blur-sm">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-6">Рынок Сербии (Белград)</h3>
                    <div className="space-y-3 md:space-y-6">
                      <div className="flex items-center gap-3 p-3 bg-white/20 rounded-xl">
                        <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center text-white font-bold text-xs">ИТ</div>
                        <div>
                          <div className="font-bold">ИТ-специалисты</div>
                          <div className="text-xs text-gray-200">Белград (100к+)</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/20 rounded-xl">
                        <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center font-bold text-white"><Person /></div>
                        <div>
                          <div className="font-bold">Простые обыватели</div>
                          <div className="text-xs text-gray-200">Мужчины и женщины</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-white/20 rounded-xl">
                        <div className="w-10 h-10 bg-white/30 rounded-full flex items-center justify-center font-bold text-white"><ShoppingBag /></div>
                        <div>
                          <div className="font-bold">На вынос / Домой</div>
                          <div className="text-xs text-gray-200">Wolt / Glovo / С собой</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 shrink-0">
                  <div className="p-5 sm:p-6 md:p-8 rounded-[32px] bg-white/10 text-white flex items-center gap-4 backdrop-blur-sm">
                    <div className="p-3 bg-white/20 rounded-full text-white"><MapPin /></div>
                    <div>
                      <h4 className="font-bold text-lg">Локация</h4>
                      <p className="text-sm opacity-80">Белград: Врачар или Новый Белград</p>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 md:p-8 rounded-[32px] bg-white/10 text-white flex items-center gap-4 backdrop-blur-sm">
                    <div className="p-3 bg-white/20 rounded-full text-white"><Check /></div>
                    <div>
                      <h4 className="font-bold text-lg">Старт проекта</h4>
                      <p className="text-sm opacity-80">Февраль 2026 &rarr; Открытие Апрель 2026</p>
                    </div>
                  </div>
                </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">

            {/* Team Block */}
            <div className="bg-gray-50 text-black rounded-3xl p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <Person className="text-black" /> Команда
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">{opexData.totalTeam} / мес</span>
              </div>

              <div className="grid grid-cols-1 gap-2">
                {opexData.team.map((member, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-black">
                        {member.icon}
                      </div>
                      <span className="font-bold text-gray-700 text-sm">{member.name}</span>
                    </div>
                    <span className="font-bold text-sm">{member.value}</span>
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
          <div className="flex flex-col h-full gap-2 md:gap-4 overflow-y-auto pr-1 pb-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 md:gap-4 shrink-0">
              <div className="bg-gray-50 p-3 md:p-4 rounded-2xl border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-black mb-1 md:mb-2">
                  {activeModel === 'canteen' ? <ShoppingBag className="w-4 h-4 md:w-5 md:h-5" /> : <Rocket className="w-4 h-4 md:w-5 md:h-5" />}
                </div>
                <h4 className="text-base md:text-lg font-bold mb-1">
                  {activeModel === 'canteen' ? '1. Зал (Оффлайн)' : '1. Масштаб'}
                </h4>
                <div className="text-xl md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">
                  {activeModel === 'canteen' ? '60 ' : '100% '}
                  <span className="text-[10px] md:text-xs text-gray-400 font-normal">
                    {activeModel === 'canteen' ? 'чел/день' : 'Фокус на доставку'}
                  </span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">
                  {activeModel === 'canteen' ? 'Стационарный трафик. Русская кухня.' : 'Минимальная аренда — максимум кухни.'}
                </p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-2xl border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-black mb-1 md:mb-2"><Smartphone className="w-4 h-4 md:w-5 md:h-5" /></div>
                <h4 className="text-base md:text-lg font-bold mb-1">2. Доставка</h4>
                <div className="text-xl md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">
                  {activeModel === 'canteen' ? '30' : '60'} <span className="text-[10px] md:text-xs text-gray-400 font-normal">зак/день</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">Wolt / Glovo. Обед на дом.</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-2xl border border-gray-100">
                <div className="w-8 h-8 md:w-10 md:h-10 bg-gray-100 rounded-full flex items-center justify-center text-black mb-1 md:mb-2"><LayoutList className="w-4 h-4 md:w-5 md:h-5" /></div>
                <h4 className="text-base md:text-lg font-bold mb-1">3. Питание компаний</h4>
                <div className="text-xl md:text-2xl font-bold text-gray-800 mb-0 md:mb-1">
                  {activeModel === 'canteen' ? '60' : '80'} <span className="text-[10px] md:text-xs text-gray-400 font-normal">обедов</span>
                </div>
                <p className="text-[10px] md:text-xs text-gray-500 leading-tight">Корпоративные контракты.</p>
              </div>
            </div>

            <div className="flex-1 bg-gray-50 rounded-2xl p-2 md:p-4 min-h-[300px] shrink-0">
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
                  <li className="flex items-center gap-2 font-bold"><Check className="w-4 h-4" /> Реклама в 40 чатах Телеграм</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="w-4 h-4" /> Таргет на русскоязычных (Inst)</li>
                  <li className="flex items-center gap-2 font-bold"><Check className="w-4 h-4" /> Листовки в офисы рядом</li>
                </ul>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 9: VISUALS */}
        <Slide title="Атмосфера">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 h-full items-center">
            <div className="h-[200px] md:h-[400px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0143.JPG" alt="Интерьер 1" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] md:h-[400px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0144.JPG" alt="Интерьер 2" className="w-full h-full object-cover" />
            </div>
            <div className="h-[200px] md:h-[400px] bg-gray-100 rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <img src="/IMG_0145.JPG" alt="Интерьер 3" className="w-full h-full object-cover" />
            </div>
          </div>
        </Slide>

        {/* SLIDE 10: CONTACTS */}
        <Slide>
          <div className="text-center">
            <h2 className="text-4xl md:text-7xl font-bold mb-4">Давайте обсудим?</h2>
            <p className="text-lg md:text-2xl mb-8 md:mb-16 text-gray-600">
              Рынок свободен. Нужно занимать нишу сейчас.
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-8 justify-center mb-10 md:mb-16">
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 w-full md:w-[300px] flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4">
                  <Envelope className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">Телеграм</div>
                <div className="text-[var(--color-accent-main)] font-bold">@vkusnoporus</div>
              </div>
              <div className="bg-gray-50 rounded-3xl p-6 md:p-8 w-full md:w-[300px] flex flex-col items-center">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4">
                  <Smartphone className="w-6 h-6 md:w-8 md:h-8" />
                </div>
                <div className="text-lg md:text-xl font-bold mb-1 md:mb-2">Телефон</div>
                <div className="text-[var(--color-accent-main)] font-bold">+381 61 681 9650</div>
              </div>
            </div>

            <div className="flex flex-col items-center gap-4">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                <img src="/natalia.png" alt="Наталия Романова" className="w-full h-full object-cover" />
              </div>
              <div className="text-[#1d1d1f] font-bold">
                Наталия Романова<br />
                <span className="text-[#888] font-normal text-sm md:text-base">Основатель проекта</span>
              </div>
            </div>
          </div>
        </Slide>
      </Slideshow>
    </div>
  );
}
