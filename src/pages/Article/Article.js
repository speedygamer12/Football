import React, { useEffect, useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArticleItem from '../../components/ArticleItem/ArticleItem';
import RelatedPreviews from '../../components/ArticleItem/RelatedPreviews'
import GeneralLayout from '../../layouts/GeneralLayout'
import { useGetArticleByIdQuery, useGetRelatedArticlesQuery, useGetUserQuery } from '../../redux/services/Football';
import { TailSpin } from "react-loader-spinner";

const Article = ({admin}) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isLoading, isError, error, data } = useGetArticleByIdQuery(id)
  const { isSuccess, isLoading: isUserLoading, isError: isUserError, error: userError } = useGetUserQuery("", { skip: !localStorage.getItem("token") });
  
  const articleData = useMemo(() => data?.articles?.[0], [data?.articles])
  const { isLoading: isLoadingRelated, data: relatedData } = useGetRelatedArticlesQuery(articleData?.league, { skip: !(!isLoading && isSuccess) });
  const relatedArticleData = useMemo(() => relatedData?.articles, [relatedData?.articles])

  console.log(relatedArticleData?.filter(related=> related?.fixture !== id));
  useEffect(() => {
    if(admin && isSuccess && (error?.data?.message=== "No article found") ){
      navigate(`/article/create/admin/${id}`)
    }
  }, [admin, isSuccess, error, navigate, id])

  useEffect(() => {
    if(isUserError){
        if(userError?.data?.error==="Token has expired"){
          navigate("/auth/article/login")
        }
    }
  }, [isUserError, userError, navigate]);
  
  return (
    <div>
        <GeneralLayout >
          {(isLoading || isUserLoading) ? <div className='flex justify-center items-center h-[80vh]' ><TailSpin
          height="80"
          width="80"
          color="#000A0F"
        /></div> : isError ? <div className='h-[80%] flex items-center justify-center ' >
              <div className='w-[600px] rounded-[20px] h-[500px] mx-3 p-5' >
                <div className='flex justify-center items-center h-full' >
                    <p className='font-semibold text-[24px] md:text-[32px]' >{error?.data?.message}</p>
                </div>
              </div>
            </div> : 
            <>
              <ArticleItem articleData={articleData} isSuccess={isSuccess} />
              {isLoadingRelated ? <div className='flex justify-center items-center h-[40vh]' ><TailSpin
                height="80"
                width="80"
                color="#000A0F"
              /></div> : <RelatedPreviews isSuccess={isSuccess} id={id} relatedArticleData={relatedArticleData} />}
              </>}
        </GeneralLayout>
    </div>
  )
}

export default Article