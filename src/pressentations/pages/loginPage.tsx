import * as React from 'react';
import { observer } from 'mobx-react';
import { UserProfileStore } from '../../stores/UserProfileStore';
// import * as RXCookie from 'react-cookie';
// const { auth } = firebase; 

interface IProps {
      //
}

@observer
export class LoginPage extends React.Component<IProps, any> {
      private viewStore: UserProfileStore;

      constructor(props: IProps) {
            super(props);
            this.viewStore = new UserProfileStore();
      }
      render() {
            return (
                  <div>
                        <h1>Fun Food Friends</h1>
                        {this.viewStore.userProfile.displayName ?
                              <button onClick={this.logout}>Log Out : {this.viewStore.userProfile.displayName}</button>
                              :
                              <button onClick={this.login}>Log In</button>
                        }
                  </div>
            )
      }

      // private handleChange = (e) => {
      //    /* ... */
      //  }
      private logout = () => {
            this.viewStore.onLogout();
      }
      private login = () => {
            this.viewStore.onLoginWithGoogle();
      }
}