export const nodes = [
  {
    id: 3,
    title: 'Yang',
    size: 24,
    fonticon: 'fa fa-cloud',
    group: 50,
    status: 'valid',
  },
  {
    id: 4,
    title: 'Gray',
    size: 24,
    fonticon: 'fa fa-cloud',
    group: 3,
    status: 'valid',
  },
  {
    id: 5,
    title: 'Maddox',
    size: 24,
    fileicon: 'https://www.svgrepo.com/show/5386/speedometer.svg',
    group: 3,
    status: 'warning',
  },
  {
    id: 0,
    title: 'Levy',
    size: 24,
    fonticon: 'fa fa-cog',
    group: 1,
    status: 'valid',
  },
  {
    id: 1,
    title: 'Celina',
    size: 24,
    fonticon: 'fa fa-cloud',
    group: 2,
    status: 'warning',
  },
  {
    id: 2,
    title: 'Nancy',
    size: 24,
    fonticon: 'fa fa-cloud',
    group: 2,
    status: 'critical',
  },
];
export const edges = [
  {
    source: 1,
    target: 4,
    id: '1-4',
  },
  {
    source: 2,
    target: 5,
    id: '2-5',
  },
  {
    source: 0,
    target: 1,
    id: '0-1',
  },
  {
    source: 0,
    target: 2,
    id: '0-2',
  },
  {
    source: 1,
    target: 3,
    id: '1-3',
  },
];
