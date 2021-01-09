export default function PostTitle({ children }) {
  return (
    <h1 className="text-5xl md:text-4xl lg:text-6xl text-gray-800	 font-bold tracking-tighter leading-tight md:leading-none text-center md:text-left">
      {children}
    </h1>
  )
}
