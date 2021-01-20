import Image from 'next/image';

export default function headertitre() {
  return (
    <div className="mt-5 sm:mt-20 lg:mt-16 ">
       <Image
        alt="Icon-article-design-blog-3D-2"
        className="rounded-lg mt-10 hoverimages"
        height={60}
        width={60}
        priority="true"
        quality="100"
        src={'/static/images/Icon-article-design-blog-3D-2.png'}
      />
    <h2 className="text-6xl sm:mt-5 md:text-7xl font-bold tracking-tighter leading-tight">
        Articles
      </h2>
      <h3 className="pt-2 pb-10 text-gray-500">
        Découvret tous mes articles, sur l'entreprenariat étudiant    
      </h3>
    </div>
  )
}
