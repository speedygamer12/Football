import React, { useEffect, useMemo } from 'react';
import { useGetAllArticlesQuery, useGetUserQuery } from '../../redux/services/Football';
import CarouselPreview from './CarouselPreview';
import SmallPreviews from './SmallPreviews';
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';

const TopPreviews = () => {
  const { isLoading, data } = useGetAllArticlesQuery();
  const navigate = useNavigate();
  const { isSuccess, isLoading: isUserLoading, isError, error } = useGetUserQuery("", { skip: !localStorage.getItem("token") })
  const articlesData = useMemo(()=> data?.articles, [data?.articles]);

  useEffect(() => {
    if(isError){
        if(error?.data?.error==="Token has expired"){
          navigate("/auth/article/login")
        }
    }
  }, [isError, error, navigate])
  return (
    <div className='bg-[#FDFDFD] p-5 md:px-10 w-full' >
        <h1 className='font-bold text-[24px] leadimg-[28.8px] md:text-[32px] md:leadimg-[38.4px] ' >Top Previews</h1>
        <div className='flex smallLaptop:flex-row flex-col w-full' >
            {(isLoading || isUserLoading) ? <div className='flex justify-center items-center h-[80vh] w-full' ><TailSpin
                height="80"
                width="80"
                color="#000A0F"
              /></div> :<>
              <CarouselPreview isSuccess={isSuccess} data={articlesData?.slice(0,3)} />
              <SmallPreviews isSuccess={isSuccess} data={articlesData?.slice(3,5)} />
            </>}
        </div>
    </div>
  )
}

export default TopPreviews