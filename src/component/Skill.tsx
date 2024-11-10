import React from 'react'
import python from '../../public/python.svg'
import js from '../../public/javascript.svg'
import ts from '../../public/typescript.svg'
import next from '../../public/next js.svg'
import html from '../../public/html.svg'
import css from '../../public/css.svg'
import react from '../../public/react.svg'
import portfolio from '../../public/portfolio.png'
import Image from 'next/image'



const Skill = () => {
  return (
    <div>
    
    <div className="py-8 px-24">
  <div className="text-center mb-6">
    <h1 className="text-4xl font-bold">Expertise</h1>
    <p className="mt-5">Here is Some Of My Skills and expertise</p>
  </div>
  <div className="flex flex-wrap justify-between items-center gap-2">
    <Image src={python} alt="python" className="m-5 w-24 h-24 object-contain" />
    <Image src={js} alt="javascript" className="m-5 w-24 h-24 object-contain" />
    <Image src={ts} alt="typescript" className="m-5 w-24 h-24 object-contain" />
    <Image src={next} alt="nextjs" className="m-5 w-24 h-24 object-contain" />
    <Image src={html} alt="html" className="m-5 w-24 h-24 object-contain" />
    <Image src={react} alt="react" className="m-5 w-24 h-24 object-contain" />
    <Image src={css} alt="css" className="m-5 w-24 h-24 object-contain" />
  </div>
</div>

{/* <div className="py-8 px-24">
  <div className="flex flex-wrap gap-5 justify-evenly items-center">
    <div>
      <Image src={portfolioImage1} alt="Portfolio 1" className="mt-5 w-96 h-72 object-cover" />
      <p className="mt-2 mb-2 cursor-pointer">Project 1</p>
    </div>
    <div>
      <Image src={portfolioImage2} alt="Portfolio 2" className="mt-5 w-96 h-72 object-cover" />
      <p className="mt-2 mb-2 cursor-pointer">Project 2</p>
    </div>
    <div>
      <Image src={portfolioImage3} alt="Portfolio 3" className="mt-5 w-96 h-72 object-cover" />
      <p className="mt-2 mb-2 cursor-pointer">Project 3</p>
    </div> */}
  {/* </div> */}
</div>


  )
}

export default Skill