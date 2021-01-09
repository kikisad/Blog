import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Container from '../../components/container'
import PostBody from '../../components/post-body'
import Header from '../../components/header'
import PostContainer from '../../components/container'
import PostHeader from '../../components/post-header'
import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts } from '../../lib/api'
import PostTitle from '../../components/post-title'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post({ post, morePosts, preview }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Layout preview={preview}>
      <PostContainer>
        <Header>
        {router.isFallback ? (
          <PostTitle>Loading…</PostTitle>
        ) : (
          <>
            <article className="">
              <Head>
              <meta name="twitter:card" content="summary_large_image" />
              <meta name="twitter:site" content="@kikisad_" />
              <meta name="twitter:creator" content="@kikisad_" />
              <meta name="twitter:title" content={post.title} />
              <meta name="twitter:description" content={post.excerpt} />
              <meta name="twitter:image" content={post.coverImage} />
              <meta property="og:url" content="https://blog.tailwindcss.com" />
              <meta property="og:type" content="article" />
              <meta property="og:description" content={post.excerpt} />
              <meta property="og:image" content={post.coverImage} />
              <title>{post.title} | L'entreprenariat étudiant</title>
              <meta name="description" content={post.excerpt} />
              </Head>
              <PostHeader
                title={post.title}
                coverImage={post.coverImage}
                date={post.date}
                author={post.author}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
        </Header>
      </PostContainer>
    </Layout>
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
