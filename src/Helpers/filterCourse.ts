const filterCourse = (data: any) => {
  const cc = ["USD", "EUR", "GBP", "JPY", "CNY", "AUD"];
  const filteredCourse = cc.map((cc: string) => {
    return data.find((item: any) => {
      return item.cc === cc;
    });
  });
  return filteredCourse;
};
export { filterCourse };
