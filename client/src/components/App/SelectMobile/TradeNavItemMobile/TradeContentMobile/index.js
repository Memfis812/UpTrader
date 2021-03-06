import React from 'react';
import './style.scss';

class TradeContentMobile extends React.Component {
  render() {
    return (
      <div className="trade-content-mobile">
        <p ref='title' className="trade-content-mobile__title">Если вы ищете пассивный доход и предпочитаете, чтобы деньги для вас зарабатывал тот, кто умеет это делать, тогда попробуйте ЛАММ. ЛАММ – это сервис копирования сделок успешных трейдеров. Доходность ни чем не ограничена!</p>
        <h2 className="trade-content__list-title">Как это работает</h2>
        <ul>
          <li className="trade-content-mobile__list-item"><span className="trade-content-mobile__list-counter">1</span>Вы выбираете управляющего из рейтинга по фильтру Options</li>
          <li className="trade-content-mobile__list-item"><span className="trade-content-mobile__list-counter">2</span>Подключаете свой счет к счету Управляющего</li>
          <li className="trade-content-mobile__list-item"><span className="trade-content-mobile__list-counter">3</span>На вашем счете начинается копирование сделок</li>
          <li className="trade-content-mobile__list-item"><span className="trade-content-mobile__list-counter trade-content-mobile__list-counter_center">4</span>Обратите внимание, что вы не перечисляете свои деньги Управляющему.Все ваши средства остаются на Вашем счете.</li>
          <li className="trade-content-mobile__list-item"><span className="trade-content-mobile__list-counter">5</span>Вы можете подключиться к нескольким Управляющим одновременно.</li>
          <li className="trade-content-mobile__list-item"><span className="trade-content-mobile__list-counter">6</span>Вы можете отключиться от Управляющих в любой момент</li>
        </ul>
        <button className="trade-content-mobile__next-btn">Продолжить</button>
      </div>
    );
  }
}

export default TradeContentMobile;