import { useEffect, useState } from "react";
import axios from "axios";

const Stock = (props) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = 'https://brapi.dev/api/quote/list';
    const [StockData, SetStockData] = useState([])
    const [Red_Green, SetRed_Green] = useState(true)

    const positive_negative = (value) => {
        if (Number(value) < 0){
            SetRed_Green(false)
        }
    }

    useEffect(() => {
        const FetchData = async() => {
            try{
                const response = await axios.get(API_URL, {
                    params: {
                        search: props.stock,
                        token: API_KEY
                    }
                })
                SetStockData(response.data.stocks[0] || None)
                positive_negative(response.data.stocks[0].change)
            } catch (error){
                console.error(error)
            }
        }; FetchData();
    }, [])

    return(
        <section className="flex w-[24%] cursor-pointer bg-[#1E293B]/50 border border-white/10 p-6 text-white rounded-lg items-start justify-between">
            <div className="flex flex-col justify-start items-start gap-2">
                <p className="text-xs p-2 bg-white/10 rounded-lg w-fit">{StockData.sector}</p>
                <h1 className="font-medium text-gray-300 font-financas ml-1">{props.stock}</h1>
            </div>
            <div className="flex flex-col justify-start items-start font-financas gap-1">
                <p className="text-3xl font-bold text-gray-100 pr-2">{StockData.close}</p>
                {Red_Green ? (
                    <p className="text-xs p-1 px-2 bg-green-800/30 text-green-500 rounded-lg w-fit">{StockData.change}</p>
                ) : (<p className="text-xs p-1 px-2 bg-red-800/30 text-red-500 rounded-lg w-fit">{StockData.change}</p>)}
            </div>
        </section>
    )
}

export default Stock;