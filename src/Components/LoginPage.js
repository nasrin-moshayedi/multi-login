import React from 'react';
import {Paper} from "@material-ui/core";
import {NavLink, Route, Switch} from "react-router-dom";
import UserLogin from "./LoginComponents/UserLogin";
import AdminLogin from "./LoginComponents/AdminLogin";
import PersonalLogin from "./LoginComponents/PersonalLogin";
import {connect} from "react-redux";

class LoginPage extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.logType,this.props.message)
        return (
            <div className="d-flex justify-content-center align-items-center mt-5">
                <Paper className={[!this.props.logType ? "d-block" : "d-none"].join(" ") }>
                    <div className="text-danger">

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
                        <div className={["text-danger","p-3", this.props.message ? "d-block" : "d-none"].join(" ") }>
                            {this.props.message}
                        </div>
                        <Switch>
                            <Route exact path="/" render={() => <UserLogin/>}/>
                            <Route path="/admin" render={() => <AdminLogin/>} />
                            <Route path="/personal" render={() => <PersonalLogin/>} />
                        </Switch>
                    </div>

                </Paper>
                <div className={[this.props.logType === "user" ? "d-block" : "d-none"].join(" ") }>
                    user
                </div>
                <div className={[this.props.logType === "admin" ? "d-block" : "d-none"].join(" ") }>
                    admin
                </div>
                <div className={[this.props.logType === "personal" ? "d-block" : "d-none"].join(" ") }>
                    personal
                </div>
            </div>

        );
    }
}
const StateToProps = (state) => {
    return {
        logType: state.Reducer.logType,
        message: state.Reducer.message
    }
};
export default connect(StateToProps, {})(LoginPage);
