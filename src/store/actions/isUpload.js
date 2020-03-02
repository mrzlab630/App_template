/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 23.12.2019
 * Time: 16:17
 * About:
 *
 */

const isUpload = val => dispatch =>{


    return      dispatch({
                            type: 'ISUPLOAD',
                            payload:val
                        })

};


export default isUpload;