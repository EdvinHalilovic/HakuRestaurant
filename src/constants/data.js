import images from './images';

const wines = [
  {
    title: 'Vukoje Zilavka',
    price: '$56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Crveno Vino',
    price: '$59',
    tags: 'AU | Bottle',
  },
  {
    title: 'Buntic Zilavka',
    price: '$44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Vilinka X-line Cuvee Red',
    price: '$31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Hercegovacko Vino',
    price: '$26',
    tags: 'IE | 750 ml',
  },
];

const cocktails = [
  {
    title: ' Mojito',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Cosmopolitan",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Pina Colada',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Martini',
    price: '$19',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
