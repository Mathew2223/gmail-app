export const days: string[] = Array.from({ length: 31 }, (_, i) => String(i + 1));

export const months: string[] = [
  'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
];

export const years: string[] = Array.from(
  { length: 100 }, 
  (_, i) => String(new Date().getFullYear() - i)
);

export const genders: { value: string }[] = [
  { value: 'male' },
  { value: 'female' },
  { value: 'other' }
];