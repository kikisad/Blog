import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostContainer from '../../components/container'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import Retour from '../../components/retour'
import { motion } from "framer-motion";





let easing = [0.6, -0.05, 0.01, 0.99];

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const fadeInUp = {
  initial: {
    y: 30,
    opacity: 0,
    transition: { duration: 0.6, ease:easing,delay: 0.8 }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
      delay: 0.8
    }
  }
};

const Divider = () => {
  return (
    <div className="border border-gray-200 w-1/2 my-8 mx-auto	" />
  );
};


export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <motion.div 
    key="6"
    initial='initial' 
    animate='animate' 
    exit={{ opacity: 0 }}
    variants={stagger} >    
    <Layout preview={preview}>
      <PostContainer>
        <Header>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="mx-auto w-full sm:w-9/12 ">
              <Head>

              <title>{post.title} | L'entrepreneuriat étudiant </title>
              <meta name="description" content={post.excerpt} />
              <meta name="title" content={post.title} />

              <meta property="og:title" content="{post.title}" />
              <meta property="og:url" content="https://blog.tailwindcss.com" />
              <meta property="og:type" content="article" />
              <meta property="og:description" content={post.excerpt} />
              <meta property="og:image" content={post.coverImage} />

              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@kikisad_" />
              <meta name="twitter:creator" content="@kikisad_" />
              <meta name="twitter:title" content={post.title} />
              <meta name="twitter:description" content={post.excerpt} />
              <meta name="twitter:image" content={post.coverImage} />

              </Head>
              <motion.div  key="5" variants={fadeInUp} >
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
              />
              </motion.div>
              <motion.div 
              key="2"
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.3,
                ease: easing,
              }} >
              <PostBody content={post.content} />
              </motion.div>
            </article>
          </>
        )}
        </Header>
        <Divider />

      </PostContainer>
    </Layout>
    </motion.div>

  )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'excerpt',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
