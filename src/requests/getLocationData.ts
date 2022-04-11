import axios from 'axios';

const getLocationData = (selectedCity: any, citySelection: any, setCitySelection: any) => {
  const endpoint = `https://docs.openaq.org/v2/latest?sort=desc&city=${selectedCity}&order_by=lastUpdated&dumpRaw=false`;

  axios
    .get(endpoint)
    .then((response) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore:next-line
      // eslint-disable-next-line no-shadow
      setCitySelection((citySelection) => [...citySelection, response.data.results]);
    })
    .catch((err) => {
      console.log(err);
    });
};

export default getLocationData;
