import { Hero } from './hero';

let herStor = localStorage.getItem('herStor');
let hh;
if (herStor == null) {
  hh = [{
    id: 1,
    number: 123,
    fio: 'Иванов ',
    country: 'Уругвай',
    women: true,
    age: 32,
    region: 'Уругвай второй раз',
    FAI_NUM: 'ваыва-5645',
    payment: 'Да',
    rank: 'Высший взрослый',
    paraglider_model: 'Какая то модель',
    paraglider_year: 2015,
    class_paraglider: 'Лучшая'
  }, {
    id: 2,
    number: 321,
    fio: 'Петр Петрович',
    country: 'Гондурас',
    paraglider_model: 'Самая Лучшая',
    paraglider_year: 2015,
    women: false,
    age: 25,
    region: 'Гондурас второй раз',
    FAI_NUM: 'вавы-5645',
    payment: 'Нет',
    rank: 'Первый детский',
    class_paraglider: 'Так себе'
  }];
  localStorage.setItem('herStor', JSON.stringify(hh));

  // herStor = JSON.stringify(hh);
}

hh = JSON.parse(localStorage.getItem('herStor'));
// localStorage.setItem('herStor', herStor);
export let HEROES: Hero[] = hh;
