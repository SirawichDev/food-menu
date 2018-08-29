import * as React from 'react';
import * as ReactStrap from 'reactstrap';
import { observer } from 'mobx-react';
import { UserProfileStore } from '../../stores/UserProfileStore';

//css
import '../css/navbar.css';

interface IProps {
      //
}

@observer
export class FoodNavbar extends React.Component<IProps, any> {

      private store: UserProfileStore;

      constructor(props: IProps) {
            super(props);
            this.store = new UserProfileStore();
            this.state = {
                  isOpen: false,
            }
      }

      render() {
            console.log(this.store.userProfile.displayName);
            return (
                  <div>
                        <div className="headNav" />
                        <div className="navbarout">
                              <ReactStrap.Navbar className="navbarin" light expand="md">
                                    <ReactStrap.NavbarBrand className="NavbarBrand" href="/">Food Anywhere</ReactStrap.NavbarBrand>

                                    <ReactStrap.NavbarToggler onClick={this.toggle} />
                                    <ReactStrap.Collapse isOpen={this.state.isOpen} navbar>
                                          <ReactStrap.Nav className="ml-auto" navbar>
                                                <ReactStrap.UncontrolledDropdown nav inNavbar>
                                                      <ReactStrap.DropdownToggle nav caret href="/Menu/">
                                                            Menu
                                                       </ReactStrap.DropdownToggle>
                                                      <ReactStrap.DropdownMenu right>
                                                            <ReactStrap.DropdownItem> เมนูแนะนำ</ReactStrap.DropdownItem>
                                                            <ReactStrap.DropdownItem> ร้านค้าทั้งหมด</ReactStrap.DropdownItem>
                                                            <ReactStrap.DropdownItem> ตำแหน่งร้านค้าใกล้เคียง</ReactStrap.DropdownItem>
                                                      </ReactStrap.DropdownMenu>
                                                </ReactStrap.UncontrolledDropdown>
                                                <ReactStrap.NavItem>
                                                      <ReactStrap.NavLink href="/Promotion/">Promotions</ReactStrap.NavLink>
                                                </ReactStrap.NavItem>
                                                {
                                                      this.store.userProfile.displayName ?
                                                            <ReactStrap.UncontrolledDropdown nav inNavbar>
                                                                  <ReactStrap.DropdownToggle nav caret> {this.store.userProfile.displayName} </ReactStrap.DropdownToggle>
                                                                  <ReactStrap.DropdownMenu right>
                                                                        <ReactStrap.DropdownItem>รถเข็นของฉัน</ReactStrap.DropdownItem>
                                                                        <ReactStrap.DropdownItem>รายละเอียดโปรไฟล์</ReactStrap.DropdownItem>
                                                                        <ReactStrap.DropdownItem>ตั้งค่าโปรไฟล์</ReactStrap.DropdownItem>
                                                                        <ReactStrap.DropdownItem divider />
                                                                        <ReactStrap.DropdownItem onClick={this.onLogout} >
                                                                              Logout
                                                                        </ReactStrap.DropdownItem>
                                                                  </ReactStrap.DropdownMenu>
                                                            </ReactStrap.UncontrolledDropdown>
                                                            :
                                                            <ReactStrap.UncontrolledDropdown nav inNavbar>
                                                                  <ReactStrap.DropdownToggle nav caret href="/Login/">Login</ReactStrap.DropdownToggle>
                                                                  <ReactStrap.DropdownMenu right>
                                                                        <ReactStrap.DropdownItem onClick={this.onLogin}> Login</ReactStrap.DropdownItem>
                                                                  </ReactStrap.DropdownMenu>
                                                            </ReactStrap.UncontrolledDropdown>
                                                }
                                          </ReactStrap.Nav>
                                    </ReactStrap.Collapse>
                              </ReactStrap.Navbar>
                        </div>
                  </div>
            );
      }


      private toggle = () => {
            this.setState({
                  isOpen: !this.state.isOpen
            });
      }

      private onLogout = () => {
            this.store.onLogout();
      }
      private onLogin = () => {
            this.store.onLoginWithGoogle();
      }
}