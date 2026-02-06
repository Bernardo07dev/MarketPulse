import Menu from "../components/Menu.jsx";
import SideBar from "../components/SiderBar.jsx";
import StockSection from "../components/Stock.jsx";
import Chart from "../components/Chart.jsx";

const Home = () => {
    const STOCKS = [
        "PETR4", "VALE3", "ITUB4", "ABEV3", "BBDC4", "BBAS3",
        "AAPL", "TSLA"
        ];

    return (
        <main className="bg-[#111827] min-h-screen flex flex-col">
            <Menu />
            <div className="w-full flex flex-row flex-1">
                <section className="w-[18%] border-r border-white/10">
                    <SideBar />
                </section>

                <section className="w-[92%] p-8 bg-[#0F172A]">
                    <div className="flex flex-row gap-4 flex-wrap">
                    {STOCKS.map((s, index) => (
                        <StockSection key={index} stock={s} />
                    ))}
                    </div>

                    <Chart />
                </section>

            </div>
        </main>
    )
}

export default Home;