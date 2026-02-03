import Menu from "../components/Menu.jsx";
import SideBar from "../components/SiderBar.jsx";

const Home = () => {
    return (
        <main className="bg-[#111827] min-h-screen flex flex-col">
            <Menu />
            <section className="w-[18%] flex-1 border-r border-white/10">
                <SideBar />

            </section>
        </main>
    )
}

export default Home;