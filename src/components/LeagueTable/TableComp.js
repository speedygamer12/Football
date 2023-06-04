import React from 'react'

const TableComp = ({headers, children}) => {
  return (
    <div className='pt-10 md:w-5/6 w-full overflow-x-auto' >
        <table className='w-full border-collapse border-none' >
            <thead className='bg-[#CFD5D8] border-none h-[37px] md:h-[48px]' >
                <tr className='border-none' >
                    {headers?.map(header => <th key={header} className="border-none py-3 px-2.5 whitespace-nowrap text-[14px] leading-[21px] md:text-[16px] md:leading-[24px] font-semibold text-center">
                        {header}
                    </th>)}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
    </div>
  )
}

export default TableComp