import { useEffect, useState } from "react";

// custom hooks must start with "use"
const useFetch = (url) =>
{
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);


      //useEffect is useful for running code that needs to run every single render
    //(can be used for things like fetching data)
    //the empty array ( [] ) makes it so it only runs the first initial render
    //adding a dependency within the array makes it so it looks for only that state changing to run the function

    useEffect(() => 
    {

        //can be associated with a fetch, to then be used to stop that fetch
        const abortCont = new AbortController();

        fetch(url, {signal: abortCont.signal})
        .then(res => {
            if(!res.ok)
            {
                throw Error('Could not fetch data for the requested resource');
            }
            return res.json();
        })
        .then((data) => {
            setData(data);
            setIsPending(false);
            setError(null);
        })
        .catch(err => 
        {
            if(err.name === 'AbortError')
            {
                console.log('fetch aborted');
            }
            else
            {
                setIsPending(false);
                setError(err.message);
            }
            
        })


        //aborts whatever fetch it's associated with
        return () => abortCont.abort();

    }, [url]);
    //whenver url changes it will re run the function to get the data for the endpoint

    return {data, isPending, error};
}

export default useFetch;