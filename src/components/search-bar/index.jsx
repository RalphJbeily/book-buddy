import React, { useEffect, useState } from 'react';
import { isEmpty } from 'lodash';

import { SEARCH_PLACEHOLDER } from '../../config/strings';
import { StyledSearchInput } from './styles';

const SearchBar = ({ fetchVolumes }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (isEmpty(searchValue)) fetchVolumes(searchValue);
    else {
      const delay = setTimeout(() => {
        fetchVolumes(searchValue);
      }, 3000);

      return () => clearTimeout(delay);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  const changeValue = (event) => {
    if (isEmpty(event.target.value)) setSearchValue([]);
    else setSearchValue(event.target.value);
  };

  const handleSearch = (event) => {
    if (!isEmpty(event.target.value) && event.key === 'Enter') {
      fetchVolumes(event.target.value);
    }
  };

  return (
    <StyledSearchInput
      type="search"
      name="search"
      placeholder={SEARCH_PLACEHOLDER}
      onChange={changeValue}
      onKeyPress={handleSearch}
    />
  );
};

export default SearchBar;
