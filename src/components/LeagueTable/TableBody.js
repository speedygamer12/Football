import React from 'react'
import FormBox from './FormBox'

const TableBody = () => {
  return (
    <>
        {[...new Array(20)].map((team, index) =><tr key={index} className='border-b border-[#CFD5D8] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px]' >
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{index + 1}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >Arsenal</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >10</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >3</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >8</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >9</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >19</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >39</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5 md:px-0' >
                <span className='flex justify-center items-center' >{["W", "D", "L", "W", "D"]?.map((val, index) => <span className='md:mx-2.5 mx-1' key={index} ><FormBox form={val} /></span>)}</span>
            </td>
        </tr>)}
    </>
  )
}

export default TableBody