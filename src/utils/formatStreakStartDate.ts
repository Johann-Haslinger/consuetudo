export const formatStreakStartDate = (date: string) => {
  const addedDate = new Date(date);
  const now = new Date();

  const addedYear = addedDate.getFullYear();
  const addedMonth = addedDate.getMonth();
  const addedDay = addedDate.getDate();

  const nowYear = now.getFullYear();
  const nowMonth = now.getMonth();
  const nowDay = now.getDate();

  const differenceInDates = (nowYear - addedYear) * 365 + (nowMonth - addedMonth) * 30 + (nowDay - addedDay);

  let formattedDateAdded;

  if (differenceInDates === 0) {
    formattedDateAdded = "Started today";
  } else if (differenceInDates === 1) {
    formattedDateAdded = "Started yesterday";
  } else if (differenceInDates === 2) {
    formattedDateAdded = "Started the day before yesterday";
  } else {
    const formattedDayAdded = addedDate.toLocaleDateString("en-US", {
      weekday: "long",
    });

    const formattedDate = addedDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    formattedDateAdded = "Started on " + formattedDate;

    formattedDateAdded = "Started on " + formattedDayAdded + ", " + formattedDate;
  }

  return formattedDateAdded;
};
