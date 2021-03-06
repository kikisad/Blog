import Image from 'next/image';
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
    transition: { duration: 0.6, ease:easing,delay: 0.6 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.6
    }
  }
};

export default function headertitre() {
  return (
    <motion.div variants={stagger} >
    <motion.div variants={fadeInUp} className="mt-5 sm:mt-20 lg:mt-16 ">
       <Image
        alt="Icon-article-design-blog-3D-2"
        className="rounded-lg mt-10 hoverimages"
        height={60}
        width={60}
        priority="true"
        quality="100"
        src={'/static/images/Icon-article-design-blog-3D-2.png'}
      />
    <motion.div variants={fadeInUp} >
    <h2 className="text-6xl sm:mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
        Articles
      </h2>
      <h3 className="pt-2 pb-10 text-gray-500">
        Découvret tous mes articles, sur l'entreprenariat étudiant    
      </h3>
      </motion.div>
    </motion.div>
    </motion.div>
  )
}
