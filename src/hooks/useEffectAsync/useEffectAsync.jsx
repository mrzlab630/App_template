import { useEffect } from 'react';


/**
 * useEffectAsync(async () => {
 *   const items = await fetchSomeItems();
 *   console.log(items);
 * }, []);
 */




const  useEffectAsync = (effect, inputs) => {
    useEffect(() => {
        effect();
    }, inputs);
};


export default useEffectAsync;