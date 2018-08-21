import * as React from 'react';
import { observer } from 'mobx-react';
import { start } from './config/firebaseConfig';
import { CreditStore } from './stores/CreditStore';

export interface IProps {
  name?: string;
}

@observer
class App extends React.Component<IProps, any> {


  private viewModel : CreditStore;

  constructor(props: IProps) {
    super(props);
    start();
    this.viewModel = new CreditStore();
  }

  public render() {
    return (
      <div className="App" >
        <h1> Hello : {this.viewModel.credit.first_name}</h1>
      </div>
    );
  }
}

export default App;
