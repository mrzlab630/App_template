/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 26.12.2019
 * Time: 14:39
 * About: load helpers json
 *
 */
import {ApiServiceFretch} from '../../utilities';


const getHelpersFromAPI = name => async dispatch =>{
    
    try {

        if(!name){
            throw new Error('name empty');
        }else{
            name = name.toLowerCase();
        }

       const helpersSession = sessionStorage.getItem('helpers');
//sessionStorage.setItem('test', 1);

        if(helpersSession){
          return      dispatch({
                                    type: 'HELPERS',
                                    payload: JSON.parse(helpersSession)
                                });
        }

        dispatch({
            type: 'IS_LOADING',
            payload: true
        });

        const getApiData = new ApiServiceFretch();
        const res =  await  getApiData.getPage(name);

        const {type,message} = res || false;



        if(type && type === 'error'){
            throw new Error(message);
        }


        const autRes = JSON.parse(res);

        return      dispatch({
            type: 'HELPERS',
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


export default getHelpersFromAPI;