import React from 'react'

const NavObjTab = ({tabHeaders, setTab, tab, className}) => {
    return (
        <div className='pt-5 h-full border-b-[1px] border-[#A6AFB4] flex' >
            <ul className='flex -mb-px overflow-x-auto' >
                {
                    tabHeaders?.map((header, index) =>(
                        <li onClick={() => setTab(header?.link, index)} key={header?.title} className={`${className}${index} mr-3 md:mr-8`} >
                            <span className={` inline-block pb-2 text-[#000A0F] whitespace-nowrap text-[14px] leading-[21px] md:text-[18px] md:leading-[27px] cursor-pointer ${tab === header?.link ? 'text-[#003049] border-[#003049]  border-b-[2px] font-semibold' : 'border-none'}`} >{header?.title}</span>
                        </li>
                    ))
                }
            </ul>
        </div>
      )
}

export default NavObjTab