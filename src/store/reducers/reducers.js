import initState from '../initState';



const reducers = (state = initState, action) => {

    const {type,payload} = action || false;

    switch (type) {

        case 'TOGGL_LANG':
            return {
                ...state,
                language:payload
            };

        case 'HELPERS':
            return {
                ...state,
                isLoading:false,
                helpers:{
                    ...state.helpers,
                    ...payload
                }
            };

        case 'FETCH_PAGES':
            return {
                ...state,
                isLoading:false,
                pages:{
                    ...state.pages,
                    ...payload
                }
            };

        case 'ISUPLOAD':
            return {
                ...state,
                isUpload:payload,
                isLoading:false,
            };


        case 'CLEAR_ERROR':
            return {
                ...state,
                errors:false,
            };

        case 'ADD_ERROR':
            return {
                ...state,
                errors:payload,
                isLoading:false,
            };

        case 'IS_LOADING':
            return {
                ...state,
                isLoading:!state.isLoading,
            };


        case 'TOGGLE_DARKMODE' :
            return {
                ...state,
                style:{
                    ...state.style,
                    darkMode: payload,
                }

            };

        default:
            return state
    }
};

export default reducers;