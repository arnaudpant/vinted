const getTimeDifferenceString = (targetDateString: string): string => {
  const targetDate: Date = new Date(targetDateString);
  const currentDate: Date = new Date();

  const timeDifferenceInMinutes: number = Math.floor(
    (currentDate.getTime() - targetDate.getTime()) / (1000 * 60),
  );

  let timeDifferenceInHours: number = 0;
  let timeDifferenceInDays: number = 0;

  if (timeDifferenceInMinutes > 60) {
    timeDifferenceInHours = Math.floor(timeDifferenceInMinutes / 60);
    if (timeDifferenceInHours > 24) {
      timeDifferenceInDays = Math.floor(timeDifferenceInHours / 24);
      return `IL Y A ${timeDifferenceInDays} ${
        timeDifferenceInDays === 1 ? 'JOUR' : 'JOURS'
      }.`;
    } else {
      return `IL Y A ${timeDifferenceInHours} ${
        timeDifferenceInHours === 1 ? 'HEURE' : 'HEURES'
      }.`;
    }
  } else {
    return `IL Y A ${timeDifferenceInMinutes} ${
      timeDifferenceInMinutes === 1 ? 'MINUTE' : 'MINUTES'
    }.`;
  }
};

export default getTimeDifferenceString;
