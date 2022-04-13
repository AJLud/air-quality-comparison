import axios from 'axios';
import React from 'react';

const getCities = async (
  setCities: React.Dispatch<React.SetStateAction<CityResponse[] | undefined>>,
) => {
  const response = await axios.get(
    'https://docs.openaq.org/v2/cities?limit=150&sort=asc&country_id=GB&order_by=city',
  );
  setCities(response.data.results);
};

export default getCities;
