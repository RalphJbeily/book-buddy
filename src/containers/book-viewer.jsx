import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import getVolumeDetails from '../api/volume/get';
import codes from '../config/server-codes';
import { SCRIPT_NOT_LOADED } from '../config/strings';

import { BookViewer as BookViewerScreen } from '../pages';
import { ScriptNotLoaded } from '../pages/book-viewer/styles';

const BookViewer = () => {
  const { id } = useParams();

  const [volumeDetails, setVolumeDetails] = useState({});
  const [error, setError] = useState(false);

  const fetchVolumeDetails = async () => {
    try {
      const result = await getVolumeDetails(id);
      if (result.status === codes.SUCCESS) setVolumeDetails(result.data);
    } catch (error) {
      setError(true);
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVolumeDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return error ? (
    <ScriptNotLoaded>{SCRIPT_NOT_LOADED}</ScriptNotLoaded>
  ) : (
    <BookViewerScreen volumeDetails={volumeDetails}></BookViewerScreen>
  );
};

export default BookViewer;
