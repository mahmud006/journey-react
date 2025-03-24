import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Forms from './modules/hook-forms/forms';
import Counter from './modules/hooks/dummy';
import SliderComp from './modules/slider/slider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AddUserForm from './modules/tanstack/addUserForm';
import UsersList from './modules/tanstack/usersList';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AddUserForm />
        <UsersList />
      </QueryClientProvider>
    </>
  );
}

export default App;
