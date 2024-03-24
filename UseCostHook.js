import {useEffect} from 'react'

function UseCostHook(count) {
    useEffect(()=>{
        document.title =  `count = ${count}`   
       }, [count])
}

export default UseCostHook