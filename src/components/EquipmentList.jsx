import React from 'react';
import Card from './Card';

const equipmentData = {
    cooking: [
        { name: 'Конвектомат / духовка', price: 2000 },
        { name: 'Плита', price: 500 },
        { name: 'Фритюрница', price: 250 },
        { name: 'Миксер / комбайн', price: 300 },
        { name: 'Чайник', price: 30 },
        { name: 'Микроволновка', price: 100 },
        { name: 'Блинница', price: 50 },
        { name: 'Мясорубка', price: 100 },
        { name: 'Витрины', price: 2000 },
        { name: 'Гастроемкости', price: 500 },
        { name: 'Посуда', price: 300 },
    ],
    storage: [
        { name: 'Холодильник', price: 500 },
        { name: 'Морозильная камера', price: 300 },
    ],
    workingZone: [
        { name: 'Вытяжка', price: 2500 },
        { name: 'Рабочие столы', price: 1000 },
        { name: 'Столы и стулья (зал)', price: 1500 },
        { name: 'Мойка', price: 400 },
    ],
    delivery: [
        { name: 'Термосумки', price: 100 },
        { name: 'Автомобиль', price: 4000 },
    ],
    other: [
        { name: 'Ремонт интерьера', price: 3500 },
        { name: 'Касса + POS', price: 300 },
        { name: 'Юрист и бухгалтер', price: 500 },
        { name: 'Маркетинг старт', price: 300 },
        { name: 'Оборотные средства', price: 800 },
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
                    {equipmentData.delivery.map((item, idx) => (
                        <li key={idx} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                            <span>{item.name}</span>
                            <strong>{item.price} €</strong>
                        </li>
                    ))}
                    <div style={{ borderTop: '1px solid #ccc', margin: '1rem 0', paddingTop: '0.5rem', fontWeight: 'bold' }}>
                        Итого: {calculateTotal(equipmentData.delivery)} €
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
