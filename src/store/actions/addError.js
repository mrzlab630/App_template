/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 23.12.2019
 * Time: 13:42
 * About:
 *
 */

const addError = val => dispatch =>{


    return      dispatch({
        type: 'ADD_ERROR',
        payload:val
    })

};


export default addError;