import * as React from 'react';
import { FoodNavbar } from '../components/Navbar';
import { observer } from 'mobx-react';
import { ImageSlideShow } from '../components/ImageSlideShow';
import { HomePageStore } from '../../stores/HomePageStore';

// import * as RStrap from 'reactstrap';

//css

interface IProps {
      //
}

@observer
export class HomePage extends React.Component<IProps, any> {

      private viewModel: HomePageStore;

      constructor(props: IProps) {
            super(props);
            this.viewModel = new HomePageStore();
      }

      render() {

            return (
                  <div className='test-1' >
                        <FoodNavbar />
                        <ImageSlideShow imageSildeShow={this.viewModel.images} loading={this.viewModel.loading}/>
                        <div className="enter-site-contrainer">
                              <a>
                                    <div>
                                          เข้าสู่เว็บไซต์ | Enter Site
                                    </div>
                              </a>
                        </div>
                  </div>
            )
      }
}