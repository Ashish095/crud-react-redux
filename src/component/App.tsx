import * as React from 'react';
import Header from '../common/Header';
import MainPage from './MainPage';

interface Props { }

interface State { }

class App extends React.Component<Props, State> {

  render() {
    return (
      <>
        <Header />
        <MainPage />
      </>
    );
  }
}

export default App;
