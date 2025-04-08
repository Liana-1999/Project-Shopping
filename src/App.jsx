import { Provider } from 'react-redux';
import { Routing } from './routing/Routing';
import { store } from './store/slice';
import './App.css'
import { AuthContextProvider } from './context/auth/AuthContextProvider';

function App() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <Routing />
      </AuthContextProvider>
    </Provider>
  )
}

export default App;
