
import './App.css';
import Password from './components/Password/Password';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import PasswordList from './password-list';

const PSSWRD_STATE = "PASSWRD_STATE"

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(PSSWRD_STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch(err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(PSSWRD_STATE, serializedState)
  } catch(err) {
    console.log("Error saving data:"+err)
  }
}

// const store = createStore(reducers)

const persistedState = loadState();
const store = createStore(reducers, persistedState);
store.subscribe(() => {
  saveState(store.getState());
})



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
