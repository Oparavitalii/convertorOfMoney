import { findCurrencyRate } from "./findCurrencyRate"
const calculateSum = ({focus,amount,courseData,currencyFromRate,currencyToRate}:any) => {
    let res;
    if (focus) {
       res = (
        (amount * findCurrencyRate(courseData, currencyFromRate)) /
        findCurrencyRate(courseData, currencyToRate)
      ).toFixed(1);
    } else {
      res = (
        (amount * findCurrencyRate(courseData, currencyToRate)) /
        findCurrencyRate(courseData, currencyFromRate)
      ).toFixed(1);
    }
    return res;
}
export {calculateSum}