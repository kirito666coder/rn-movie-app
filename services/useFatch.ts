import { useEffect, useState } from "react";

const useFatch = <T>(fetchFunction:()=> Promise<T>,autoFetch = true)=>{
    const [data, setdata] = useState<T | null>(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState<Error | null>(null);
    
    const fetchData = async ()=>{
        try {
            setloading(true)
            seterror(null)
            const result = await fetchFunction();
            setdata(result)
        } catch (err) {
            // @ts-ignore
            seterror(err instanceof Error? err: new Error("An Error occurred"))
        } finally{
            setloading(false)
        }
    }
    const reset = ()=>{
        setdata(null)
        setloading(false)
        seterror(null)
    }

    useEffect(()=>{
        if(autoFetch){
            fetchData();
        }
    },[])

    return {data, loading,error,refetch: fetchData,reset}
}

export default useFatch;