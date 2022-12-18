import axios from 'axios';
import URLs from '../../config/api-endpoints';

const getVolumeDetails = (volumeId) => {
  return axios.get(URLs.VOLUME_DETAILS(volumeId));
};

export default getVolumeDetails;
