import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
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
      }, {
        id: 3,
        number: 321,
        fio: 'Петр Петрович',
        country: 'Гондурас',
        paraglider_model: 'Самая Лучшая',
        paraglider_year: 2015,
        women: true,
        age: 25,
        region: 'Гондурас второй раз',
        FAI_NUM: 'вавы-5645',
        payment: 'Нет',
        rank: 'Первый детский',
        class_paraglider: 'Так себе'
      }];
      localStorage.setItem('herStor', JSON.stringify(hh));
    }
    let heroes = JSON.parse(localStorage.getItem('herStor'));

    let setStor = localStorage.getItem('setStor');
    let ss;
    if (setStor == null) {
      ss = [{
        id: 1,
        title: 'И.Ю. Казаков',
        name: 'Ленинградская область, посёлок Сумино',
        date: '27.04.2018 – 29.04.2018',
        flyName: '29 апреля 2018 года ',
        year: '2018',
        titlelist: 'ЛИЧНЫЙ ЗАЧЁТ'
      },
      {
        id: 2,
        title: 'И.Ю. Казаков',
        name: 'Ленинградская область, посёлок Сумино',
        date: '27.04.2018 – 29.04.2018',
        flyName: '29 апреля 2018 года ',
        year: '2018',
        titlelist: 'КОМАНДНЫЙ ЗАЧЁТ'
      }];
      localStorage.setItem('setStor', JSON.stringify(ss));
    }
    let options = JSON.parse(localStorage.getItem('setStor'));

    return { heroes, options };
  }
}
