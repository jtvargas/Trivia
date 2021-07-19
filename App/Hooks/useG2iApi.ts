import { useState, useEffect } from 'react';
import axios from 'axios';

const useG2iApi = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(
    'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean',
  );
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setHasError(false);
      setIsLoading(true);

      try {
        const result = await axios(url);

        setData(result.data.results);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  const refetchData = async () => {
    setHasError(false);
    setIsLoading(true);

    try {
      const result = await axios(url);

      setData(result.data.results);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, hasError, refetchData };
};

export { useG2iApi };
