const gDate = new Date();
let { getMonth } = gDate;
const { getDate } = gDate;

/*gregorian days of months (starting from january)*/

var gDM = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

/*ethiopian days of months (starting from january)*/

var eDM = [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 5 ];
class eDate {
   constructor(yy, mm, dd, h, m, s, ms) {
      this.getFullYear = (yy)?yy: eFullYear();
      this.getMonth = (mm)?mm: eMonth();
      this.getDate = (dd)?dd: date();
      this.getHours = (h)?h: eHours();
      this.getMinutes = (m)?m: gDate.getMinutes();
      this.getSeconds = (s)?s: gDate.getSeconds();
      this.getMiliSeconds = (ms)?ms: gDate.getMilliseconds();
   }
   setFullYear(yy) { this.getFullYear = yy }
   setMonth(mm) { this.getMonth = mm }
   setDate(dd) { this.getDate = dd }
   setHours(h) { this.getHours = h }
   setMinutes(m) { this.getMinutes = m }
   setSeconds(s) { this.getSeconds = s }
   setMiliSeconds(ms) { this.getMiliSeconds = ms }
}
function date(d) {
   var x = getDate();
   for (let mon = 0; mon < thisMon; mon++) {
      x += gDM[mon];
      console.log(x, mon);
   }
   return (x + 30 - 8) % 30;
}