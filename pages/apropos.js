import Image from 'next/image';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'



export default function apropos() {
  return (

    <Container>
          <Header>
            <div className="mt-5 sm:mt-10 w-full lg:w-9/12 mx-auto ">
              <div>
                <h2 className="sm:text-5xl text-4xl md:text-6xl mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
                    À propos de moi 
                </h2>
                <h3 className="pt-2 pb-10 text-gray-400">
                    Si tu veux en savoir plus sur moi   
                </h3>
              </div>
              <div class="w-full mw-auto sm:mt-10 mb-20 lg:mt-20 lg:mb-20">
                <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-x-10 sm:gap-y-14 gap-x-5 gap-y-5 items-center text-center	 ">
                <div>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={103}
                    width={107}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-recherche.png'}

                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        À propos de moi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </div>
                  <div>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={103}
                    width={107}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-Elastique.png'}

                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        À propos de moi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </div>
                  <div>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={97}
                    width={112}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-message-Vert.png'}
                    />
                    <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        À propos de moi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </div>
                  <div>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={103}
                    width={107}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-article-design-blog-3D-Conique.png'}
                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        À propos de moi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </div>
                  <div>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={103}
                    width={107}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-bousole.png'}
                    />
                    <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        À propos de moi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </div>
                  <div>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={103}
                    width={107}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Apropos-De-moi-design-blog-3D-Connexion.png'}
                    />
                     <h2 className="text-base mt-5 font-bold tracking-tighter leading-tight">
                        À propos de moi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </div>
                </div>
              </div> 
              <div>
              </div>
              

            </div>
            <Footer/>
          </Header>
          
        </Container>

  )
}
