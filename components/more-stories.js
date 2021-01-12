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
      <div class="flex flex-wrap pb-5 ">
        <div class="pb-5 xl:w-8/12">
          <div class="w-full">
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
        <div class=" pl-5">
              <div class=" mt-5 w-full p-5 border border-gray-200	 rounded-t-lg ">
                  <h3 class="text-2xl  leading-6 font-medium text-gray-900">
                    Mes musiques
                  </h3>
              </div> 
                <div class=''>
                <NowPlaying/>
                </div>
              <div class=" mt-5 w-full p-5 border border-gray-200	 rounded-t-lg ">
                  <h3 class="text-2xl leading-6 font-medium text-gray-900">
                    Dashboard
                  </h3>
              </div> 

              <div class="w-full p-5 border border-gray-200	border-t-0">
                <div class="">
                   <h4 class="text-lg leading-6 font-medium text-gray-500">
                     Ventes en ligne
                  </h4>
                  <h4 class="text-2xl pt-2  leading-6 font-medium text-black">
                     0€
                  </h4>
                </div>
              </div> 
              <div class="w-full p-5 border border-gray-200	border-t-0">
                <div class="">
                   <h4 class="text-lg leading-6 font-medium text-gray-500">
                     Projets
                  </h4>
                  <h4 class="text-2xl pt-2  leading-6 font-medium text-black">
                     1/12
                  </h4>
                </div>
              </div> 



            </div>  
        </div>
      </div>  
    </section>
  )
}




