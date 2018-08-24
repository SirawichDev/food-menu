import * as React from 'react';
import { FoodNavbar } from '../components/Navbar';
import { observer } from 'mobx-react';

// import * as RStrap from 'reactstrap';

//css
import '../css/test.css';

const Color = {
   active: '#FF69B4',
   unactive: 'white'
}

@observer
export class HomePage extends React.Component<IProps, any> {

   constructor(props: IProps) {
      super(props);
      this.state= {
         paginate: 1
      }
   }

   render() {
      return (
         <div className='test-1'>
            <FoodNavbar />
            <div className="contrainer">
               <div className="slideContainer">
                  <div className="image">
                  </div>
               </div>
               <div className="paginate-image">
                  <div className="paginate-contrainer">
                     <div
                        onClick={ () => {this.onChange(1)}}
                        className="paginate-item"
                        style={{ backgroundColor: this.state.paginate === 1 ? Color.active: Color.unactive}}
                     >
                     </div>
                     <div
                        onClick={ () => {this.onChange(2)}}
                        className="paginate-item"
                        style={{ backgroundColor: this.state.paginate === 2 ? Color.active: Color.unactive}}
                     >
                     </div>
                     <div
                        onClick={ () => {this.onChange(3)}}
                        className="paginate-item"
                        style={{ backgroundColor: this.state.paginate === 3 ? Color.active: Color.unactive}}
                     >
                     </div>
                  </div>
               </div>
            </div>
         </div>
      )
   }

   onChange(number: number): void {
      this.setState({
         paginate: number
      })
   }
}

interface IProps {
   //
}