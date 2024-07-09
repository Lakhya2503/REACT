import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";


function Github() {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://api.github.com/users/Lakhya2503')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="text-center bg-cyan-700 text-white text-2xl p-2">
      Github followers: {data.followers}
      <div className='flex flex-initial gap-7'>
        <img src={data.avatar_url} className='h-36 rounded-lg' alt="Git pic" />
        <p className='inline justify-center mt-10 ml-9'>
          <a href={`https://github.com/${data.login}`} target="_blank" rel="noopener noreferrer" className='py-1 px-4  bg-red-400 rounded-xl'>Github Repo </a>
        </p>
      </div>
    </div>
  );
}

export default Github;