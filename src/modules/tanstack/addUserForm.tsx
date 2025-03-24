import React from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { Button } from '@/components/ui/button';

interface User {
  id: number;
  name: string;
}

const addUser = async (newUser: User) => {
  return axios.post('https://jsonplaceholder.typicode.com/users', newUser);
};

function AddUserForm() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  return (
    <Button
      onClick={() => mutation.mutate({ id: 11, name: 'New User' })}
      disabled={mutation.status === 'pending'}
    >
      {mutation.status === 'pending' ? 'Adding...' : 'Add User'}
    </Button>
  );
}

export default AddUserForm;
