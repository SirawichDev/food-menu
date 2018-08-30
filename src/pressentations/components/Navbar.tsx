import * as React from 'react';
import * as ReactStrap from 'reactstrap';
import { observer } from 'mobx-react';
import { UserProfileStore } from '../../stores/UserProfileStore';

//css
import '../css/navbar.css';

interface IProps {
      store: UserProfileStore;
}

@observer
export class FoodNavbar extends React.Component<IProps, any> {


      constructor(props: IProps) {
            super(props);
            this.state = {
                  isOpen: false,
            }
      }

      render() {
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
                                                      this.props.store.userProfile.displayName ?
                                                            <ReactStrap.UncontrolledDropdown nav inNavbar>
                                                                  <ReactStrap.DropdownToggle nav caret>
                                                                        {this.props.store.userProfile.displayName}
                                                                        {this.props.store.userProfile.carts ?
                                                                              <span className="cartsItem-ontap">
                                                                                    {this.props.store.userProfile.carts.length}
                                                                              </span>
                                                                              : undefined
                                                                        }
                                                                  </ReactStrap.DropdownToggle>

                                                                  <ReactStrap.DropdownMenu right>
                                                                        <ReactStrap.DropdownItem>
                                                                              {this.props.store.userProfile.carts ?
                                                                                    <span className="cartsItem-dropItem">
                                                                                          {this.props.store.userProfile.carts.length}
                                                                                    </span>
                                                                                    : undefined
                                                                              }
                                                                              รถเข็นของฉัน
                                                                        </ReactStrap.DropdownItem>
                                                                        <ReactStrap.DropdownItem>รายละเอียดโปรไฟล์</ReactStrap.DropdownItem>
                                                                        <ReactStrap.DropdownItem>ตั้งค่าโปรไฟล์</ReactStrap.DropdownItem>
                                                                        <ReactStrap.DropdownItem divider />
                                                                        <ReactStrap.DropdownItem onClick={this.onLogout} >Logout</ReactStrap.DropdownItem>
                                                                  </ReactStrap.DropdownMenu>
                                                            </ReactStrap.UncontrolledDropdown>
                                                            :
                                                            <ReactStrap.UncontrolledDropdown nav inNavbar>
                                                                  <ReactStrap.DropdownToggle nav caret href="/Login/">
                                                                        Login
                                                                        <ReactStrap.DropdownMenu right>
                                                                              <ReactStrap.DropdownItem onClick={this.onLogin}> Login</ReactStrap.DropdownItem>
                                                                        </ReactStrap.DropdownMenu>
                                                                  </ReactStrap.DropdownToggle>
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
            this.props.store.onLogout();
      }
      private onLogin = () => {
            this.props.store.onLoginWithGoogle();
      }
}