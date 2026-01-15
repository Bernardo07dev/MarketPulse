import bgImage from './assets/bg-login.png'
import user1 from './assets/ue1.png'
import user2 from './assets/ue2.png'
import user3 from './assets/ue3.png'
import LoginBox from './components/LoginBox.jsx'

const Login = () => {
   return(
      <main className="w-full h-screen flex flex-row">
        <section className="w-[45%] bg-cover bg-center h-screen" style={{ backgroundImage: `url(${bgImage})` }}>
            <div className='bg-black/60 w-full h-screen flex flex-col justify-between'>
                <div className='w-full flex items-start h-12 p-4'>
                    <img src="/logo.svg" className='w-[180px] brightness-[0.8] saturate-[0.6] hue-rotate-60' />
                </div>

                <div className='w-full text-gray-200 px-14 py-14 flex flex-col gap-4'>
                    <h1 className='text-2xl font-bold'>"Entenda o mercado de uma forma totalmente diferente"</h1>
                    <div>
                        <div className='flex flex-row items-center'>
                            <img className='w-10 h-10 rounded-full border-[3px] border-black' src={user1}></img>
                            <img className='w-10 h-10 rounded-full -ml-4 border-[3px] border-black' src={user2}></img>
                            <img className='w-10 h-10 rounded-full -ml-4 border-[3px] border-black' src={user3}></img>
                            <p className='ml-2 text-sm text-gray-400'>Usado por mais de 10.000 usuários</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className='w-[55%] h-screen bg-gradient-to-b from-[#131937] via-[#0b1325] to-[#0e102b] p-12 flex flex-col justify-center items-center'>
            <LoginBox />
        </section>
      </main>
   )

}

export default Login;