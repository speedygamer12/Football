import React from 'react'

const NavTab = ({tabHeaders, setTab, tab}) => {
  return (
    <div className='pt-5 h-full border-b-[1px] border-[#A6AFB4] flex' >
        <ul className='flex -mb-px overflow-x-auto' >
            {
                tabHeaders?.map((header, index) =>(
                    <li key={header} className="mr-3 md:mr-8" >
                        <span onClick={() => setTab(header, index)} className={`tab${index} inline-block pb-2 text-[#000A0F] whitespace-nowrap text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] cursor-pointer ${tab === header ? 'text-[#003049] border-[#003049]  border-b-[2px]' : 'border-none'}`} >{header}</span>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}

export default NavTab