import * as React  from 'react';
import { FoodNavbar } from '../components/Navbar';
import { observer } from 'mobx-react';

//css
import '../css/test.css';

@observer
export class HomePage extends React.Component<IProps, any> {

   constructor(props: IProps) {
      super(props)
   }

   render() {
      return (
         <div className='test-1'>
            <FoodNavbar />
         </div>
      )
   }
}

interface IProps {
   //
}