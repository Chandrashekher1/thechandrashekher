import { useEffect, useState } from "react";
import { portfolio_URL } from "../utils/constant";

const useAbout = (param) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${portfolio_URL}/${param}`);
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
      }
    };

    fetchData();
  }, [param]);

  if (error) {
    return { data: null, loading: false, error: error.message };
  }

  return {
    data: data,
    loading: !data,
    error: null
  };
};

export default useAbout;
