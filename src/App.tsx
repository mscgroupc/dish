import { StrictMode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Routers } from './Routes';

function App() {
  const queryClient = new QueryClient();
  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <Routers />
      </QueryClientProvider>
    </StrictMode>
  );
}

export default App;
