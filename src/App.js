import React from "react";
import "./Styles/main.scss";
import LoginPage from "./Components/LoginPage";
import {connect} from "react-redux";

class App extends React.Component {
    render() {
        console.log(this.props.logType)
        return (
            <React.Fragment>
               <LoginPage/>
            </React.Fragment>


        );
    }
}
const StateToProps = (state) => {
    return {
        logType: state
    }
};
export default connect(StateToProps, {})(App);
