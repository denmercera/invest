
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';
import BusinessModel from './components/BusinessModel';
import { Slideshow, Slide, useSlideshow } from './components/Slideshow';
import InteractiveROIChart from './components/InteractiveROIChart';
import InteractiveExpensesChart from './components/InteractiveExpensesChart';
import { ArrowRight, Star, ChartBar, Target, Person, ShieldCheck, Envelope, Smartphone, Check, ShoppingBag, MapPin, LayoutList, Diamond, Display, Rocket, Flame, ShieldExclamation } from '@gravity-ui/icons';
import bgImage from './assets/bg.png';

// Button that uses the context to navigate
const StartButton = () => {
  const { nextSlide } = useSlideshow();
  return (
    <Button
      className="px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl"
      style={{ backgroundColor: 'var(--color-accent-main)', color: 'white' }}
      onClick={nextSlide}
    >
      Начать просмотр
    </Button>
  );
};

export default function App() {
  return (
    <div className="app">
      <Slideshow>
        {/* SLIDE 1: HERO */}
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
                  <span className="font-poster text-6xl sm:text-7xl md:text-8xl">Вкусно</span> — <span className="text-[#059669]">Столовая</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-6 md:mb-10 leading-snug max-w-xl">
                  Открытие столовой русской кухни в Белграде. <br />
                  Понятный бизнес. Высокий спрос.
                </p>
                <div>
                  <StartButton />
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 2: IDEA & SCALE */}
        <Slide title="Концепция и Рынок" className="bg-[#059669] text-white">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-full">
            {/* Concept Card - Large */}
            <div className="col-span-1 md:col-span-8 p-8 rounded-3xl bg-white text-black flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-gray-100 rounded-full"><ShoppingBag style={{ width: 24, height: 24 }} /></div>
                  <h3 className="text-2xl font-bold">Фри-фло Столовая</h3>
                </div>
                <p className="text-xl leading-snug mb-6 text-gray-800">
                  Современный формат: вкусная домашняя еда, высокая скорость обслуживания и честные цены.
                  Никакого ожидания официантов.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="bg-gray-50 p-4 rounded-xl flex-1">
                  <div className="text-sm opacity-70 mb-1">Кухня</div>
                  <div className="font-bold text-lg">Русская / Домашняя</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex-1">
                  <div className="text-sm opacity-70 mb-1">Средний чек</div>
                  <div className="font-bold text-lg">7 - 9 €</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-xl flex-1">
                  <div className="text-sm opacity-70 mb-1">Время</div>
                  <div className="font-bold text-lg">3 мин</div>
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
              <InteractiveExpensesChart />
            </div>

            {/* Grid of Expenses */}
            <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
              {/* Header */}
              <div className="flex justify-between items-end border-b pb-4">
                <span className="text-gray-500 text-sm font-bold">Детализация запуска</span>
                <span className="text-4xl font-bold text-green-700">42,930 €</span>
              </div>

              {/* Items Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="text-gray-500 font-medium">Оборудование</div>
                  <div className="p-2 bg-gray-100 rounded-lg text-black font-bold">9,830 €</div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="text-gray-500 font-medium">Вентиляция и зал</div>
                  <div className="p-2 bg-gray-100 rounded-lg text-black font-bold">5,400 €</div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="text-gray-500 font-medium">Ремонт / Мебель</div>
                  <div className="p-2 bg-gray-100 rounded-lg text-black font-bold">3,500 €</div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="text-gray-500 font-medium">Машина / Авто</div>
                  <div className="p-2 bg-gray-100 rounded-lg text-black font-bold">4,000 €</div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="text-gray-500 font-medium">Маркетинг + Док.</div>
                  <div className="p-2 bg-gray-100 rounded-lg text-black font-bold">1,100 €</div>
                </div>

                <div className="p-5 bg-gray-50 rounded-2xl flex items-center justify-between shadow-sm">
                  <div className="text-gray-500 font-medium font-bold">Подушка (3 мес)</div>
                  <div className="p-2 bg-yellow-100 rounded-lg text-black font-bold">21,100 €</div>
                </div>
              </div>
            </div>
          </div>
        </Slide>

        {/* SLIDE 5: MONTHLY EXPENSES */}
        <Slide title="Операционные расходы" className="bg-[#059669] text-white">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">

            {/* Team Block */}
            <div className="bg-gray-50 text-black rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Person className="text-black" /> Команда
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">~5,500 € / мес</span>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black"><Star /></div>
                    <span className="font-bold text-gray-700">Повара (2 чел)</span>
                  </div>
                  <span className="font-bold">2000 €</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black"><ShieldCheck /></div>
                    <span className="font-bold text-gray-700">Управляющий</span>
                  </div>
                  <span className="font-bold">1500 €</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black"><ShoppingBag /></div>
                    <span className="font-bold text-gray-700">Кассир</span>
                  </div>
                  <span className="font-bold">800 €</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-black"><Flame /></div>
                    <span className="font-bold text-gray-700">Уборка / Водитель</span>
                  </div>
                  <span className="font-bold">1200 €</span>
                </div>
              </div>
            </div>

            {/* Fixed Costs Block */}
            <div className="bg-white text-black rounded-3xl p-8">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold flex items-center gap-3">
                  <Target className="text-black" /> Постоянные расходы
                </h3>
                <span className="px-3 py-1 bg-gray-100 text-black rounded-full text-sm font-bold">~4,000 € / мес</span>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="p-3 bg-gray-100 rounded-xl"><MapPin className="text-black" /></div>
                  <div>
                    <div className="text-2xl font-bold">1,200 €</div>
                    <div className="text-gray-500">Аренда помещения</div>
                  </div>
                </div>
                <div className="flex items-start gap-4 pb-4 border-b border-gray-100">
                  <div className="p-3 bg-gray-100 rounded-xl"><Diamond className="text-black" /></div>
                  <div>
                    <div className="text-2xl font-bold">2,400 €</div>
                    <div className="text-gray-500">Продукты + Коммуналка</div>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-xl"><Smartphone className="text-black" /></div>
                  <div>
                    <div className="text-2xl font-bold">400 €</div>
                    <div className="text-gray-500">Маркетинг + Бухгалтерия</div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </Slide>

        {/* SLIDE 6: FINANCIAL MODEL */}
        <Slide title="Финансовая модель">
          <div className="flex flex-col h-full gap-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4"><ShoppingBag /></div>
                <h4 className="text-xl font-bold mb-2">1. Зал (Оффлайн)</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">40 <span className="text-sm text-gray-400 font-normal">чел/день</span></div>
                <p className="text-gray-500 leading-snug">Стационарный трафик. Русская кухня.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4"><Smartphone /></div>
                <h4 className="text-xl font-bold mb-2">2. Доставка</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">20 <span className="text-sm text-gray-400 font-normal">зак/день</span></div>
                <p className="text-gray-500 leading-snug">Wolt / Glovo. Обед на дом.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-3xl">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-black mb-4"><LayoutList /></div>
                <h4 className="text-xl font-bold mb-2">3. Питание компаний</h4>
                <div className="text-3xl font-bold text-gray-800 mb-2">50 <span className="text-sm text-gray-400 font-normal">обедов</span></div>
                <p className="text-gray-500 leading-snug">Корпоративные контракты.</p>
              </div>
            </div>

            <div className="h-[300px] md:flex-1 bg-gray-50 rounded-3xl p-4 overflow-hidden">
              <InteractiveROIChart />
            </div>
          </div>
        </Slide>

        {/* SLIDE 7: INVESTMENT SUM */}
        <Slide title="Инвестиционное предложение">
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <div style={{ fontSize: '1.2rem', marginBottom: '1rem', color: '#666' }}>Необходимая сумма инвестиций</div>
            <div className="text-6xl md:text-8xl font-bold text-[#059669] mb-8 md:mb-12">
              42,930 €
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


