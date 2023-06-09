import React, { useState } from 'react'

const Subscribe = () => {
    const [ email, setEmail ] = useState("")
  return (
    <div className='w-full bg-[#003049] md:h-[374px] flex justify-center items-center p-5 py-[32px]' >
        <div className='text-center md:w-3/5 text-white' >
            <h1 className='font-bold text-[24px] leading-[28.8px] md:text-[48px] md:leading-[57.6px]' >Subscribe to our Mailing List</h1>
            <p className='text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] py-5' >Subscribe to the Football Previews mailing list for free to get weekly previews and updates on the biggest matches in your mail</p>
            <div className='flex md:flex-row flex-col md:justify-center items-center pt-[48px] md:pt-10' >
                <div className='w-full md:w-[400px]' >
                    <input value={email} onChange={(e)=> setEmail(e.target.value)} placeholder='Enter your email' className='text-[#003049] placeholder:text-[#A6AFB4] placeholder:text-[16px] placeholder:leading-[24px] w-full md:h-[56px] h-[48px] outline-none rounded-[4px] p-4' />
                </div>
                <button className='mt-2 md:mt-0 md:ml-3 text-white bg-[#F77F00] font-semibold text-[16px] leading-[24px] rounded-[4px] md:h-[56px] w-[170px] h-[48px] hover:text-[#F77F00] hover:border hover:border-[#F77F00] hover:bg-transparent' >Subscribe for free</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe