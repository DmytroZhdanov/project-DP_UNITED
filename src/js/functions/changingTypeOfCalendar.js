function changingTypeOfCalendar(data) {
  const parts = data.split('-');
  if (parts.length === 3) {
    const year = parts[0];
    const month = parts[1];
    const day = parts[2];

    const typicalCalendar = day + '.' + month + '.' + year;
    return typicalCalendar;
  }
}

export { changingTypeOfCalendar };
