const initialState = {
    user: {
        name: null,
        pictures: []
    },
    token: null,
    isReloaded: false,
    resetUser:null
}
export const userReducer = (state = initialState ,action) => {
    switch (action.type) {
        case "USER":
        return {...state,
        user: action.user,
        token:action.token,
        isReloaded: true
    };
        case "UPDATE_TOKEN":
            console.log(action.token);
        return {
            ...state,
            token: action.token
        }
        case "LOGOUT":
            return{
                user: {
                    name: null,
                    pictures: []
                },
                token: null

            }

        case "UPDATE_RESET_USER":
            return{
                ...state,
                resetUser:action.user
            }
            
        case "REMOVE_RESET_USER":
            return{
                ...state,
                resetUser: null
            }

        case "SET_RELOAD":
            return {
                ...state,
                isReloaded: false
            }

        default:
            
            return state;
    }
    
}