import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroBanner from '../components/herobanner'
import Headertitre from '../components/headertitre'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import { motion } from "framer-motion";



export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <motion.div 
      key="modal"
      initial='initial' 
      animate='animate' 
      exit={{ opacity: 0 }}
      >
      <Layout>
          <Head/>
          <HeroBanner />
          <Container>
            <Header>
              <Headertitre/>
              <MoreStories posts={morePosts} />
            </Header>
          </Container>
      </Layout>
      </motion.div>
    </>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'tag',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
