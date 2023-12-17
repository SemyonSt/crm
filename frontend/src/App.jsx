import './App.scss';

import Main from './pages/Main';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};

export default App;
