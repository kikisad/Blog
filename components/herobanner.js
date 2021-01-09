import Container from './container'
import { EXAMPLE_PATH } from '../lib/constants'
import Image from 'next/image';

export default function Footer() {
  return (
    <div className="bg-gray-50	h-5/6">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Je raconte ma vie
          </h3>
          <div className="flex flex-col lg:flex justify-center items-center lg:pl-4 lg:w-1/2">
            <div className=" sm:absolute tothetop bottom-2/4 left-2/4 h-80 W-96 ">
                <Image
                  alt="Images-Header-Laboratoire-idees-etudiant-entrepreneur"
                  className=""
                  height={400}
                  width={400}
                  src={'/static/images/PhotoHeader.png'}
                />
            </div>
          </div>
        </div>
      </Container>
      <div className="gradient"></div>
    </div>
  )
}
