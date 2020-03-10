import React,{useState} from "react";


const Home = () => {

    const [count,setCount] = useState(0);

const handleClick = () =>{
    console.log('click',count);
        setCount(count + 1);
    };

    return (<>Home ${count}

        <button onClick={handleClick}>+</button></>);
};



export default Home;