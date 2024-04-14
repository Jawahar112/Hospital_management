import React from "react";

export default function Customselect({ data,field,children,...props}) {
  
  return (<>
    <select {...props} defaultValue={children} >
    <option defaultValue={children}>
                 {children}
                    </option>
  {data.map((data,index) => {
   
    return (
      <option key={index}>{data[field] }</option>
    
    ) 
  })}
</select>
  </>
  )
}
