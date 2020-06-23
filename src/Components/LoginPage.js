import React from 'react';
import {Paper} from "@material-ui/core";
import {NavLink, Route, Switch} from "react-router-dom";
import UserLogin from "./LoginComponents/UserLogin";
import AdminLogin from "./LoginComponents/AdminLogin";
import PersonalLogin from "./LoginComponents/PersonalLogin";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Paper>
                    <div>
                        <NavLink
                            exact
                            to= {'/'}
                            className="px-3 py-2"
                            style={{
                                color: "#696969"
                            }}
                            activeStyle={{
                                background: "#17316C",
                                color: "#fff"
                            }}
                        >user login</NavLink>
                        <NavLink
                            exact
                            to= {'/admin'}
                            className="px-3 py-2"
                            style={{
                                color: "#696969"
                            }}
                            activeStyle={{
                                background: "#17316C",
                                color: "#fff"
                            }}
                        >admin login</NavLink>
                        <NavLink
                            exact
                            to= {'/personal'}
                            className="px-3 py-2"
                            style={{
                                color: "#696969"
                            }}
                            activeStyle={{
                                background: "#17316C",
                                color: "#fff"
                            }}
                        >personal login</NavLink>
                    </div>
                    <div>
                        <Switch>
                            <Route exact path="/" render={() => <UserLogin/>}/>
                            <Route path="/admin" render={() => <AdminLogin/>} />
                            <Route path="/personal" render={() => <PersonalLogin/>} />
                        </Switch>
                    </div>
                </Paper>
            </div>

        );
    }
}

export default LoginPage;
