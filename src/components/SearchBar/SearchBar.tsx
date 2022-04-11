import React, { useEffect, useState } from 'react';
import { IoClose, IoSearch } from 'react-icons/io5';
import { AnimatePresence } from 'framer-motion';
import { useClickOutside } from 'react-click-outside-hook';
// import getLocations from '../../requests/getLocations';
import axios from 'axios';
import {
  SearchBarContainer,
  SearchContent,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
  Seperator,
  CloseIcon,
  CityList,
  Name,
  CityContainer,
} from './SearchBarStyles';

const containerVariants = {
  expanded: {
    height: '20em',
    padding: '0px',
  },
  collapsed: {
    height: '3.8em',
  },
};

const containerTransition = { type: 'string', damping: 22, stiffness: 150 };

interface Props {
  setSelectedCity: React.Dispatch<React.SetStateAction<Record<string, unknown>>>;
}

const SearchBar: React.FunctionComponent<Props> = ({ setSelectedCity }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [cities, setCities] = useState<any[]>();
  const [parentRef, isClickedOutside] = useClickOutside();

  const expandContainer = (): void => {
    setIsExpanded(true);
  };

  const collapseContainer = (): void => {
    setIsExpanded(false);
    setSearchQuery('');
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSearchQuery(e.target.value);
  };

  const handleCitySelection = (e: React.MouseEvent<HTMLLIElement>): void => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore:next-line
    setSelectedCity(e.target.innerText);
    collapseContainer();
  };

  useEffect(() => {
    collapseContainer();
  }, [isClickedOutside]);

  useEffect(() => {
    const loadCities = async () => {
      const response = await axios.get(
        'https://docs.openaq.org/v2/cities?limit=150&sort=asc&country_id=GB&order_by=city',
      );
      setCities(response.data.results);
    };
    loadCities();
  }, []);

  return (
    <SearchBarContainer
      animate={isExpanded ? 'expanded' : 'collapsed'}
      variants={containerVariants}
      transition={containerTransition}
      ref={parentRef}
    >
      <SearchInputContainer>
        <SearchIcon>
          <IoSearch />
        </SearchIcon>
        <SearchInput
          placeholder="Enter city name..."
          onFocus={expandContainer}
          value={searchQuery}
          onChange={handleSearch}
        />
        <AnimatePresence>
          {isExpanded && (
            <CloseIcon
              key="close-icon"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={collapseContainer}
              transition={{ duration: 0.2 }}
            >
              <IoClose />
            </CloseIcon>
          )}
        </AnimatePresence>
      </SearchInputContainer>
      {isExpanded && <Seperator />}
      {isExpanded && (
        <SearchContent>
          <CityList>
            {cities
              ?.filter((city) => city.city.toLowerCase().startsWith(searchQuery.toLowerCase()))
              .map((city) => (
                <CityContainer key={city.city} value={city.city} onClick={handleCitySelection}>
                  <Name>{city.city}</Name>
                </CityContainer>
              ))}
          </CityList>
        </SearchContent>
      )}
    </SearchBarContainer>
  );
};

export default SearchBar;
