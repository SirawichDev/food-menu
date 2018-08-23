import * as React from 'react';
import * as ReactStrap from 'reactstrap';
//css
import '../css/navbar.css';

interface IProps {
   //
}

export class FoodNavbar extends React.Component<IProps, any> {
   constructor(props: IProps) {
      super(props);
      this.toggle = this.toggle.bind(this);
      this.state = {
         isOpen: false,
         username: ''
      };
   }

   toggle() {
      this.setState({
         isOpen: !this.state.isOpen
      });
   }

   componentDidMount = () => {
      if (!this.state.username) {
         this.setState({
            username:
               <ReactStrap.UncontrolledDropdown nav inNavbar>
                  <ReactStrap.DropdownToggle nav caret href="/Login/">Login</ReactStrap.DropdownToggle>
                  <ReactStrap.DropdownMenu right>
                     <ReactStrap.DropdownItem> Regiter</ReactStrap.DropdownItem>
                  </ReactStrap.DropdownMenu>
               </ReactStrap.UncontrolledDropdown>
         });
      } else if (this.state.username) {
         this.setState({
            username:
               <ReactStrap.UncontrolledDropdown nav inNavbar>
                  <ReactStrap.DropdownToggle nav caret>{this.state.username} </ReactStrap.DropdownToggle>
                  <ReactStrap.DropdownMenu right>
                     <ReactStrap.DropdownItem>รถเข็นของฉัน</ReactStrap.DropdownItem>
                     <ReactStrap.DropdownItem>รายละเอียดโปรไฟล์</ReactStrap.DropdownItem>
                     <ReactStrap.DropdownItem>ตั้งค่าโปรไฟล์</ReactStrap.DropdownItem>
                     <ReactStrap.DropdownItem divider />
                     <ReactStrap.DropdownItem>Logout</ReactStrap.DropdownItem>
                  </ReactStrap.DropdownMenu>
               </ReactStrap.UncontrolledDropdown>
         });
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
                        {this.state.username}
                     </ReactStrap.Nav>
                  </ReactStrap.Collapse>
               </ReactStrap.Navbar>
            </div>
         </div>
      );
   }
}