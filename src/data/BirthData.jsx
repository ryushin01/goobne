export const getYears = (startYear, endYear) => {
  const years = [];
  for (let i = startYear; i >= endYear; i--) {
    years.push(i);
  }
  return years;
};

export const getMonths = () => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i < 10 ? '0' + i.toString() : i.toString());
  }
  return months;
};

export const getDays = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i < 10 ? '0' + i.toString() : i.toString());
  }
  return days;
};
