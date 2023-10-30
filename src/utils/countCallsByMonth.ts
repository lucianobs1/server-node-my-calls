import { Months } from '../enums/months';

interface DataProps {
  year: number;
  month: number;
  monthName: string;
  quantity: number;
}

type ListDataProps = DataProps[];

export function countCallsByMonth(monthsData: ListDataProps) {
  const data = monthsData.map((months: DataProps) => {
    switch (months.month as Months) {
      case Months.JANUARY:
        months.monthName = 'Janeiro';
        break;
      case Months.FEBRUARY:
        months.monthName = 'Fevereiro';
        break;
      case Months.MARCH:
        months.monthName = 'Março';
        break;
      case Months.APRIL:
        months.monthName = 'Abril';
        break;
      case Months.MAY:
        months.monthName = 'Maio';
        break;
      case Months.JUNE:
        months.monthName = 'Junho';
        break;
      case Months.JULY:
        months.monthName = 'Julho';
        break;
      case Months.AUGUST:
        months.monthName = 'Agosto';
        break;
      case Months.SEPTEMBER:
        months.monthName = 'Setembro';
        break;
      case Months.OCTOBER:
        months.monthName = 'Outubro';
        break;
      case Months.NOVEMBER:
        months.monthName = 'Novembro';
        break;
      case Months.DECEMBER:
        months.monthName = 'Dezembro';
        break;
    }
  });

  return data;
}
