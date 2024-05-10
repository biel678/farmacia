import homeLogo from '../assets/img/Home.jpeg'

function Home() {
    return (
        <>
            <div className="bg-gray-100 flex justify-center">
                <div className='container grid grid-cols-2 text-blue-600'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold ml-28 '>Seja bem vinde a Farmacia.tsx!</h2>
                        <p className='text-xl'>Sua farmacia online feita pensando em você!</p>
                        <div className="flex justify-around gap-4">
                            <button className='rounded bg-white text-blue-600 py-2 px-4'>Ver categorias de produtos</button>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img src={homeLogo} className='max-w-screen-xl' alt="" />

                    </div>
                </div>
            </div>

        </>
    )
}

export default Home;