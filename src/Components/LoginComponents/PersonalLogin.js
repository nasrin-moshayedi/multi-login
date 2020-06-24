import React from "react";
import {Button, Input} from "@material-ui/core";
import {connect} from "react-redux";
import {PersonalLoginAction} from "../../Redux/Action";
import validator from "validator";

class PersonalLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            personalCode: "",
            password: "",
            errors: {}
        }
    }

    handleLogin = (e, ) => {
        const name =  e.target.name ;

        this.setState(
            {[name]: e.target.value}
        );
    };
    //validation form
    handleValidation = (callback) => {
        let formIsValid = true;
        const errors= {};
        if(validator.isEmpty(this.state.personalCode)) {
            formIsValid = false;
            errors["personalCode"] = "personalCode can not be empty";
        }
        if(validator.isEmpty(this.state.password)) {
            formIsValid = false;
            errors["password"] = "password can not be empty";
        }
        this.setState({ errors }, () => {
            return callback(formIsValid);
        });
    };
    handleSubmit = () => {
        this.handleValidation((valid) => {
            if(valid) {
                this.props.PersonalLoginAction(this.state.personalCode, this.state.password);
            }
        });
    };


    render() {
        return(
            <div className="p-3 pt-5">
                <Input className="d-block mb-3 p-1" type="text" onChange={this.handleLogin} value={this.state.personalCode} name="personalCode"/>
                <div className={["text-danger", this.state.errors.personalCode ? "d-block": "d-none"].join(" ")}>
                    {this.state.errors.personalCode}
                </div>
                <Input className="d-block p-1 bg-transparent" type="password" onChange={this.handleLogin} value={this.state.password} name="password"/>
                <div className={["text-danger", this.state.errors.password ? "d-block": "d-none"].join(" ")}>
                    {this.state.errors.password}
                </div>
                <Button className="d-block mt-3 w-100" variant="outlined" color="primary" onClick={this.handleSubmit} title="submit">Submit data</Button>
            </div>
        )
    }
}

export default connect(null, {PersonalLoginAction})(PersonalLogin);
