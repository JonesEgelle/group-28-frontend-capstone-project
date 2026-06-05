import { useEffect, useState } from 'react';
import { getPlanets } from '../services/planetService';

const usePlanets = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPlanets = async () => {
      try {
        const data = await getPlanets();
        setPlanets(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPlanets();
  }, []);

  return {
    planets,
    loading,
    error,
  };
};

export default usePlanets;
