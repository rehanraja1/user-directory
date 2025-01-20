import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user details');
        }
        const data = await response.json();
        setUser(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserDetails();
  }, [id]);

  if (loading) {
    return <p className="text-center text-xl">Loading user details...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500">Error: {error}</p>;
  }

  return (
    <div className="container mx-auto p-6">
      <button
        onClick={() => navigate('/')}
        className="mb-6 p-3 bg-blue-500 text-white rounded-md"
      >
        Go Back
      </button>
      <h1 className="text-3xl font-bold mb-4">{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Company: {user.company.name}</p>
      <p>Website: {user.website}</p>
    </div>
  );
};

export default UserDetail;
