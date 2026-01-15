import bgImage from './assets/bg-login.png'

const Login = () => {
   return(
      <main className="w-full h-screen flex flex-row">
        <div className="w-[50%] bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='bg-gradient-to-t from-black/90 via-black/40 to-black/30 w-full h-screen flex flex-col justify-between'>
                <div className='w-full flex items-start h-12 p-6'>
                    <img src="/logo.svg" className='w-[180px] brightness-[0.8] saturate-[0.6] hue-rotate-60' />
                </div>

                <div className='w-full text-white p-20'>
                    <h1 className='text-2xl font-bold'>"Entenda o mercado de uma forma totalmente diferente"</h1>
                </div>
            </div>
        </div>
      </main>
   )

}

export default Login;