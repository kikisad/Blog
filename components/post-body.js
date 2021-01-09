import markdownStyles from './markdown-styles.module.css'

export default function PostBody({ content }) {
  return (
    <div>
      <div
        className={markdownStyles['markdown'],"prose prose-lg text-left font-normal text-lg leading-7	w-10/12 mx-auto		"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      </div>
  )
}
