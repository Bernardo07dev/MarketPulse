import Menu from "../components/Menu.jsx";
import SideBar from "../components/SiderBar.jsx";

const ChartChat = () => {
    return(
        <main className="bg-[#111827] min-h-screen flex flex-col">
            <Menu />
            <div className="w-full flex flex-row flex-1">
                <section className="w-[18%] border-r border-white/10">
                    <SideBar />
                </section>

                <section className="w-[92%] p-8 bg-[#0F172A]">

                </section>

            </div>
        </main>
    )
}

export default ChartChat;