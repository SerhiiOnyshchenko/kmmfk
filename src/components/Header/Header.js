import React from 'react';
import s from './Header.module.css';
import Container from './../Container/Container';

export default function Header() {
   return (
      <header>
         <Container>
            <div className={s.header}>
               <a href="/">
                  <div className={s.logo}></div>
               </a>
               <nav>
                  <ul className={s.list}>
                     <li className={s.item}>
                        <a href="/">Головна</a>
                     </li>
                     <li className={s.item + ' ' + s.coledge}>
                        Коледж
                        <ul className={s.coledgeList}>
                           <li className={s.coledgeItem}>МН</li>
                           <li className={s.coledgeItem}>МС</li>
                           <li className={s.coledgeItem}>ЗС</li>
                           <li className={s.coledgeItem}>ЗН</li>
                        </ul>
                     </li>
                     <li className={s.item + ' ' + s.students}>
                        Встуникам та студентам
                        <ul className={s.studentsList}>
                           <li className={s.studentsItem}>Розклад занять</li>
                        </ul>
                     </li>
                     <li className={s.item + ' ' + s.cycle}>
                        Цикл фіз. вих.
                        <ul className={s.cycleList}>
                           <li className={s.cycleItem}>Колектив ф.в.</li>
                           <li className={s.cycleItem}>Новини</li>
                           <li className={s.cycleItem}>Спартакіада</li>
                           <li className={s.cycleItem}>
                              Приміщення спорт. кол.
                           </li>
                        </ul>
                     </li>
                     <li className={s.item + ' ' + s.section}>
                        Секції
                        <ul className={s.sectionList}>
                           <li>Бадмінтон</li>
                           <li>Баскетбол</li>
                           <li>Волейбол</li>
                           <li>Настільний теніс</li>
                           <li>Шахи, шашки</li>
                           <li>Тренажерний зал</li>
                        </ul>
                     </li>
                  </ul>
               </nav>
            </div>
         </Container>
      </header>
   );
}
