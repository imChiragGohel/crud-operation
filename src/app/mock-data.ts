import { Data } from './data';

export const Datas: Data[] = [
    {
        id: 1, name: 'Chirag', lname: 'Gohel', mo: '9924888158', age: 24,
        hobies: { chess: true, cricket: false, movies: true },
        gender: 'Male', email: 'chirag@gmail.com',
        // image:'/assets/img/chirag.jpg' 
    },
    {
        id: 2, name: 'Sita', lname: 'Ram', mo: '9824857163', age: 22,
        hobies: { chess: false, cricket: false, movies: true },
        gender: 'Female', email: 's@gmail.com',
        // image:'/assets/img/swaminarayan.jpg'
    },
    {
        id: 3, name: 'Sashi', lname: 'Bhai', mo: '2222222222', age: 25,
        hobies: { chess: false, cricket: true, movies: false },
        gender: 'Male', email: 'sashi@gmail.com',
        // image:'/assets/img/swaminarayan.jpg'
    },
    {
        id: 4, name: 'Nancy', lname: 'Gohel', mo: '2121212121', age: 23,
        hobies: { chess: true, cricket: true, movies: false },
        gender: 'Female', email: 'nancy@gmail.com',
        // image:'/assets/img/swaminarayan.jpg'
    },
];

