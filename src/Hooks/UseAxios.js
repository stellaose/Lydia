import axios from "axios";
import { useEffect, useState } from "react";

const UseAxios = (url, params) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    return await axios
      .get(url, params)
      .then((res) => {
        setData(res.data.data);
        setIsPending(false);
      })
      .catch((err) => {
        setIsPending(false);
        setError(err.message);
      });
  };
  useEffect(() => {
    fetchData();
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);
  return { data, isPending, error };
};

export default UseAxios;
