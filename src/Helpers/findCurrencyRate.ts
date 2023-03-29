const findCurrencyRate = (arr:any,currency:any) => {
    console.log(currency);
    if (currency === "UAH") {
        return 1;
    }
   const item =  arr.filter((item:any) => item.cc === currency);
   console.log(item);
   return item[0].rate;
}

export {findCurrencyRate};