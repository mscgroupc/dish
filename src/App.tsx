import { QueryClient, QueryClientProvider } from 'react-query';
import './App.css';
import { Routers } from './Routes';

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Routers />
    </QueryClientProvider>
  );
}

export default App;
