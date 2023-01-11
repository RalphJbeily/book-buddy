import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import listVolumes from '../../api/volume/list';
import codes from '../../config/server-codes';

import { AuthorSearch as AuthorSearchScreen } from '../../pages';
import { FILTERS, MAX_RESULTS, ORDER_BY } from './config';

const AuthorSearch = () => {
  const [volumes, setVolumes] = useState([]);

  const fetchVolumesList = async (searchValue) => {
    try {
      if (isEmpty(searchValue)) setVolumes([]);
      else {
        const result = await listVolumes(
          searchValue,
          ORDER_BY.NEWEST,
          FILTERS.FREE_EBOOKS,
          MAX_RESULTS,
        );

        if (result.status === codes.SUCCESS) setVolumes(result.data.items);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <AuthorSearchScreen
      volumes={volumes}
      fetchVolumesList={(searchValue) => fetchVolumesList(searchValue)}
    ></AuthorSearchScreen>
  );
};

export default AuthorSearch;
