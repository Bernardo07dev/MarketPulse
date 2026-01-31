const Menu = () => {
    return (
        <header className="w-full h-20 bg-[#111827] flex items-center justify-between px-10 border-b border-white/10">
            <div className="flex items-center gap-3">
                <img src="/logo.svg" alt="Invest Track"className="w-[150px] saturate-[0.6] hue-rotate-60" />
            </div>


            <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gray-800 border border-gray-700"></div>
            </div>
        </header>
    )
}

export default Menu;