function gregorianToEthiopian(gregorianDate) {
   const ethiopianEpoch = 1723856; // Julian day of Ethiopian calendar epoch
   const gregorianEpoch = 1721425.5; // Julian day of Gregorian calendar epoch

   // Convert Gregorian date to Julian day
   const year = gregorianDate.getFullYear();
   const month = gregorianDate.getMonth() + 1; // JavaScript months are 0-based
   const day = gregorianDate.getDate();

   const a = Math.floor((14 - month) / 12);
   const y = year + 4800 - a;
   const m = month + 12 * a - 3;

   const julianDay = day + Math.floor((153 * m + 2) / 5) + 365 * y + Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400) - 32045;

   // Convert Julian day to Ethiopian date
   const ethiopianJulianDay = julianDay - gregorianEpoch + ethiopianEpoch;
   const ethiopianYear = Math.floor((ethiopianJulianDay - 1) / 365) - 1;
   const ethiopianDayOfYear = (ethiopianJulianDay - 1) % 365 + 1;

   const ethiopianMonth = Math.floor((ethiopianDayOfYear - 1) / 30) + 1;
   const ethiopianDay = (ethiopianDayOfYear - 1) % 30 + 1;

   return {
      year: ethiopianYear,
      month: ethiopianMonth,
      day: ethiopianDay
   };
}

// Example usage:
const gregorianDate = new Date(2023, 9, 5); // October 5, 2023
const ethiopianDate = gregorianToEthiopian(gregorianDate);
console.log(`Ethiopian Date: ${ethiopianDate.year}-${ethiopianDate.month}-${ethiopianDate.day}`);