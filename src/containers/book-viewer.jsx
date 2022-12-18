import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getVolumeDetails from '../api/volume/get';
import codes from '../config/server-codes';

import { BookViewer as BookViewerScreen } from '../pages';

const BookViewer = () => {
  const { id } = useParams();

  const [volumeDetails, setVolumeDetails] = useState({});

  const fetchVolumeDetails = async () => {
    try {
      const result = await getVolumeDetails(id);
      if (result.status === codes.SUCCESS) setVolumeDetails(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVolumeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <BookViewerScreen volumeDetails={volumeDetails}></BookViewerScreen>;
};

export default BookViewer;
