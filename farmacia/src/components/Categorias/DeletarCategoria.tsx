import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import Categoria from '../../model/Categoria'
import { buscar, deletar } from '../../services/Service'
import { toastAlerta } from '../toastAlert'

function DeletarCategoria() {
    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

    let navigate = useNavigate()

    const { id } = useParams<{ id: string }>()

    async function buscarPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria, { headers: {Authorization: true} })        
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    function retornar() {
        navigate("/categorias")
    }

    async function DeletarCategoria() {
        try{
       await deletar(`/categorias/${id}`, { headers: {Authorization: true} })

       toastAlerta('Categoria apagado com sucesso','info')

        retornar()
        }
        catch (error:any){
            console.log(error);
            toastAlerta('Falha ao deletar','info');
        }
    }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>

            <p className='text-center font-semibold mb-4'>Você tem certeza de que deseja apagar a categoria a seguir?</p>

            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header className='py-2 px-6 bg-black text-white font-bold text-2xl'>{categoria.nome}</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button className='text-slate-100 bg-blue-600 hover:bg-blue-900 w-full py-2' onClick={retornar}>Não</button>
                    <button className='w-full text-slate-100  bg-red-600 hover:bg-red-800 flex items-center justify-center' onClick={DeletarCategoria}>
                        Sim
                    </button>
                </div>
            </div>
        </div>
    )
}

export default DeletarCategoria;