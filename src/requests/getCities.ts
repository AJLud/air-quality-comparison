import axios from 'axios';

const getCities = async (setCities: any) => {
  const response = await axios.get(
    'https://docs.openaq.org/v2/cities?limit=150&sort=asc&country_id=GB&order_by=city',
  );
  setCities(response.data.results);
};

export default getCities;
