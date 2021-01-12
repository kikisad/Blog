import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-gray-50	w-full">
      
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 ">
            Je raconte ma vie
          </h3>
          <div className="flex flex-col lg:flex justify-center items-center w-full ">
            <div className="  ">
            </div>
          </div>
        </div>
      </Container>
      <div className="gradient"></div>
    </div>
  )
}
