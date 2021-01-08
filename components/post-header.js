import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from '../components/cover-image'
import PostTitle from '../components/post-title'

export default function PostHeader({ title, coverImage, excerpt, date, author }) {
  return (
    <>
      <div className="w-3/5">
        <PostTitle>{title}</PostTitle>
        <div className="hidden md:block md:mb-12">
        {excerpt}
        </div>
        <div className="mb-8 rounded-lg md:mb-16 sm:mx-0">
          <CoverImage title={title} src={coverImage} height={620} width={400} />
        </div>
        <div className="max-w-2xl mx-auto">
          <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
      </div>
    </>
  )
}
