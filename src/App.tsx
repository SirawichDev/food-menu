import * as React from 'react';
import { observer } from 'mobx-react';
import { start } from './config/firebaseConfig';
// import { CreditStore } from './stores/CreditStore';
import { HomePage } from './pressentations/pages/HomePage'

import 'bootstrap/dist/css/bootstrap.min.css';

export interface IProps {
  name?: string;
}

@observer
class App extends React.Component<IProps, any> {

  constructor(props: IProps) {
    super(props);
    start();
  }

  render() {
    return (
      <div className="App" >
        {/* <h1> Hello : {this.viewModel.credit.first_name}</h1>
        <h1> Hello : {this.viewModel.credit.last_name}</h1> */}
        <HomePage />
      </div>
    );
  }
}

export default App;
