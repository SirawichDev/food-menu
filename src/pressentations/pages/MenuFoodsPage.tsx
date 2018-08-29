import * as React from 'react';
import { FoodNavbar } from '../components/Navbar';
import { observer } from 'mobx-react';
// import { ImageSlideShow } from '../components/ImageSlideShow';
// import { HomePageStore } from '../../stores/HomePageStore'; 

import * as RXStrap from 'reactstrap';

//css
import '../css/menuFoodsPage.css';

interface IProps {
      //
}

@observer
export class MenuFoodsPage extends React.Component<IProps, any> {

      // private viewModel: HomePageStore;

      constructor(props: IProps) {
            super(props);
            // this.viewModel = new HomePageStore();
            this.state = {
                  selected: []
            }
      }

      render() {

            const foods = [];
            console.log(this.state);

            for (let i = 0; i < 22; i++) {
                  // console.log(i);
                  foods.push(
                        <div key={i} className="food-card">
                              <div className="image-card" />
                              <div className="card-container">
                                    <div className="card-content"> Food{i} </div>
                                    <div
                                          className="card-button"
                                          onClick={() => this.onSelect("Food" + i)}
                                    >
                                          select
                                    </div>
                              </div>
                        </div>
                  )
            }

            return (
                  <div>
                        <FoodNavbar />
                        <div className="menu-foods-container">
                              <RXStrap.Container>
                                    <RXStrap.Row>
                                          {foods}
                                    </RXStrap.Row>
                              </RXStrap.Container>
                        </div>
                  </div>
            )
      }

      private onSelect = (item: string) => {
            this.setState({
                  selected: [...this.state.selected, item]
            });
      }
}