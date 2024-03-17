import React, { useEffect } from 'react'
import { Table } from 'reactstrap'
export default function Customtable(props) {

useEffect(()=>{
console.log(props)
},[])
   return (

    <Table>
        <thead>
       
            <tr>
               <th>hello</th>
               <th>hello</th>
            </tr>
        </thead>
      
    </Table>
   
  )
}
