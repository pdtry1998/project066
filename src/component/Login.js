import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import fire from "../config/fire";

class Login extends Component {

    constructor(props) {

        super(props)
        this.state = {

            email: "",
            password: ""

        }

    }


    Login(e) {

        e.preventDefault()

        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.passeword).then((u) =>{
            console.log(u)
        }).catch((err) => {
            console.log(err)
        })

    }

    handleChange(){
        this.setState({
            [e.target.nane] : e.target.value
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
                                <MDBInput label="Type your email" icon="envelope" group type="email" validate error="wrong"
                                    success="right" value={this.state.email} />
                                <MDBInput label="Type your password" icon="lock" group type="password" validate value={this.state.password} />
                            </div>
                            <div className="text-center">
                                <MDBBtn>Login</MDBBtn>
                            </div>
                        </form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    }
}

export default Login;