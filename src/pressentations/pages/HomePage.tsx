import * as React from 'react';
import { FoodNavbar } from '../components/Navbar';
import { observer } from 'mobx-react';
import * as Icon from 'react-icons/fa';

// import * as RStrap from 'reactstrap';

//css
import '../css/test.css';

const Color = {
      active: '#FF69B4',
      unactive: 'white'
}

const arr = [
      { name: 'http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg' },
      { name: 'https://www.jib.co.th/img_master/banner/original/20180820193543_1.jpg?v=678-62170008124' },
      { name: 'http://energy106.ca/wp-content/uploads/2017/11/Junk-Food.jpg' }
]

@observer
export class HomePage extends React.Component<IProps, any> {

      private timer: any;
      constructor(props: IProps) {
            super(props);
            this.onWorking();
            this.state = {
                  paginate: 0,
                  image: arr[0].name
            }
      }

      render() {
            const slides = [];
            for (let index = 0; index < arr.length; index++) {
                  slides.push(
                        <div key={index}
                              onClick={() => { this.onChange(index) }}
                              className="paginate-item"
                              style={{ backgroundColor: this.state.paginate === index ? Color.active : Color.unactive }}
                        />
                  )
            }

            return (
                  <div className='test-1' >
                        <FoodNavbar />
                        <div className="contrainer">
                              <div className="slideContainer">
                                    <div
                                          className="image"
                                          style={{ backgroundImage: 'url(' + this.state.image + ')' }}
                                    >
                                          <div className="button-arrow">
                                                <Icon.FaChevronLeft
                                                      size={30}
                                                      color={'white'}
                                                      onClick={this.onArrowLeft}
                                                />
                                          </div>
                                          <div className="button-center" />
                                          <div className="button-arrow">
                                                <Icon.FaChevronRight
                                                      size={30}
                                                      color={'white'}
                                                      onClick={this.onArrowRight}
                                                />
                                          </div>
                                    </div>
                              </div>
                              <div className="paginate-image">
                                    <div className="paginate-contrainer">
                                          {slides}
                                    </div>
                              </div>
                        </div>
                  </div>
            )
      }

      async onChange(number: number) {
            await this.setState({
                  paginate: number
            });

            await this.setState({
                  image: arr[this.state.paginate].name
            })
      }

      private async onWorking() {
            this.timer = setInterval(() => {
                  this.onArrowRight();
            }, 5000);
      }

      private onArrowLeft = () => {
            let paginate = this.state.paginate === 0 ? (arr.length - 1) : this.state.paginate - 1;
            this.onChange(paginate);
      }

      private onArrowRight = () => {
            let paginate = this.state.paginate === (arr.length - 1) ? 0
                  : (this.state.paginate + 1);
            this.onChange(paginate);
            clearInterval(this.timer);
            this.onWorking();
      }
}

interface IProps {
      //
}