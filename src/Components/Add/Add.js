import React from "react"
import { Container, NavDropdown, Nav,Navbar } from "react-bootstrap"
import { Redirect,NavLink } from "react-router-dom"
import './add.css'
export const Add = ({loggedEmail}) => {

    if(!loggedEmail){
        return <Redirect to = "/login/?next=add"/>
    }
    return(
        <Container>
            <header className ="d-flex add-header" >
                <div className ="col-md-7" style = {{fontSize:"15px"}}>Ընտրեք այն հայտարարության տեսակը, որը Դուք ցանկանում եք ավելացնել</div>
                <div className = "d-flex justify-content-between col-md-4 offset-md-1">
                    <div className = "d-flex flex-column align-items-center justify-content-center">
                        <div className = "round text-center">1</div>
                        <div className="mt-2">Բաժին</div>
                    </div>
                    <div className = "d-flex flex-column align-items-center justify-content-center">
                        <div className = "round text-center">2</div>
                        <div className="mt-2">Հայտարարություն</div>
                    </div>
                    <div className = "d-flex flex-column align-items-center justify-content-center">
                        <div className = "round text-center">3</div>
                        <div className="mt-2">Դիտում</div>
                    </div>
                    <div className = "d-flex flex-column align-items-center justify-content-center">
                        <div className = "round text-center">4</div>
                        <div className="mt-2">Ավելացնել</div>
                    </div>
                </div>
            </header>
            <section className = "add-with-categories d-flex flex-column" >
                    <NavDropdown title="Առք / Վաճառք" id="basic-nav-dropdown" drop = "right" style ={{width:"100px"}}>
                        <NavDropdown.Item href="#action/3.1">Անշարժ գույք</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Տրանսպորտ</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.3">Էլեկտրոնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Կենցաղային տեխնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Ամեն ինչ տան համար</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Նորաձևություն եւ ոճ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Մանկական աշխարհ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Մշակույթ և հոբբի</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Գործիքներ և նյութեր</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Մթերք և ըմպելիքներ</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Այլ</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Աշխատանք" id="basic-nav-dropdown" drop = "right"  style ={{width:"100px"}}>
                        
                        <NavDropdown.Item href="#action/3.1">Առաջարկում եմ աշխատանք</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Փնտրում եմ աշխատանք</NavDropdown.Item>
                    </NavDropdown>

                    <NavDropdown title="Ծառայություններ" id="basic-nav-dropdown" drop = "right"  style ={{width:"100px"}} >
                        <NavDropdown.Header>Շինարարություն և վերանորոգում</NavDropdown.Header>
                        <NavDropdown.Item href="#action/3.1">Պատվերով կահույք</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Վերանորոգում և ներքին հարդարանք</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Շինարարություն</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Սանտեխնիկա</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Էլեկտրականություն</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.4">Դռներ և պատուհաններ</NavDropdown.Item>

                    </NavDropdown>
            </section>
        </Container>
    )
}