import * as  React from 'react';
import '../css/loadingPage.css';

export class LoadingPage extends React.Component {
   render() {
      return (
         <div className="body-loading ">
            <h1>Food Menu progress..</h1>
            <div id="cooking">
               <div className="bubble"></div>
               <div className="bubble"></div>
               <div className="bubble"></div>
               <div className="bubble"></div>
               <div className="bubble"></div>
               <div id="area">
                  <div id="sides">
                     <div id="pan"></div>
                     <div id="handle"></div>
                  </div>
                  <div id="pancake">
                     <div id="pastry"></div>
                  </div>
               </div>
            </div>
         </div>
      )
   }
}
