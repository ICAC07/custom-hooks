import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
    });

    const getFetch = async() => {

        setState({
            ...state,
            isLoading: true,
            hasError: null,
        });

        var error = '';
        var data;
        try{
            console.log('Consultando : ' + url);
            const resp = await fetch(url);
            // var data = '';
            if(resp.status === 200){
                data = await resp.json();
            } else {
                data = null;
                // error = resp.statusText;
                error = resp.status + ' - ' + resp.statusText;
            }
        }catch(err){
            console.log(err);
            data = null;
            error = err;
        }

        // console.log(data);

        setState({
            data,
            isLoading: false,
            hasError: error,
        });
    }

    useEffect(() => {
        getFetch();
    }, [url])
    

    return {
        data:       state.data,
        isLoading:  state.isLoading,
        hasError:   state.hasError,
    }
}
