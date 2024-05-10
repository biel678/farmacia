import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  return (
    <>
        <div className="flex justify-center bg-gray-200 text-blue-600">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Loja de Jogos Generation | Copyright: Gabriel Tomarchio</p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <GithubLogo size={48} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer