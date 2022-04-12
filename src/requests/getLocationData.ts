import axios from 'axios';

const getLocationData = async (selectedCity: any, setCitySelection: any) => {
  const endpoint = `https://docs.openaq.org/v2/latest?sort=desc&city=${selectedCity}&order_by=lastUpdated&dumpRaw=false`;
  const response = await axios.get(endpoint);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore:next-line
  setCitySelection((citySelection) => [...citySelection, response.data.results[0]]);
};

export default getLocationData;
