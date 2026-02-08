import Menu from "../components/Menu.jsx";
import SideBar from "../components/SiderBar.jsx";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Chart from "../components/Chart.jsx";

const ChartChat = () => {
    const { ticker }= useParams();
    const [StockData, SetStockData] = useState([])
    const [Red_Green, SetRed_Green] = useState(true)
    const API_KEY = import.meta.env.VITE_API_KEY;
    const API_URL = `https://brapi.dev/api/quote/${ticker}`;
    const formatMarketCap = (value) => {
        if (typeof value !== 'number') return '--';

        if (value >= 1e12) return `${(value / 1e12).toFixed(2)} tri`;
        if (value >= 1e9) return `${(value / 1e9).toFixed(2)} bi`;
        if (value >= 1e6) return `${(value / 1e6).toFixed(2)} mi`;

        return value.toString();
    };

    const positive_negative = (value) => {
        if (Number(value) < 0) {
            SetRed_Green(false)
        }
    }

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
                positive_negative(response.data.results[0].regularMarketChangePercent)
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

                                <div className="flex flex-col gap-1 font-financas items-end">
                                    <h1 className="font-semibold text-2xl">{StockData.regularMarketPrice} R$</h1>
                                    {Red_Green ? (
                                        <p className="text-xs p-1 px-2 bg-green-800/30 text-green-500 rounded-lg w-fit">+{StockData.regularMarketChangePercent}%</p>
                                    ) : (<p className="text-xs p-1 px-2 bg-red-800/30 text-red-500 rounded-lg w-fit">{StockData.regularMarketChangePercent}%</p>)}
                                </div>
                            </div>

                            <div className="w-[100%] mb-8">
                                <Chart ticker={ticker} />
                            </div>


                            <div className="grid grid-cols-2 gap-4 w-full font-financas">
                                <div className="bg-[#6469F2]/5 border border-[#6469F2]/5 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-gray-200 mb-1">P/L (Price / Earnings)</p>
                                    <p className="text-xl font-semibold text-white">{StockData?.priceEarnings?.toFixed(2) || '--'}</p>
                                </div>
                                <div className="bg-[#6469F2]/5 border border-[#6469F2]/10 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-gray-200 mb-1">Lucro por Ação</p>
                                    <p className="text-xl font-semibold text-white">{StockData?.earningsPerShare?.toFixed(2) || '--'}</p>
                                </div>
                                <div className="bg-[#6469F2]/5 border border-[#6469F2]/10 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-gray-200 mb-1">Moeda</p>
                                    <p className="text-xl font-semibold text-white">{StockData?.currency || '--'}</p>
                                </div>
                                <div className="bg-[#6469F2]/5 border border-[#6469F2]/10 rounded-xl p-4 hover:scale-105 transition-transform duration-300">
                                    <p className="text-xs text-gray-200 mb-1">Valor de Mercado</p>
                                    <p className="text-xl font-semibold text-white">{formatMarketCap(StockData?.marketCap)}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </main>
    )
}

export default ChartChat;