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
      }

      render() {

            return (
                  <div>
                        <FoodNavbar />
                        <div className="menu-foods-container">
                              <RXStrap.Container>
                                    <RXStrap.Row>
                                          <div className="food-card">
                                          </div>
                                          <div className="food-card">
                                          </div>
                                          <div className="food-card">
                                          </div>
                                          <div className="food-card">
                                          </div>
                                          <div className="food-card">
                                          </div>
                                    </RXStrap.Row>
                              </RXStrap.Container>
                        </div>
                  </div>
            )
      }
}