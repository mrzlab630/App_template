/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 27.11.2019
 * Time: 9:29
 * About:
 *
 */
import {ApiServiceFretch} from '../../utilities';



const getPagesFromAPI = page => async dispatch => {
    try {

        if(!page){
            throw new Error('page id empty');
        }else{
            page = page.toLowerCase();

        }

        dispatch({
            type: 'IS_LOADING',
            payload: true
        });

    const getApiData = new ApiServiceFretch();
    const res =  await  getApiData.getPage(page);

    const {type,message} = res || false;



    if(type && type === 'error'){
        throw new Error(message);
    }


       const autRes = JSON.parse(res);

        return      dispatch({
                            type: 'FETCH_PAGES',
                            payload: autRes
                        });



    } catch (error) {

        dispatch({
            type: 'ADD_ERROR',
            payload: {
                id:parseInt(new Date().getTime()/1000),
                name:error.name,
                message:error.message}
        });

    }

};



export default getPagesFromAPI;