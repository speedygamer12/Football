import React from 'react'

const FormBox = ({form}) => {
  return (
    <span className={`w-[32px] w-[32px] text-white flex item-center justify-center ${form==="W" ? "bg-[#27AE60]" : form==="D" ? "bg-[#F2C94C]" : "bg-[#EB5757]"}`} >
        {form}
    </span>
  )
}

export default FormBox