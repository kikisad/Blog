
import MoreStories from '../components/more-stories'
import PostPreview from '../components/post-preview'
import Layout from '../components/layout'
import { getAllPosts } from '../lib/api'
import Link from 'next/link'

export default function Blog({ allPosts }) {
  return (
    <>
      <Layout>
      <div className="flex flex-col justify-center items-start max-w-2xl mx-auto mb-16">
            <div class="flex mt-10">
              <div class="flex-initial">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
              </div>
              <div class="flex-1 ml-3 align-middle">
              <Link
                    href={{
                      pathname: "/",
                    }}
                  >
                <a>Acceuil </a>
              </Link>
              </div>
            </div>
            <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
              Tous les articles disponible. 
            </h1>
            <div>
                      
            </div>
            <MoreStories posts={allPosts} />

          </div>          
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
