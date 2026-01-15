const LoginBox = () => {
    return(
        <div className="text-white w-[70%] p-12 py-16  bg-[#ffffff09] backdrop-blur-lg border border-white/10 rounded-lg shadow-2xl">
            <h1 className="text-3xl font-semibold text-center">Bem vindo de volta</h1>
            <p className=" text-sm text-gray-400 font-medium mb-4 text-center">Digite seus dados e faça login</p>
            <form className="flex flex-col">
                <p className="text-xs mb-1 text-gray-400 font-medium">E-mail</p>
                <input className="p-2 mb-4 bg-[#131B2E] border border-white/10 rounded-lg" type="email"></input>
                <p className="text-xs text-gray-400 font-medium">Senha</p>
                <input className="p-2 mb-4 bg-[#131B2E] border border-white/10 rounded-lg" type="password"></input>
                <button className="bg-[#6469F2] shadow-blue-600 p-2 my-2 mb-4 text-sm font-bold rounded-lg">Entrar</button>
                <p className="text-sm text-center text-gray-400 font-medium">Não tem conta? <span>Clique aqui e faça seu cadastro</span></p>
            </form>

        </div>
    )
}

export default LoginBox;