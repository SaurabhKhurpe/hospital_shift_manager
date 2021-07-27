export const shiftStatus = {
  APPLIED: 'Applied',
  OPEN: 'Open',
  ACCEPTED: 'Accepted',
};

export const SHIFTS = [
  {
    id: 1,
    hospital: 'Rising Hospital',
    time: '7am to 1pm',
    date: '07/26/2021(Monday)',
    location: 'Pune, MH 411014',
    department: 'Medicine Department',
    status: shiftStatus.OPEN,
  },
  {
    id: 2,
    hospital: 'Kalyani Hospital',
    time: '8am to 2pm',
    date: '07/29/2021(Thursday)',
    location: 'Pune, MH 411014',
    department: 'Surgery Department',
    status: shiftStatus.OPEN,
  },
  {
    id: 3,
    hospital: 'Medipoint Hospital',
    time: '2am to 8pm',
    date: '07/30/2021(Monday)',
    location: 'Pune, MH 411014',
    department: 'Medicine Department',
    status: shiftStatus.OPEN,
  },
];
