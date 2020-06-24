export const defaultStatus = {
    logType: null,
    message: null
};
const Reducer = (state= defaultStatus, action) => {
    switch (action.type) {
        case "USER_LOGIN" :
            return {
                ...state,
                logType: action.payload.logType,
                message: action.payload.message
            };
        case "ADMIN_LOGIN" :
            return {
                ...state,
                logType: action.payload.logType,
                message: action.payload.message
            };
        case "PERSONAL_LOGIN" :
            return {
                ...state,
                logType: action.payload.logType,
                message: action.payload.message
            };
        default:{
            return state;
        }
    }
};

export default Reducer;
