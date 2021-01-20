import Image from 'next/image';
import CoverImage from '../components/cover-image'
import Retour from '../components/retour'


export default function Herobanner() {
  return (
    <div>
      <div class="flex flex-wrap-reverse sm:flex-nowrap">
        <div class="pl-5 lg:pl-8 w-full sm:w-1/2">
          <h3 class="text-base font-medium text-gray-600 sm:pt-32 md:pt-10 xl:pt-32	pt-5" >
            Hi, je suis killian 🖐 ! 
            </h3>
          <br/>
          <h1 class="text-3xl sm:text-4xl md:text-xl lg:text-4xl  font-black text-gray-600 pr-5 sm:pr-10 ">
            Étudiant Entrepreneur, j'aime 
            raconter mes aventures et
            expériance sur la réalisation
            de mes projets
          </h1>
          <br/>
          <div class="flex " >
            <div class="flex-initial ...">
              <h2 class="text-sm	font-normal	 text-gray-600">
              Un petit blog, pour tenir mes objectifs ! 
              <br/>
            </h2>
            </div>
          </div>
          <div class="flex flex-wrap pt-7 pb-20">
            <div>
            <button
                aria-label="Lien vers mes articles"
                type="button"
                className="bg-gray-600 text-white font-black rounded p-5 mr-10 text-xs sm:text-xs	"
              >        
              Jette un œil à mes articles
            </button>
            </div>
            <div class="mt-5 sm:mt-0 md:mt-5 lg:mt-5 md:hidden xl:block xl:mt-0 ">
              
              <button
                  aria-label="Lien vers le podcast"
                  type="button"
                  className="border border-gray-600	 text-gray-600 sm:text-xs font-black rounded p-5 sm:ml-8 md:ml-0 "
                >
                  <div class="flex items-center gradient-btn ">
                    <div class="flex-initial pr-3">
                    <svg width="18" height="18" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#4B5563" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </div>
                    <div class="flex-initial ">
                    Découvrir mon podcast 
                    </div>
                  </div>
              </button>

            </div>
        </div>
        </div>

        <div class="sm:w-h-5/6 md:w-3/4 ">
        <Image
          alt="Illustration-laboratoir-numérique-idées"
          className="rounded-lg"
          height={650}
          width={800}
          priority="true"
          quality="100"
          src={'/static/images/Illustration-Imagination-laboratoire-blog.png'}
          />
        </div>

    </div>
    </div>
  )
}

