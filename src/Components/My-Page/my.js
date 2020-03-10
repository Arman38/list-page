import React,{useState} from 'react'
import {Container,Nav,InputGroup, FormControl} from 'react-bootstrap'
import {NavLink, withRouter,Redirect} from 'react-router-dom'
import './my.css'
const My = ({loggedEmail}) => {

    const [items,setItems] = useState(
        [
            {itemName:"Bmw F10",views:"0",updates:"5",imgUrl:"https://besplatka.ua/aws/39/41/30/14/prodam-bmw-535-x-drive-m-sport-f10-photo-a1c2.jpg"},
            {itemName:"Mercedes-Benz ",views:"15",updates:"20",imgUrl:"https://pict1.reezocar.com/images/autoscout24.de/RZCATSDEF6BA160DEEA2/MERCEDES-AMG-AMG-GT-00.jpg"},
            {itemName:"Ford  Mustang",views:"15",updates:"20",imgUrl:"https://previews.123rf.com/images/artzzz/artzzz1812/artzzz181200292/119400604-dubai-uae-november-15-2018-american-muscle-car-ford-mustang-takes-part-in-the-annual-gulf-car-festiv.jpg"},
        ]
    ) 
    if(!loggedEmail){
        return <Redirect to ="/login"/>
    }
    return (
        <Container className = "my-page-all">
            <Nav  variant="tabs" defaultActiveKey="1" style= {{background : "#F7F7F7"}} >
                <Nav.Item>
                    <Nav.Link eventKey="1"  activeKey="1" as = {NavLink} to ='/my' >Հայտարարություններ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="2" as = {NavLink} to ='/messages'>Հաղորդագրություններ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="3" as = {NavLink} to ='/wallet'>Դրամապանակ</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="4" as = {NavLink} to ='/profile' >Կարգավորումներ </Nav.Link>
                </Nav.Item>
            </Nav>
            <div  className = "pageTabBar" >
                <div>
                    <select >
                        <option value="-1">Բոլոր բաժինները</option>
                        <optgroup label="Անշարժ գույք ">
                            <option value="Բնակարաններ">Բնակարաններ</option>
                            <option value="Տներ" >Տներ</option>
                            <option value="Հողատարածք">Հողատարածք</option>
                        </optgroup>
                        <optgroup label="German Cars">
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </optgroup>
                        </select>
                    </div>
                <div>
                    <select >
                        <option value="-1">Բոլոր տարածաշրջանները</option>
                        <optgroup label="Անշարժ գույք ">
                            <option value="Բնակարաններ">Բնակարաններ</option>
                            <option value="Տներ" >Տներ</option>
                            <option value="Հողատարածք">Հողատարածք</option>
                        </optgroup>
                        <optgroup label="German Cars">
                            <option value="mercedes">Mercedes</option>
                            <option value="audi">Audi</option>
                        </optgroup>
                        </select>
                    </div>
               
                <div>
                    <InputGroup>
                        <FormControl type = "search" placeholder = "Որոնում"/>
                    </InputGroup>
                </div>
            </div>
            <div className = "my-items">
                    <div className="container-fluid">
                        {items.map(item => {
                            return (
                                    <div className = "row myitem">
                                <div className = "col-3">
                                    <img src = {item.imgUrl} width="200" className ="rounded item-image"/>
                                </div>
                                <div className = "col-9 ">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <a href = "#" className = "item-link-name"> {item.itemName}</a>
                                        </div>
                                        <div className = "item-btns d-flex">
                                            <span className = "btn btn-outline-secondary"><i class="fas fa-arrow-up"></i></span>
                                            <span className = "btn btn-outline-primary"><i class="far fa-edit"></i></span>
                                            <span className = "btn btn-outline-danger"><i class="far fa-trash-alt"></i></span>
                                            <NavLink to ="/" className = "btn btn-outline-success"><i class="fa fa-home"></i></NavLink>
                                        </div>
                                        </div>
                                      
                                </div>
                                </div>
                            )
                        })}
                    </div>
            </div>
        </Container>
    )
}

export default withRouter(My)
