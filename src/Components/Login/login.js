import React from 'react'
import {TabContainer, Row, Col, Container, Button,Form} from 'react-bootstrap'
import {NavLink,withRouter, Redirect} from 'react-router-dom'
import './login.css'

                      
const Login = ({history,signIn,onlogMail,onlogPass,errLogMsg,loggedEmail}) => {

    const classNames =  history.location.search === "?next=add"
                        ? "hide-content"
                        :'d-none' 
  

    if(loggedEmail){
        return    <Redirect to="/"/>
    }
    return (
        <TabContainer  >
            <Row>
                <Col className=" login-nav">
                    <Container>
                          <NavLink to = "/"><i className="fas  fa-home fa-xs"></i></NavLink>  
                    </Container>  
                </Col>
            </Row>
            <Row className = "login-info">
                <Col>
                    <Container>
                        <NavLink to = "/">Գլխավոր</NavLink> > <span>List.am մուտք</span> 
                    </Container>  
                </Col>
            </Row>
            <Row className = {classNames}>
                <Col>
                    <Container>
                        <div className = "hide-info">Շարունակելու համար, խնդրում ենք գրանցվել:</div>
                    </Container>  
                </Col>
            </Row>
            <Row className = "login-register-content">
                   <Container>
                       <Row className = "border border-light rounded">
                           <Col xs = {12} md={6} className = "login border-right border-light">
                                <span>Արագ մուտք Facebook-ի միջոցով</span>
                                <Button className = "ml-4 btn-lg btn-fb"  >Facebook</Button>
                                <hr/>
                                <Form onSubmit = {signIn}>
                                    <Form.Label>Կամ մուտքագրեք Ձեր էլ. փոստի հասցեն և գաղտնաբառը</Form.Label>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Ձեր Էլ. փոստի հասցեն" onChange = {(e) => onlogMail(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Գաղտնաբառ" onChange = {(e) => onlogPass(e.target.value)} />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Հիշել ինձ" className="d-inline-block" />
                                            <NavLink to = "/" className="d-inline-block float-right">Մոռացել եք գաղտնաբառը ?</NavLink>
                                    </Form.Group>
                                    
                                    <Button variant="primary" size="lg" type="submit">
                                        Մուտք
                                    </Button>
                                    <hr/>
                                    {errLogMsg ?  <div className = "text-center text-danger font-weight-bolder">{errLogMsg}</div>:null}
                                    </Form> 
                           </Col    >
                           <Col xs = {12} md={6} className = "register">
                                    <div className="text-center font-weight-bolder">Դեռ գրանցված չե՞ք</div>
                                    <div className= "d-flex justify-content-center mt-4">
                                        <Button 
                                            as = {NavLink} 
                                            to = "/register" 
                                            variant="primary" 
                                            size="lg" 
                                            className="reg-button"
                                            >
                                            Գրանցում
                                        </Button>
                                    </div> 
                                    <div className ="text-center mt-4">
                                        Գրանցումը տալիս է Ձեր հայտարարությունները անձնական էջից ղեկավարելու,
                                        դրամապանակից և շատ ուրիշ առավելություններից օգտվելու հնարավորություն:
                                    </div>
                           </Col>
                       </Row>
                   </Container>
            </Row>
           
        </TabContainer>
    )
}

export default withRouter(Login)