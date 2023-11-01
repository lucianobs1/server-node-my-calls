import { Months, MonthsNames } from '../enums/months';

interface DataProps {
  year: number;
  month: number;
  monthName: string;
  quantity: number;
}

type ListDataProps = DataProps[];

export async function countCallsByMonth(monthsData: ListDataProps) {
  monthsData.map((months: DataProps) => {
    if (months.month === Months.JANUARY) {
      months.monthName = 'Janeiro';
    }
    if (months.month === Months.FEBRUARY) {
      months.monthName = 'Fevereiro';
    }
    if (months.month === Months.MARCH) {
      months.monthName = 'Março';
    }
    if (months.month === Months.APRIL) {
      months.monthName = 'Abril';
    }
    if (months.month === Months.MAY) {
      months.monthName = 'Maio';
    }
    if (months.month === Months.JUNE) {
      months.monthName = 'Junho';
    }
    if (months.month === Months.JULY) {
      months.monthName = 'Julho';
    }
    if (months.month === Months.AUGUST) {
      months.monthName = 'Agosto';
    }
    if (months.month === Months.SEPTEMBER) {
      months.monthName = 'Setembro';
    }
    if (months.month === Months.OCTOBER) {
      months.monthName = 'Outubro';
    }
    if (months.month === Months.NOVEMBER) {
      months.monthName = 'Novembro';
    }
    if (months.month === Months.DECEMBER) {
      months.monthName = 'Dezembro';
    }
  });

  const eachMonthArray = Array.from<DataProps>({ length: 12 });

  eachMonthArray.map((month, month_index) => {
    if (month === undefined) {
      const monthData = {
        year: 2023,
        month: month_index + 1,
        quantity: 0,
        monthName: String(Object.values(MonthsNames)[month_index]),
      };
      eachMonthArray[month_index] = monthData;
    }
  });

  eachMonthArray.map((month, index) => {
    let monthTarget = '';
    if (monthsData[index]) {
      monthTarget = monthsData[index].monthName;
    }

    const monthIndex = eachMonthArray.findIndex(
      (monthRef) => monthRef.monthName === monthTarget
    );

    if (monthIndex >= 0) {
      eachMonthArray[monthIndex].quantity = monthsData[index].quantity;
    }
  });

  return eachMonthArray;
}
