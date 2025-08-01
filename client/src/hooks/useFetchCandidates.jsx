import { useEffect, useState } from "react";
import axios from "axios";
import { useAuth } from '../hooks/useAuthContext'

const useFetchCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const {user} = useAuth();
  const token=user?.token;

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        
        const response = await axios.get("/api/candidate/candidate",{
            headers:{
                Authorization: `Bearer ${token}`
            }
        });

        if (response.status === 200) {
          setCandidates(response?.data?.candidates);
        } else {
          setError('Unexpected response format.')
        }
      } catch (err) {
        setError(err.message || "Failed to fetch candidates");
      } finally {
        setLoading(false);
      }
    };

    fetchCandidates();
  }, []);

  return { candidates, loading, error };
};

export default useFetchCandidates;
