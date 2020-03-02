/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 25.12.2019
 * Time: 13:30
 * About:
 *
 */

const toggleLanguage = val => dispatch =>{


    return      dispatch({
                            type: 'TOGGL_LANG',
                            payload:val
                        })

};

export default toggleLanguage;