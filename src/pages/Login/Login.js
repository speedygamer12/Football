import React, { useEffect } from 'react'
import GeneralLayout from '../../layouts/GeneralLayout';
import { useFormik } from 'formik';
import { LoginValidations } from '../../helpers/validations';
import { useLoginMutation } from '../../redux/services/Football';
import { TailSpin } from "react-loader-spinner";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [ login, { isLoading, isSuccess, data, reset } ] = useLoginMutation();
    const formik = useFormik({
        initialValues: {
          email: '',
          password: ''
        },
        validationSchema: LoginValidations,
        onSubmit: async values => {
            login({email: values.email, password: values.password});
        }
      });

    useEffect(() => {
        if(isSuccess){
            localStorage.setItem("token", data?.token);
            reset()
            navigate(`/`)
        }
    }, [isSuccess, data, navigate, reset])
    
    
    const {
        values,
        handleChange,
        handleSubmit,
        handleBlur,
        errors,
        touched,
    } = formik;
  return (
    <div>
         <GeneralLayout >
             <div className='flex justify-center items-center h-[80vh] bg-[#FDFDFD] w-full' >
                <div className='flex flex-col w-full max-w-[450px] md:px-10 px-5 bg-white rounded-[10px] shadow-[0_15px_30px_40px_rgba(0,0,0,0.04)]' >
                    <p className={`text-center md:text-[24px] text-[18px] font-bold my-5`} >Sign In</p>
                    <input label="Email" placeholder="Enter your email" name="email" value={values.email} onChange={handleChange("email")} onBlur={handleBlur("email")} error={errors.email} touched={touched.email} type="email" className={`w-full ${errors.email ? "mt-5" : "my-5"} outline-none border border-[#727272] rounded-[5px] h-[50px] p-5`} />
                    {touched.email && errors.email && <div className="text-red-500 text-[12px] mb-5">{errors.email}</div>}
                    <input label="Password" placeholder="Enter your password" name="password" value={values.password} onChange={handleChange("password")} onBlur={handleBlur("password")} error={errors.password} type="password" className={`w-full ${errors.password ? "mt-5" : "my-5"} outline-none border border-[#727272] rounded-[5px] h-[50px] p-5`} />
                    {touched.password && errors.password && <div className="text-red-500 text-[12px] mb-5">{errors.password}</div>}
                    <button type="submit" disabled={isLoading} onClick={handleSubmit} className='text-white bg-[#003049] font-semibold text-[16px] leading-[24px] rounded-[4px] w-full h-[48px] hover:bg-[#1D5775] mt-5 mb-10 flex justify-center items-center' >{isLoading ? <div data-testid="loader2" className="w-6 m-a">
                        <TailSpin color={"#fff"} height="21" width="21" />
                    </div> : "Login"}</button>
                </div>
             </div>
         </GeneralLayout>
    </div>
  )
}

export default Login 