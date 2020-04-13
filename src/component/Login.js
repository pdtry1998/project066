import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from "../config/fire";

class Login extends Component {

    constructor(props) {

        super(props)
        this.login = this.login.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.sigup = this.sigup.bind(this)
        this.state = {

            email: "",
            password: ""

        }

    }


    login(e) {

        e.preventDefault()

        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.passeword).then((u) => {
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })

    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    sigup(e){
        e.preventDefault()
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
            console.log(u)
        }).catch((err) =>{
            console.log(err)
        })
    }




    render() {
        return (
            <MDBContainer>
                <MDBRow>
                    <MDBCol md="6">
                        <form>
                            <p className="h5 text-center mb-4">Sign in</p>
                            <div className="grey-text">
                                <MDBInput label="Type your email" icon="envelope" group type="email" name="email" validate error="wrong"
                                    success="right" value={this.state.email} onChange={this.handleChange} />
                                <MDBInput label="Type your password" icon="lock" group type="password" name="password" validate value={this.state.password} onChange={this.handleChange} />
                            </div>
                            <div className="text-center">
                                <MDBBtn color="primary" onClick={this.login}>Login</MDBBtn>
                                <MDBBtn color="primary" onClick={this.sigup}>Register</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Login;