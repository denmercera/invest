import React from 'react';
import Card from './Card';
import { ShoppingBag, Globe } from '@gravity-ui/icons';

const BusinessModel = () => {
    return (
        <div className="grid grid-cols-2">
            <Card>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <Globe style={{ width: 32, height: 32, marginRight: '1rem', color: 'var(--color-accent-main)' }} />
                    <h3>Столовая (Офлайн)</h3>
                </div>
                <p>
                    Классическая линия раздачи для быстрого обслуживания.
                    Целевая аудитория: Русскоязычные эмигранты, местные жители, офисные сотрудники.
                    Средний чек: <strong>7-10 €</strong>.
                </p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                    <li>80–120 м² площадь</li>
                    <li>35–45 посадочных мест</li>
                    <li>Домашняя атмосфера</li>
                </ul>
            </Card>

            <Card>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                    <ShoppingBag style={{ width: 32, height: 32, marginRight: '1rem', color: 'var(--color-accent-main)' }} />
                    <h3>Доставка (Онлайн)</h3>
                </div>
                <p>
                    Отдельное направление бизнеса, работающее на базе кухни столовой.
                    Интеграция с Glovo / Wolt и собственная доставка.
                </p>
                <ul style={{ marginTop: '1rem', paddingLeft: '1.2rem', listStyleType: 'disc' }}>
                    <li>Упаковка в термобоксы</li>
                    <li>Меню бизнес-ланчей</li>
                    <li>Высокая оборачиваемость</li>
                </ul>
            </Card>
        </div>
    );
};

export default BusinessModel;
