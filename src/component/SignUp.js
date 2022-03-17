import React from "react";
import { Link as LinkRouter } from "react-router-dom";
import "../styles/signUp.css"
import countries from "./paises"
import { connect } from "react-redux";
import usuariosActions from "../redux/actions/usuariosActions"
import Snack from "./Snackbar"
import FacebookSignUp from "./FacebookSignUp";
import GoogleSignUp from "./GoogleSignUp";






const SignUp = (props) => {
    window.scrollTo(0,0)
    function enviar(event) {
        event.preventDefault()
        let form = document.getElementById("form")
        let datosInp = new FormData(form)

        let userObj = {
            firstName: datosInp.get("name"),
            lastName: datosInp.get("lastName"),
            email: datosInp.get("email"),
            password: datosInp.get("password"),
            imageUrl: datosInp.get("imageUrl"),
            country: datosInp.get("pais"),
            from: "signup",
        }
        // window.location = "/home"
        form.reset()
        props.signUp(userObj)
    }



    console.log(props.snackbar)
    return (
        <main className="mainForm">
            <h2 className='h2'>Sign up</h2>
            <div className="formContainer">
                <form action="" className="form" onSubmit={enviar} id="form">

                    <fieldset className="fieldsetFrom">
                        <label className="labelForm" >
                            <FacebookSignUp />
                        </label>
                        <label className="labelForm" >
                            <GoogleSignUp />
                        </label>
                        <label className="labelForm" htmlFor="name">
                            <span>First Name</span>
                            <input className="inputFrom" type="text" id="name" name="name" required />
                        </label>
                        <label className="labelForm" htmlFor="lastName">
                            <span>Last Name</span>
                            <input className="inputFrom" type="text" id="lastName" name="lastName" />
                        </label>
                        <label className="labelForm" htmlFor="email">
                            <span>Email</span>
                            <input className="inputFrom" type="text" id="email" name="email" />
                        </label>

                    </fieldset>
                    <fieldset className="fieldsetFrom">
                        <label className="labelForm" htmlFor="password" >
                            <span>Password</span>
                            <input className="inputFrom" type="password" id="password" name="password" />
                        </label>
                        <label className="labelForm" htmlFor="repeatPass">
                            <span>Repeat Password</span>
                            <input className="inputFrom" type="password" id="repeatPass" />
                        </label>
                        <label className="labelForm" htmlFor="imageUrl">
                            <span>Image URL</span>
                            <input className="inputFrom" type="text" id="imageUrl" name="imageUrl" />
                        </label>
                        <label className="labelForm" htmlFor="pais">
                            <span>Country</span>
                            <select className="inputFrom" defaultValue={"default"} name="pais" id="pais">
                                <option value="default">Select your Country</option>
                                {countries.map(country => {
                                    return (<option key={country.id} value={country.name}>{country.name}</option>)
                                })}

                            </select>
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
                            <span>Sign Up</span>
                        </button>
                        <span>Do you already have an account with us?<LinkRouter className="linkSingIn" to={"/signIn"} > Singn In</LinkRouter></span>
                    </fieldset>
                </form>
            </div>
            <Snack />
        </main>
    )
}

const mapDispatchToProps = {
    signUp: usuariosActions.signUp
}

const mapStateToProps = (state) => {
    return {
        snackbar: state.usuariosReducer.snackbar

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)