import { getMergedData } from "./selector";

describe("Selector test", () => {
  describe("getMergedData : return empty array if", () => {
    it(":: population and GDP data are empty", () => {
      const fetchedData = {
        search: {
          populationData: [],
          gdpData: [],
        },
      };

      const expectedData = [];
      const mergedData = getMergedData(fetchedData);
      expect(mergedData).toEqual(expectedData);
    });
    it(":: population data or GDP data is empty", () => {
      const fetchedPopData = {
        search: {
          populationData: [],
        },
      };

      const fetchedGDPData = {
        search: {
          gdpData: [],
        },
      };
      const expectedData = [];
      let mergedData = getMergedData(fetchedPopData);
      expect(mergedData).toEqual(expectedData);
      mergedData = getMergedData(fetchedGDPData);
      expect(mergedData).toEqual(expectedData);
    });
  });

  describe("getMergedData : returns merged data", () => {
    it(":: once population and GDP data are fetched", () => {
      const fetchedData = {
        search: {
          populationData: [
            { page: 1 },
            [
              {
                indicator: {
                  id: "NY.GDP.MKTP.CD",
                  value: "GDP (current US$)",
                },
                country: {
                  id: "B8",
                  value: "Central Europe and the Baltics",
                },
                countryiso3code: "CEB",
                date: "1998",
                value: 448554364636.598,
                unit: "",
                obs_status: "",
                decimal: 0,
              },
            ],
          ],
          gdpData: [
            { page: 1 },
            [
              {
                indicator: {
                  id: "SP.POP.TOTL",
                  value: "Population, total",
                },
                country: {
                  id: "B8",
                  value: "Central Europe and the Baltics",
                },
                countryiso3code: "CEB",
                date: "1998",
                value: 270575803,
                unit: "",
                obs_status: "",
                decimal: 0,
              },
            ],
          ],
        },
      };

      const expectedData = [
        {
          countryCode: "CEB",
          population: 448554364636.598,
          countryName: "Central Europe and the Baltics",
          date: "1998",
          gdpValue: 270575803,
        },
      ];
      const mergedData = getMergedData(fetchedData);
      expect(mergedData).toEqual(expectedData);
    });
  });
});
