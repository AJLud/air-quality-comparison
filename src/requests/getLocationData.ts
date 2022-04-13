import axios from 'axios';

const getLocationData = async (
  selectedCity: string,
  setLocationSelection: React.Dispatch<React.SetStateAction<LocationResponse[]>>,
) => {
  const endpoint = `https://docs.openaq.org/v2/latest?sort=desc&city=${selectedCity}&order_by=lastUpdated&dumpRaw=false`;
  const response = await axios.get(endpoint);
  setLocationSelection((locationSelection) => [...locationSelection, response.data.results[0]]);
};

export default getLocationData;
