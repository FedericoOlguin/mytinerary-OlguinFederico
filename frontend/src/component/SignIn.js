import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/signUp.css"
import { connect } from "react-redux";
import usuariosActions from "../redux/actions/usuariosActions"
import Snack from "./Snackbar"
import FacebookSignIn from "./FacebookSignIn";
import GoogleSignIn from "./GoogleSignIn";
import { useRef } from "react";






const SignIn = (props) => {
    const form = useRef()

    window.scrollTo(0, 0)
    function enviar(event) {
        event.preventDefault()
        // let form = document.getElementById("formIn")
        form.current.focus()
        // console.log(form.current)
        let datosInp = new FormData(form.current)

        // console.log(datosInp.get("email"))
        // console.log(datosInp.get("password"))

        let userObj = {
            email: datosInp.get("email"),
            password: datosInp.get("password"),
            from: "signup",
        }
        props.signIn(userObj)
        form.current.reset()
    }


    return (
        <main className="mainForm">
            <h2 className='h2'>Sign in</h2>
            <div className="formContainer">
                <form action="" className="formIn" onSubmit={enviar} ref={form} id="formIn">

                    <fieldset className="fieldsetFromIn">
                        <label className="labelForm" >

                            <FacebookSignIn />
                        </label>
                        <label className="labelForm" >

                            <GoogleSignIn />
                        </label>
                        <label className="labelForm" htmlFor="email">
                            <span>Email</span>
                            <input className="inputFrom" type="email" id="email" name="email" />
                        </label>

                        <label className="labelForm" htmlFor="password" >
                            <span>Password</span>
                            <input className="inputFrom" type="password" id="password" name="password" />
                        </label>
                    </fieldset>
                    <fieldset className="fieldsetFromIn">
                        <button className="button" type="submit">
                            <div className="svg-wrapper-1">
                                <div className="svg-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                        <path fill="none" d="M0 0h24v24H0z"></path>
                                        <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Sign In</span>
                        </button>
                        <span>You don't have an account?<LinkRouter className="linkSingIn" to={"/signUp"} >Sign Up</LinkRouter></span>
                    </fieldset>
                </form>
            </div>
            <Snack />
        </main>
    )
}

const mapDispatchToProps = {
    signIn: usuariosActions.signIn
}

const mapStateToProps = (state) => {
    return {
        user: state.usuariosReducer.user

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)