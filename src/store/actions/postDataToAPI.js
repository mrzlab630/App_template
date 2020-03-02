/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 23.12.2019
 * Time: 16:36
 * About:
 *
 */
import {ApiServiceFretch} from '../../utilities';



const postDataToAPI = (action,data) => async dispatch => {

    try {

        if(!data){
            throw new Error('data empty');
        }

           dispatch({
                    type: 'IS_LOADING',
                    payload: true
                });

        const getApiData = new ApiServiceFretch();
        const res =  await  getApiData.postData(action,data);

        const {type,message} = res || false;

        if(type && type === 'error'){
            throw new Error(message);
        }


        const autRes = JSON.parse(res);

        return      dispatch({
                                type: 'ISUPLOAD',
                                payload: autRes
                            });


    }catch (error) {
        dispatch({
            type: 'ADD_ERROR',
            payload: {
                id:parseInt(new Date().getTime()/1000),
                name:error.name,
                message:error.message}
        });
    }



};



export default postDataToAPI;