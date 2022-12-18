import axios from 'axios';
import URLs from '../../config/api-endpoints';

const listVolumes = (searchValue, orderBy: '', filter: '') => {
  return axios.get(URLs.VOLUMES_LIST, {
    params: { q: searchValue, orderBy, filter },
  });
};

export default listVolumes;
