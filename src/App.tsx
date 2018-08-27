import * as React from 'react';
import { observer } from 'mobx-react';
import { start } from './config/firebaseConfig';
import  * as RXRouter from 'react-router-dom';
import { HomePage } from './pressentations/pages/HomePage'
import { MenuFoodsPage } from './pressentations/pages/MenuFoodsPage'

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
      <RXRouter.BrowserRouter>
        <RXRouter.Switch>
          <RXRouter.Route exact path="/" component={HomePage}/>
          <RXRouter.Route exact path="/menu-foods" component={MenuFoodsPage}/>
        </RXRouter.Switch>
      </RXRouter.BrowserRouter>
    );
  }
}

export default App;
