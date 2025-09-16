import { useState, useEffect, useCallback } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);       
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);     

  const getData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Something went wrong! Status: " + response.status);
      }

      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    if (url) {
      getData();
    }
  }, [url, getData]);

  return { data, loading, error };
}

export default useFetch;