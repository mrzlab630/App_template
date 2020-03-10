/**
 *
 * by mrZ
 * Email: mrZ@mrZLab630pw
 * Date: 11.12.2019
 * Time: 13:44
 * About:
 *
 */


const toggleDarkMode = status => dispatch =>{

    localStorage.setItem('darkMode', status);

    if(status){
        document.body.classList.remove('day-mode');
        document.body.classList.add('dark-mode');
    }else{
        document.body.classList.remove('dark-mode');
        document.body.classList.add('day-mode');
    }


    return      dispatch({
                            type: 'TOGGLE_DARKMODE',
                            payload:status
                        })

};


export default toggleDarkMode;