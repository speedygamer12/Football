import React from 'react'
import FormBox from './FormBox'

const TableBody = ({data}) => {
  return (
    <>
        {data?.map((team, index) =><tr key={team?._id} className='border-b border-[#CFD5D8] text-[14px] leading-[21px] md:text-[16px] md:leading-[24px]' >
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.rank}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5 flex items-center' >
                <img src={team?.team?.logo} alt="Team Logo" className='max-h-[30px] max-w-[30px] inline-block align-middle' />
                <span className='px-1.5 inline-block align-middle' >{team?.team?.name}</span>
            </td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.all?.played}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.all?.win}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.all?.draw}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.all?.lose}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.goalsDiff}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5' >{team?.points}</td>
            <td className='whitespace-nowrap text-center py-3 px-2.5 md:px-0' >
                <span className='flex justify-center items-center' >{team?.form?.split("")?.map((val, index) => <span className='md:mx-2.5 mx-1' key={index} ><FormBox form={val} /></span>)}</span>
            </td>
        </tr>)}
    </>
  )
}

export default TableBody