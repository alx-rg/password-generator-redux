
import './App.css';
import Password from './components/Password/Password';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import PasswordList from './password-list';

const store = createStore(reducers)


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <Password />
          <PasswordList />
        </header>
      </div>
    </Provider>
  );
}

export default App;
