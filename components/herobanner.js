import Image from 'next/image';
import CoverImage from '../components/cover-image'
import { motion } from "framer-motion";

let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.05
    }
  }
};

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease:easing }
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


export default function Herobanner() {
  return (
    <motion.div variants={stagger} >

      <div class="flex flex-wrap-reverse md:flex-nowrap">
        <motion.div variants={fadeInUp}  class="pl-5 lg:pl-8 w-full md:w-1/2">
          <h3 class="text-base font-medium text-gray-600 sm:pt-20 md:pt-18 xl:pt-32	pt-5" >
            Hi, je suis killian 🖐 ! 
            </h3>
          <br/>
          <h1 class="text-3xl sm:text-4xl md:text-xl lg:text-4xl font-black text-gray-600 pr-5 sm:pr-10">
            Étudiant Entrepreneur, j'aime 
            raconter mes aventures et
            expériance sur la réalisation
            de mes projets
          </h1>
          <br/>
          <motion.div variants={fadeInUp} class="flex " >
            <div class="flex-initial ...">
              <h2 class="text-sm	font-normal	 text-gray-600">
              Un petit blog, pour tenir mes objectifs ! 
              <br/>
            </h2>
            </div>
          </motion.div>
          <div class="flex flex-wrap pt-7 pb-20">
            <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: easing,
                  }}
            >
              <div class="mt-0 sm:mt-0  lg:mt-5  xl:mt-0 ">
              <button
                  aria-label="Lien vers mes articles"
                  type="button"
                  className="bg-gray-600 text-white font-black rounded p-5 mr-10 text-xs sm:text-xs	"
                >        
                Jette un œil à mes articles
              </button>
              </div>
            </motion.div>
            <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.99 }}
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ 
                    duration: 0.3,
                    ease: easing,
                  }} 
                  class="mt-5 sm:mt-0 md:mt-5 lg:mt-5  xl:mt-0 "
            >
              
              <button
                  aria-label="Lien vers le podcast"
                  type="button"
                  className="border border-gray-600 text-gray-600 font-black rounded p-4 sm:ml-8 md:ml-0 "
                >
                  <div class="flex items-center">
                    <div class="flex-initial pr-3">
                    <svg width="18" height="18" alt="Fleche-redirection" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3 12H21M21 12L14 5M21 12L14 19" stroke="#4B5563" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    </div>
                    <div class="flex-initial ">
                    Découvrir mon podcast 
                    </div>
                  </div>
              </button>

            </motion.div>
        </div>
        </motion.div>

        <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, }}  
                  class="sm:w-h-5/6 md:w-3/4 "
        >
        <Image
          alt="Illustration-laboratoir-numérique-idées"
          className="rounded-lg"
          height={650}
          width={800}
          priority="true"
          quality="100"
          src={'/static/images/Illustration-Imagination-laboratoire-blog.png'}
          />
        </motion.div>

    </div>
    </motion.div>
  )
}

