import * as React from 'react';
import { FoodNavbar } from '../components/Navbar';
import { observer } from 'mobx-react';
import { ImageSlideShow } from '../components/ImageSlideShow';
import { HomePageStore } from '../../stores/HomePageStore';
import { UserProfileStore } from '../../stores/UserProfileStore';

//css

interface IProps {
      //
}

@observer
export class HomePage extends React.Component<IProps, any> {

      private viewModel: HomePageStore;
      private storeProfile: UserProfileStore;

      constructor(props: IProps) {
            super(props);
            this.viewModel = new HomePageStore();
            this.storeProfile = new UserProfileStore();
      }

      render() {

            return (
                  <div>
                        <FoodNavbar store={this.storeProfile}/>
                        <ImageSlideShow imageSildeShow={this.viewModel.images} loading={this.viewModel.loading} />
                        <div className="enter-site-contrainer">
                              <a href='/menu-foods' style={{textDecoration: 'none', color: 'black'}}>
                                    <div>
                                          เข้าสู่เว็บไซต์ | Enter Site
                                    </div>
                              </a>
                        </div>
                  </div>
            )
      }
}