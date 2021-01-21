import Image from 'next/image';
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import { motion } from 'framer-motion';

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.08,
      delay: 2
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease:easing}
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing

    }
  }
};

export default function apropos() {
  return (

    <Container>
          <Header>
            <motion.div 
              initial='initial' 
              animate='animate' 
              exit={{ opacity: 0 }}
            >    
            <div className="mt-5 sm:mt-10 w-full lg:w-9/12 mx-auto ">
              <motion.div variants={fadeInUp}>
                <h2 className="sm:text-5xl text-4xl md:text-6xl mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
                    À propos de moi 
                </h2>
                <h3 className="pt-2 pb-10 text-gray-400">
                    Si tu veux en savoir plus sur moi   
                </h3>
              </motion.div>
              <motion.div variants={stagger} class="w-full mw-auto sm:mt-10 mb-20 lg:mt-10 lg:mb-20">
                <div class="grid grid-cols-2 md:grid-cols-3 sm:gap-x-10 sm:gap-y-14 gap-x-5 gap-y-5 items-center text-center	 ">
                <motion.div variants={fadeInUp}>
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
                  </motion.div>
                  <motion.div variants={fadeInUp}>
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
                  </motion.div>
                  <motion.div variants={fadeInUp}>
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={97}
                    width={100}
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
                  </motion.div>
                  <motion.div variants={fadeInUp}>
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
                        À propos de fffmoi 
                    </h2>
                    <h3 className="text-smpt-2 sm:px-5 pt-2 text-gray-400">
                        Si tu veux en savoir plus sur moi   
                    </h3>
                  </motion.div>
                  <motion.div variants={fadeInUp}>
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
                  </motion.div>
                  <motion.div variants={fadeInUp}>
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
                  </motion.div>
                </div>
              </motion.div> 
              <div>
              </div>
              

            </div>
            <Footer/>
            </motion.div>
          </Header>
          
        </Container>

  )
}
