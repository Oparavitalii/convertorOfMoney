const findCurrencyRate = (arr:any,currency:any) => {
    if (currency === "UAH") {
        return 1;
    }
   const item =  arr.filter((item:any) => item.cc === currency);
   return item[0].rate;
}

export {findCurrencyRate};