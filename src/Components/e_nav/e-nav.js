import React from 'react'
import './e-nav.css'
import {Container,Navbar,Nav,Form,FormControl,Button, NavDropdown} from 'react-bootstrap'
import {NavLink,withRouter} from 'react-router-dom'

const Enav = ({loggedEmail,showCategories,signout,hideContent,history}) => {

    const classNames = history.location.pathname === "/add" ? "d-none" : ""

   return (
       <div className="container-fluid" style = {{backgroundColor : "white",borderBottom:".5px solid #CACACA"}}>
        <Container >
           <Navbar collapseOnSelect expand="lg"  >
                <Navbar.Brand as= {NavLink} to="/">List.am</Navbar.Brand>
                <Button 
                     className = {`${classNames} hide-categories`}
                     onClick = {showCategories}
                 >
                     <i className="fa fa-bars" ></i>
                 </Button>
                <Form  className="w-50" >
                    <FormControl type="text" placeholder="Search" className = {hideContent} />
                </Form>
                <Navbar.Toggle aria-controls=" responsive-navbar-nav "  > 
                    <Button variant="light" className = {classNames}>
                      <i className="fas fa-user fa-lg dark"></i>
                    </Button>
                </Navbar.Toggle>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className = "nav_profile">
                        { loggedEmail 
                        ? 
                            <NavDropdown title= {loggedEmail} className={`${ classNames } my-page`} >
                                <NavDropdown.Item as ={NavLink} to ="/my" className = "text-center">Իմ հայտարարությունները</NavDropdown.Item>
                                <NavDropdown.Item >
                                    <button 
                                         className = "btn btn-outline-danger"
                                         onClick = {signout}
                                    >Դուրս գալ</button>
                                </NavDropdown.Item>
                            </NavDropdown> 
                        :
                        <Nav.Link as ={NavLink} to="/login">Իմ էջը</Nav.Link>}       
                        <Nav.Link as ={NavLink} to="/add" exact className ={` ${classNames} btn btn-primary btn-xs text-light`}> Ավելացնել հայտարարություն </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    </div>
   )
}

export default withRouter(Enav)