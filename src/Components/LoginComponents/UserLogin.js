import React from "react";
import {Button, Input} from "@material-ui/core";

class UserLogin extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        }
    }

    handleLogin = (e, ) => {
        const name =  e.target.name ;

        this.setState(
            {[name]: e.target.value}
    );
    };

    handleSubmit = () => {
        console.log(this.state.username, this.state.password, "sds")
    };

    render() {
        return(
            <div className="p-3 pt-5">
                <Input className="d-block mb-3 p-1" type="text" onChange={this.handleLogin} value={this.state.username} name="username"/>
                <Input className="d-block p-1 bg-transparent" type="password" onChange={this.handleLogin} value={this.state.password} name="password"/>
                <Button className="d-block mt-3 w-100" variant="outlined" color="primary" onClick={this.handleSubmit} title="submit">Submit data</Button>
            </div>
        )
    }
}

export default UserLogin;
