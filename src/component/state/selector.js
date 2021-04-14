import { get, isEmpty } from "lodash";
export const getMergedData = ({ search }) => {
  const gdpData = get(search, "gdpData[1]", []);
  const popData = get(search, "populationData[1]", []);

  if (isEmpty(gdpData) || isEmpty(popData)) return [];

  return popData.map(({ countryiso3code, value, country, date }) => ({
    countryCode: countryiso3code,
    population: value,
    countryName: country.value,
    date: date,
    gdpValue: gdpData.find(({ countryiso3code: countryCode }) => countryiso3code === countryCode).value,
  }));
};
