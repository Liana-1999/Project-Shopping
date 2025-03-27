import { Routing } from './routing/Routing';
import './App.css'
import { AuthContextProvider } from './context/auth/AuthContextProvider';

function App() {
  return (
    <AuthContextProvider>
      <Routing />
    </AuthContextProvider>
  )
}

export default App;
