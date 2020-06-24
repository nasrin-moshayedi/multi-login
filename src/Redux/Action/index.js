export const UserLoginAction = (username, password) => {
    // we will send data to api here
    console.log(username, password);
    if(username === "test" && password === "123") {
        return {
            type: "USER_LOGIN",
            payload: {
                logType: "user"
            }
        };
    }
    else {
        return {
            type: "USER_LOGIN",
            payload: {
                logType: null,
                message: "please enter valid user pass"
            }
        };
    }
};

export const AdminLoginAction = (username, password) => {
    // we will send data to api here
    console.log(username, password);
    if(username === "test" && password === "123") {
        return {
            type: "ADMIN_LOGIN",
            payload: {
                logType: "admin"
            }
        };
    }
    else {
        return {
            type: "ADMIN_LOGIN",
            payload: {
                logType: null,
                message: "please enter valid user pass"
            }
        };
    }
};


export const PersonalLoginAction = (username, password) => {
    // we will send data to api here
    console.log(username, password, "action");
    if(username === "test" && password === "123") {
        return {
            type: "PERSONAL_LOGIN",
            payload: {
                logType: "personal"
            }
        };
    }
    else {
        return {
            type: "PERSONAL_LOGIN",
            payload: {
                logType: null,
                message: "please enter valid user pass"
            }
        };
    }
};
