import PostPreview from '../components/post-preview'
import NowPlaying from '../components/NowPlaying'

export default function MoreStories({ posts }) {
  return (
    <section>
      <h2 className="text-6xl mt-10 md:text-7xl font-bold tracking-tighter leading-tight">
        Articles
      </h2>
      <h3 className="pt-5 pb-5 text-gray-400">
        Découvret tous mes articles, sur l'entreprenariat étudiant    
      </h3>
      <div class="flex flex-wrap pb-5">
        <div class="pb-5 xl:w-8/12">
          <div class="w-8/12 rounded-md w-full">
              {posts.map((post) => (
                <PostPreview
                  key={post.slug}
                  title={post.title}
                  coverImage={post.coverImage}
                  date={post.date}
                  tag={post.tag}
                  slug={post.slug}
                  excerpt={post.excerpt}
                />
              ))}
            </div>
          </div>
        <div class="w-2/4	flex-1 rounded-xl">
        <div class=" ">
                <div class='sm:pt-5	'>
                <NowPlaying/>
                </div>
              <div class="">
                <h3 id="course-overview"class="text-2xl pb-2 leading-6 font-medium text-gray-900">
                  Dashboard
                </h3>
                <p class="ext-x max-w-2xl text-sm text-gray-500">
                  Statistique personnel pour suivre mes projets 
                </p>
              </div>
              <div class=" mt-5 bg-green-200 rounded-lg ">
              <div class="flex">
              </div>
              </div>        
            </div>  
        </div>
      </div>  
    </section>
  )
}




