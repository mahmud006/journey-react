import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const fetchUsers = async (): Promise<{ id: number; name: string }[]> => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data as { id: number; name: string }[];
};

function UsersList() {
  const { data, isLoading, error } = useQuery<{ id: number; name: string }[]>({
    queryKey: ['users'],
    queryFn: fetchUsers,
  });

  if (isLoading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return <ul>{data && data.map((user) => <li key={user.id}>{user.name}</li>)}</ul>;
}

export default UsersList;
