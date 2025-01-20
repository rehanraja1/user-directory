import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOrder, setSortOrder] = useState('A-Z');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data = await response.json();
        setUsers(data);
        setFilteredUsers(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const handleSearch = (event) => {
    const searchValue = event.target.value.toLowerCase();
    setSearchTerm(searchValue);
    const filtered = users.filter((user) =>
      user.name.toLowerCase().includes(searchValue)
    );
    setFilteredUsers(filtered);
  };

  const handleSort = () => {
    const sortedUsers = [...filteredUsers].sort((a, b) =>
      sortOrder === 'A-Z'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    setFilteredUsers(sortedUsers);
    setSortOrder(sortOrder === 'A-Z' ? 'Z-A' : 'A-Z');
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl text-center font-bold mb-6">User Directory</h1>
      <div className="flex justify-center items-center mb-6">
        <input
          type="text"
          placeholder="Search users by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="p-3 border rounded-md w-1/3 mr-4"
        />
        <button
          onClick={handleSort}
          className="p-3 bg-blue-500 text-white rounded-md"
        >
          Sort {sortOrder}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div
              key={user.id}
              onClick={() => navigate(`/user/${user.id}`)}
              className="p-5 border rounded-md cursor-pointer hover:bg-gray-100"
            >
              <h3 className="text-xl font-semibold">{user.name}</h3>
              <p>Email: {user.email}</p>
              <p>City: {user.address.city}</p>
            </div>
          ))
        ) : (
          <p>No users found</p>
        )}
      </div>
    </div>
  );
};

export default Home;
