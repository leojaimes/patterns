import { AppRouter } from './components/app-router';
import { AuthProvider } from './context/AuthContex';

function App() {
  return (
    <AuthProvider>
      <AppRouter />;
    </AuthProvider>
  );
}

export default App;
