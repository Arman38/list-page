import React, { useState, useEffect } from "react"
import Enav from "../Components/e_nav/e-nav"
import Categories from "../Components/Categories/categories"
import {Route,withRouter} from 'react-router-dom'
import Login from "../Components/Login/login"
import Register from "../Components/Register/register"
import  firebase  from 'firebase'
import My from '../Components/My-Page/my'

(function(){
    var firebaseConfig = {
        apiKey: "AIzaSyABAZtcdzFCGMqL-l_KiuiKsRL95xqbfIs",
        authDomain: "list-web-app.firebaseapp.com",
        databaseURL: "https://list-web-app.firebaseio.com",
        projectId: "list-web-app",
        storageBucket: "list-web-app.appspot.com",
        messagingSenderId: "901755676023",
        appId: "1:901755676023:web:fb648042e684780b2a6d72"
      };
     firebase.initializeApp(firebaseConfig)
}())

const App = (props) => {
    //states start
    const [visible,setVisible]  = useState(false)
     const [email,setEmail] = useState("")
      const [pass,setPass] = useState("")
       const [logMail,setLogMail] = useState("")
        const [logPass,setLogPass] = useState("")
         const [loggedEmail,setLoggedEmail] = useState("")
          const [errMsg,setErrMsg] = useState("")  
           const [errLogMsg,setErrLogMsg] = useState("")
            //states end
        const showCategories = () => setVisible(!visible)
            const  onInputMail = (value) =>   setEmail(value)
                const  inInputPass = (value) => setPass(value)
                    const onlogMail = (value) => setLogMail(value)
                        const onlogPass = (value) =>  setLogPass(value)
        useEffect(() => {
            firebase.auth().onAuthStateChanged(user=> {
                if(user){
                    setLoggedEmail(user.providerData[0].uid)
                }else{
                    console.log("not logged in ") 
                }
            })
        } );
        const createUser = (e) => {
            e.preventDefault()
                firebase.auth().createUserWithEmailAndPassword(email,pass)
                    .then(res=> console.log(res) )
                        .catch(err=>setErrMsg(err.message))
        }
        const signIn = (e) => {
            e.preventDefault()
                firebase.auth().signInWithEmailAndPassword(logMail,logPass)  
                    .then(res =>console.log(res))
                        .catch(err=>setErrLogMsg(err.message))
        }
        const signout = () => {
            firebase.auth().signOut()
                window.location.reload()
        }
    return( 
        < >
            <Route path = "/" exact render = {()=> {
                return (
                   <>
                    <Enav  
                        showCategories = {showCategories}
                        loggedEmail = {loggedEmail}
                        email = {email}
                        signout = {signout}
                    />
                    <Categories showCategories = {visible} /> 

                    </>
                )
            }} />
          
            <Route path = "/login"  render = {()=> {
                return <Login 
                            signIn  = {signIn}
                            onlogMail = {onlogMail}
                            onlogPass = {onlogPass}
                            errLogMsg = {errLogMsg}
                            loggedEmail = {loggedEmail}
                /> 
            }} />
            <Route path = "/register" render = {()=> {
                return <Register 
                            loggedEmail = {loggedEmail}
                            onInputMail = {onInputMail}
                            inInputPass = {inInputPass}
                            createUser = {createUser}
                            pass = {pass}
                            errMsg = {errMsg}
                       /> 
            }} />
           <Route path = "/my" render = {()=> {
               return  <>
                        <Enav  
                            showCategories = {showCategories}
                            loggedEmail = {loggedEmail}
                            email = {email}
                            signout = {signout}
                            hideContent = "d-none"
                        />
                        <My loggedEmail = {loggedEmail}/>
                        </>
           }}/>
        </>
    )
}

export default withRouter(App)