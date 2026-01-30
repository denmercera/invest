import React from 'react';
import Card from './Card';

const equipmentData = {
    cooking: [
        { name: 'Конвектомат (или духовой шкаф)', price: 1000 },
        { name: 'Плита (газовая или индукционная)', price: 100 },
        { name: 'Фритюрница', price: 250 },
        { name: 'Миксер, кухонный комбайн', price: 300 },
        { name: 'Чайник', price: 30 },
        { name: 'Микроволновка', price: 100 },
        { name: 'Блинница', price: 50 },
        { name: 'Мясорубка', price: 100 },
        { name: 'Посуда (кастрюли, тарелки, приборы)', price: 100 },
    ],
    storage: [
        { name: 'Холодильник', price: 500 },
        { name: 'Морозильная камера', price: 300 },
    ],
    workingZone: [
        { name: 'Вытяжка', price: 2500 },
        { name: 'Столы (железные) и стулья', price: 1500 },
        { name: 'Мойка', price: 400 },
    ],
    packaging: [
        { name: 'Термосумки или термобоксы', price: 100 },
        { name: 'Автомобиль (б/у)', price: 2000 },
    ],
    other: [
        { name: 'Ремонт интерьера (косметический)', price: 3500 },
        { name: 'Касса + POS', price: 300 },
        { name: 'Разрешения, юрист, бухгалтер', price: 500 },
        { name: 'Маркетинг на старт', price: 300 },
        { name: 'Запас продуктов (оборотка)', price: 800 },
    ]
};

const EquipmentList = () => {
    const calculateTotal = (items) => items.reduce((acc, item) => acc + item.price, 0);

    return (
        <div className="grid grid-cols-2">
            <Card>
                <h3>🍳 Приготовление</h3>
                <ul style={{ marginTop: '1rem' }}>
                    {equipmentData.cooking.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>{item.name}</span>
                            <strong>{item.price} €</strong>
                        </li>
                    ))}
                    <div style={{ borderTop: '1px solid #ccc', margin: '1rem 0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                        Итого: {calculateTotal(equipmentData.cooking)} €
                    </div>
                </ul>
            </Card>

            <div className="grid">
                <Card>
                    <h3>❄️ Хранение</h3>
                    <ul style={{ marginTop: '1rem' }}>
                        {equipmentData.storage.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>{item.name}</span>
                                <strong>{item.price} €</strong>
                            </li>
                        ))}
                        <div style={{ borderTop: '1px solid #ccc', margin: '1rem 0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                            Итого: {calculateTotal(equipmentData.storage)} €
                        </div>
                    </ul>
                </Card>
                <Card>
                    <h3>🏗️ Вентиляция и зал</h3>
                    <ul style={{ marginTop: '1rem' }}>
                        {equipmentData.workingZone.map((item, idx) => (
                            <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                <span>{item.name}</span>
                                <strong>{item.price} €</strong>
                            </li>
                        ))}
                        <div style={{ borderTop: '1px solid #ccc', margin: '1rem 0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                            Итого: {calculateTotal(equipmentData.workingZone)} €
                        </div>
                    </ul>
                </Card>
            </div>

            <Card>
                <h3>🚚 Упаковка и доставка</h3>
                <ul style={{ marginTop: '1rem' }}>
                    {equipmentData.packaging.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>{item.name}</span>
                            <strong>{item.price} €</strong>
                        </li>
                    ))}
                    <div style={{ borderTop: '1px solid #ccc', margin: '1rem 0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                        Итого: {calculateTotal(equipmentData.packaging)} €
                    </div>
                </ul>
            </Card>

            <Card>
                <h3>📑 Прочее</h3>
                <ul style={{ marginTop: '1rem' }}>
                    {equipmentData.other.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>{item.name}</span>
                            <strong>{item.price} €</strong>
                        </li>
                    ))}
                    <div style={{ borderTop: '1px solid #ccc', margin: '1rem 0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                        Итого: {calculateTotal(equipmentData.other)} €
                    </div>
                </ul>
            </Card>
        </div>
    );
};

export default EquipmentList;
