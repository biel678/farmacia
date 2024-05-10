import { GithubLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {

  return (
    <>
      <div className="flex justify-center bg-gray-200 text-blue-600">
        <div className="container flex flex-col items-center py-4">
          <p className='text-xl font-bold'>Farmacia.tsx | Copyright: Gabriel Tomarchio</p>
          <p className='text-lg'>Acesse nossas redes sociais</p>
          <div className='flex gap-2'>
            <a href='https://www.linkedin.com/in/bieltomarchio/' target="_blank">
              <LinkedinLogo size={48} weight='bold' />
            </a>
            <a href='https://github.com/biel678/' target="_blank">
              <GithubLogo size={48} weight='bold' />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer