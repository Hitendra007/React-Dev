import { useEffect, useState, UseState } from "react";
function useCurrencyInfo(currency) {
    const [data,setData]=useState({})
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => {
            setData(res[currency]);
            console.log(data); // Log the updated data here
        });
    }, [currency]);
return data
}

export default useCurrencyInfo;