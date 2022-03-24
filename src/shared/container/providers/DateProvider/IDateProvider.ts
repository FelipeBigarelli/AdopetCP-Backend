interface IDateProvider {
  dateNow(): Date;
  addDays(days: number): Date;
}

export { IDateProvider };
