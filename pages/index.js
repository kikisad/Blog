import Container from '../components/container'
import MoreStories from '../components/more-stories'
import Header from '../components/header'
import HeroBanner from '../components/herobanner'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Head from 'next/head'

export default function Index({ allPosts }) {
  const morePosts = allPosts.slice(0)
  return (
    <>
      <Layout>
        <Head>
          <title>L'entreprenariat étudiant par killian </title>
        </Head>
        <HeroBanner />
        <Container>
          <Header>
            <MoreStories posts={morePosts} />
          </Header>
        </Container>
      </Layout>
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
