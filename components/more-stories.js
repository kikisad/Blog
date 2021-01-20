import PostPreview from '../components/post-preview'
import NowPlaying from '../components/NowPlaying'
import Image from 'next/image';


export default function MoreStories({ posts }) {
  return (
    <section>
      <div class="sm:flex sm:flex-wrap pb-5 ">
        <div class="pb-5 lg:w-8/12">
          <div class="w-full cursor-pointer">
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
        <div class="sm:w-2/4	flex-1 lg:ml-5 rounded-xl">
        <div class="">
              <div class=" w-full p-5 shadow rounded-t-lg ">
                  <h3 class="text-2xl  leading-6 font-medium text-gray-900">
                    Mes musiques
                  </h3>
              </div> 
                <div class=''>
                <NowPlaying/>
                </div>
              <div class=" mt-5 w-full p-5  shadow	 rounded-t-lg ">
                  <h3 class="text-2xl leading-6 font-medium text-gray-900">
                    Dashboard
                  </h3>
              </div> 
              <div class="w-full p-5  border border-gray-200 border-t-0">
                <div class="flex flex-wrap justify-between	">
                  <div class="">
                    <h4 class="text-lg leading-6 font-medium text-gray-500">
                      Ventes en ligne
                    </h4>
                    <h4 class="text-2xl pt-2  leading-6 font-medium text-black">
                      0€
                    </h4>
                  </div>
                  <div class="place-content-end	">
                  <Image
                    alt="Icon-article-design-blog-3D-2"
                    className="rounded-lg mt-10 "
                    height={60}
                    width={60}
                    priority="true"
                    quality="100"
                    src={'/static/images/Icon-Argent-Blog-Vente-En-Ligne.png'}
                    />
                  </div>
                </div>
              </div> 
            </div>  
        </div>
      </div>  
    </section>
  )
}




