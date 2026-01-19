const LoginBox = () => {
    return(
        <div className="text-white w-[70%] p-12 pt-10 pb-14 bg-[#9797970f] backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl shadow-black flex flex-col items-center">
            <img src="/logo2.png" className='w-[100px] brightness-[1] saturate-[1] hue-rotate-60 -mb-1' />
            <h1 className="text-3xl font-bold tracking-tight text-gray-300 text-center mb-1">Bem vindo de volta</h1>
            <p className=" text-sm text-gray-400 font-semibold mb-4 text-center">Digite seus dados e faça login na platforma</p>
            <form className="flex flex-col w-full">
                <p className="text-sm mb-1 text-gray-500 font-semibold">E-mail</p>
                <input className="p-3 focus:outline focus:outline-white/40 mb-4 bg-black/10 border border-white/20 rounded-lg" type="email"></input>
                <p className="text-sm text-gray-500 font-semibold">Senha</p>
                <input className="p-3 mb-4 focus:outline focus:outline-white/40 bg-black/10 border border-white/20 rounded-lg" type="password"></input>
                <button className="bg-[#6469F2] shadow-xl shadow-[#404cd16a] p-3 my-2 mb-4 text-sm font-bold rounded-lg">Entrar</button>
                <p className="text-sm text-center text-gray-400 font-medium">Não tem conta? <span>Clique aqui e faça seu cadastro</span></p>
            </form>

        </div>
    )
}

export default LoginBox;