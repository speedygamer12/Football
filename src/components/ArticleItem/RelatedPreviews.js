import React from 'react'
import MiniCard from '../TopPreviews/MiniCard'

const RelatedPreviews = ({relatedArticleData, id, isSuccess}) => {
    const handleRelatedArticle = () => {
        return relatedArticleData?.filter(related=> related?.fixture !== id)
    }
  return (
    <div className='md:py-16 py-8 bg-[#EAECED] p-5 md:px-10 w-full'>
        <h1 className='md:pb-8 pb-4 font-bold md:text-[2rem] text-[1.5rem] leading-[120%] text-[#000A0F]' >Related</h1>
        <div className='flex w-full flex-col md:flex-row' >
            {handleRelatedArticle()?.length > 0 ? handleRelatedArticle()?.map(related=><div className='md:mx-2 md:w-1/3 w-full py-3 md:py-0' ><MiniCard isSuccess={isSuccess} league cardHeight={320} imageHeight={208} textHeight={112} data={related} /> </div> ) : <p>No Related Previews</p> }
        </div>
    </div>
  )
}

export default RelatedPreviews