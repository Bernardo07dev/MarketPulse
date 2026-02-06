import Menu from "../components/Menu.jsx";
import SideBar from "../components/SiderBar.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "../components/Chart.jsx";

const ChartChat = () => {
    const { ticker }= useParams();
    const [StockData, SetStockData] = useState([])
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://brapi.dev/api/quote/${ticker}`;

    useEffect(() => {
        const FetchData = async() => {
            try{
                const response = await axios.get(API_URL, {
                    params: {
                        token: API_KEY,
                        modules: 'summaryProfile',
                        fundamental: true,
                        dividends: true
                    }
                })
                SetStockData(response.data.results[0] || None)
                console.log(response.data.results[0] || None)
            } catch (error){
                console.error(error)
            }
        }; FetchData();
    }, [])

    const link = `https://icons.brapi.dev/icons/${ticker}.svg`;


    return(
        <main className="bg-[#111827] min-h-screen flex flex-col">
            <Menu />
            <div className="w-full flex flex-row flex-1">
                <section className="w-[18%] border-r border-white/10">
                    <SideBar />
                </section>

                <section className="w-[92%] p-8 bg-[#0F172A] text-white">
                    {/* Secção Sobre Stock */}
                    <div className="w-[45%] p-6">
                        <div className="bg-[#161E2E] rounded-lg flex flex-col items-center p-10">
                            <div className="flex justify-between w-full mb-8">
                                <div className="flex flex-row gap-2">
                                    <img className="w-10 h-9 rounded-lg" src={link}></img>
                                    <div className="flex flex-col">
                                        <h1 className="font-financas font-semibold">{ticker}</h1>
                                        <p className="text-xs text-gray-300 ">{StockData.longName}</p>
                                    </div>
                                </div>

                                <div className="flex flex-row gap-2">
                                    <h1 className="font-financas font-semibold text-2xl">{StockData.regularMarketPrice} R$</h1>
                                </div>
                            </div>

                            <div className="w-[100%]">
                                <Chart />
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default ChartChat;