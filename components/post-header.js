import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image-responsive'
import PostTitle from '../components/post-title'
import Link from "next/link"
import { Breadcrumbs } from '../components/Breadcrumbs'


export default function PostHeader({
  title,
  coverImage,
  date,
  excerpt,
}) 
{
  return (
    <>
      <div className="w-10/12 mx-auto">
      <div className="mb-10 hidden md:block ">
        <div class="flex items-center mt-10 ">
          <div class="flex-initial">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 12H3M3 12L10 5M3 12L10 19" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </div>
          <div class="flex-1 ml-3 align-middle ">
          <Breadcrumbs/>
          </div>
        </div>
      </div>
      <div className="">
        <div className="mb-2 text-xs">
          <DateFormatter dateString={date} />
        </div>
          <PostTitle>{title}</PostTitle>
        <div className="mb-5 md:mb-10 ">
          <p className="text-sm	pt-2 text-gray-500">{excerpt}</p>
        </div>
      </div>
      <div className="rounded-lg pb-8">
        <CoverImage title={title} src={coverImage} height={500} width={1000} />
      </div>
      </div>
    </>
  )
}
