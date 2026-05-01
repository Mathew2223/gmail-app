export const days = Array.from({ length: 31 }, (_, i) => i + 1)

export const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
]

const currentYear = new Date().getFullYear();
export const years = Array.from({ length: 100 }, (_, i) => currentYear - 14 - i)

export const genders = [
    {value: 'Мужской', label: 'male'},
    {value: 'Женский', label: 'female'},
    {value: 'Не указан', label: 'cultum'},
]