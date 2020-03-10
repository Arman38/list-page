import React from 'react'
import {TabContainer, Row, Col, Container, Button,Form} from 'react-bootstrap'
import {NavLink, Redirect,withRouter} from 'react-router-dom'
import './register.css'


const Register = ({loggedEmail,onInputMail,inInputPass,createUser,errMsg}) => {

  if( loggedEmail ){
      return <Redirect to = "/"/>
  }
    return (
        <TabContainer>
            <Row>
                <Col className=" login-nav">
                    <Container>
                        <NavLink to = "/" >List:AM</NavLink>  
                    </Container>  
                </Col>
            </Row>
            <Row className = "login-info">
                <Col>
                    <Container>
                        <NavLink to = "/">Գլխավոր</NavLink> > <span>գրանցում</span> 
                    </Container>  
                </Col>
            </Row>
            <Row className = "login-register-content">
                <Container>
                    <Row className = "border border-light rounded">
                        <Col xs = {12} md={6} className = "login border-right border-light">
                            <Row>
                                <Col>Օգտվեք Facebook-ից, արագ  և պարզ գրանցման համար</Col>
                                    <Col><Button className = "ml-4 btn-lg btn-fb ">FACEBOOK</Button></Col>
                                </Row>
                            <hr/>
                            <Form onSubmit = {(e)=>createUser(e)}>
                                <Form.Label>Կամ օգտագործեք Ձեր էլ. փոստի հասցեն</Form.Label>
                                <Form.Group controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Ձեր Էլ. փոստի հասցեն" onChange = {(e) =>onInputMail(e.target.value)} />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Գաղտնաբառ"  onChange = {(e)=>inInputPass(e.target.value)}  />
                                </Form.Group>
                                <Button variant="primary" size="lg" type="submit" className="d-block mx-auto"> Գրանցում  </Button>
                                <hr/>
                                {errMsg ?  <div className = "text-center text-danger font-weight-bolder">{errMsg}</div>:null}
                            </Form> 
                        </Col>
                        <Col xs = {12} md={5} className = "register">
                        <div className = "reg-info">
                            Գրանցվելով, Դուք կստանաք հետևյալ առավելությունները.
                        </div>
                        <div>
                            <ul>
                                <li>Ձեր բոլոր տեղադրված հայտարարությունները կղեկավարվեն մեկ գաղտնաբառով</li>
                                <li>Դուք կկարողանաք խմբագրել, հեռացնել և թարմացնել հայտարարությունները Ձեր անձնական էջից</li>
                                <li>List.am-ի դրամապանակից օգտվելու հնարավորություն</li>
                                <li>Դիտել այլ օգտատերերի կողմից` Ձեր հայտատարություններին հղված պատասխանները</li>
                                <li>Եվ շատ ուրիշ առավելություններ</li>
                            </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Row>
        </TabContainer>
    )
}

export default withRouter(Register)