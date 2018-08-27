import * as React from 'react';
import * as Icon from 'react-icons/fa';
import { ImageSO } from '../../model/storemodel/ImageSO';
import { LoadingPage } from '../pages/loadingPage';

import '../css/slideImages.css';

const Color = {
   active: '#FF69B4',
   unactive: 'white'
}


interface IProps {
   imageSildeShow: ImageSO[];
   loading: boolean;
   //
}

export class ImageSlideShow extends React.Component<IProps, any> {

   private timer: any;
   constructor(props: IProps) {
      super(props);
      this.onWorking();
      this.state = {
         paginate: 0,
      }
   }

   render() {
      if (this.props.loading) {
         return (
            <LoadingPage />
         )
      }

      else {
         const slides = [];
         for (let index = 0; index < this.props.imageSildeShow.length; index++) {
            slides.push(
               <div key={index}
                  onClick={() => { this.onChange(index) }}
                  className="paginate-item"
                  style={{ backgroundColor: this.state.paginate === index ? Color.active : Color.unactive }}
               />
            )
         }

         return (
            <div className="contrainer-slide">
               <div className="slideContainerImage">
                  <div className="slideContainer">
                     <div
                        className="image"
                        style={{ backgroundImage: 'url(' + this.props.imageSildeShow[this.state.paginate].image + ')' }}
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
               </div>
               <div className="paginate-image">
                  <div className="paginate-contrainer">
                     {slides}
                  </div>
               </div>
            </div>
         )
      }
   }

   async onChange(number: number) {
      await this.setState({
         paginate: number
      });
   }

   private async onWorking() {
      this.timer = setInterval(() => {
         this.onArrowRight();
      },  2500);
   }

   private onArrowLeft = () => {
      let paginate = this.state.paginate === 0 ? (this.props.imageSildeShow.length - 1) : this.state.paginate - 1;
      this.onChange(paginate);
   }

   private onArrowRight = () => {
      if (this.props.imageSildeShow.length > 0) {
         let paginate = this.state.paginate === (this.props.imageSildeShow.length - 1) ? 0 : (this.state.paginate + 1);
         this.onChange(paginate);
         clearInterval(this.timer);
         this.onWorking();
      }
   }
}
