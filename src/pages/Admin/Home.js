import React, { useEffect, useMemo } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout';
import { useFormik } from 'formik';
import { ArticleValidations, ArticleWthValidations } from '../../helpers/validations';
import { Editor } from '@tinymce/tinymce-react'
import { useGetFixturesByIdQuery, useGetUserQuery, usePostArticleMutation, useUpdateArticleMutation } from '../../redux/services/Football';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { TailSpin } from "react-loader-spinner";

const Home = () => {
    const { id } = useParams();
    const { state } = useLocation();
    const { isLoading, isError, error } = useGetUserQuery("", { skip: !localStorage.getItem("token") });
    const [ postArticle, { isLoading: isPostLoading, isSuccess } ] = usePostArticleMutation();
    const [ updateArticle, { isLoading: isEditPostLoading, isSuccess: isEditSuccess } ] = useUpdateArticleMutation();
    const { isFetching, data } = useGetFixturesByIdQuery(id);
    // const { isLoading: isEditLoading, data: editData } = useGetArticleByIdQuery(id, { skip: !state?.edit });
    // const articleData = useMemo(() => editData?.articles?.[0], [editData?.articles])
    const teamInfo = useMemo(() => data?.fixtures, [data?.fixtures])
    const navigate = useNavigate()

    useEffect(() => {
      if(isError){
          if(error?.data?.error==="Token has expired"){
            navigate("/auth/article/login")
          }
      }else if(!localStorage.getItem("token") || isError ){
        navigate("/")
      }
    }, [navigate, isError, error])
    
    useEffect(() => {
      if(isSuccess || isEditSuccess){
        navigate(`/article/admin/${id}`)
      }
    }, [isSuccess, id, navigate, isEditSuccess]);
    
    const formik = useFormik({
        initialValues: {
          description: state?.edit ? state?.articleData?.description : '',
          body: state?.edit ? state?.articleData?.body : '',
          image: state?.edit ? state?.articleData?.image : "",
        },
        validationSchema: state?.edit ? ArticleWthValidations : ArticleValidations,
        onSubmit: async values => {
            let formdata = new FormData();
            formdata.append("description", values.description);
            formdata.append("body", values.body);
            formdata.append("league", `${teamInfo?.league?.name}`);
            !state?.edit && formdata.append("image", values.image?.[0]);
            formdata.append("title", `${teamInfo?.teams?.home?.name} Vs ${teamInfo?.teams?.away?.name}`);
            formdata.append("tags", `${teamInfo?.league?.name}`);
            formdata.append("tags", `${teamInfo?.teams?.home?.name}`);
            formdata.append("tags", `${teamInfo?.teams?.away?.name}`)
            state?.edit ? updateArticle({id: state?.articleData?._id, formdata}) : postArticle({id, formdata});
        }
      });

    const {
        values,
        handleChange,
        handleSubmit,
        setFieldValue,
        handleBlur,
        errors,
    } = formik;
  return (
    <div>
         <GeneralLayout>
            {(isLoading || isFetching) ? <div className='flex justify-center items-center h-[60vh]' ><TailSpin
                height="80"
                width="80"
                color="#000A0F"
                /></div> : <div className='md:p-10 p-5 max-w-[850px] mx-auto' >
                <h1 className='font-bold md:text-[3rem] text-[1.5rem] md:leading-[120%] leading-[120%] text-[#000A0F] md:text-[#000A0F]'>{`${teamInfo?.teams?.home?.name} Vs ${teamInfo?.teams?.away?.name}`}</h1>
                <input label="Description" placeholder="Enter match description" name="description" value={values.description} onChange={handleChange("description")} onBlur={handleBlur("description")} type="text" className={`w-full ${errors.description ? "mt-5" : "my-5 md:my-7"} outline-none border border-[#727272] rounded-[5px] h-[50px] p-5`} />
                {errors.description && <div className="text-red-500 text-[12px] mb-5 mt-3">{errors.description}</div>}
                {!state?.edit && <>
                  <label className="py-3" htmlFor="uploadResult" >
                      <div className='w-full h-[40px] md:h-[50px] cursor-pointer border rounded-[8px] border-[#727272] my-2 flex items-center' >
                          <p className='p-2 md:px-5 text-[#727272]' >{values.image?.length>0 ? values.image?.[0]?.name : "Upload image here"}</p>
                      </div>
                  </label>
                  <input
                      id="uploadResult"
                      type="file"
                      accept="image/*"
                      className="overflow-hidden hidden"
                      onChange={(e)=> setFieldValue("image", e.target.files)}
                  />
                  {errors.image && <div className="text-red-500 text-[12px] my-2">{errors.image}</div>}
                </>}
                <div className='mt-5 md:mt-7' ></div>
                {errors.body && <div className="text-red-500 text-[12px] my-2">{errors.body}</div>}
                <Editor
                        apiKey = {"5afe0oaakdp41dym1nmykw530s45gg4oknpifmzzt0r7tdte"}
                        value={values.body}
                        onEditorChange={(stringifiedHtmlValue) => {
                            setFieldValue("body", stringifiedHtmlValue);
                        }}
                        init={{
                            height: 500,
                            menubar: false,
                            plugins: [
                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap',
                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                'insertdatetime', 'media', 'table', 'preview', 'help', 'wordcount', 'emoticons'
                            ],
                            toolbar: 'formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link | image | undo redo | emoticons | help',
                            automatic_uploads: true,
                            // images_upload_handler: async (blobInfo, progress)=> {
                            //     const formdata = new FormData()
                            //     formdata.append("file", blobInfo.blob())
                            //     const {data} = await postApi("", formdata);
                            //     return data.data.file;

                            // }
                        }}
                    />
                    <button type="submit" disabled={isPostLoading || isEditPostLoading} onClick={handleSubmit} className='text-white bg-[#003049] font-semibold text-[16px] leading-[24px] rounded-[4px] w-full h-[50px] hover:bg-[#1D5775] mt-5 mb-10 flex justify-center items-center' >{(isPostLoading || isEditPostLoading) ? <div data-testid="loader2" className="w-6 m-a">
                        <TailSpin color={"#fff"} height="21" width="21" />
                    </div> : "Post Article"}</button>
            </div>}
        </GeneralLayout>
    </div>
  )
}

export default Home