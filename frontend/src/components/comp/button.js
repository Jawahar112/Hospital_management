import React from 'react'
import { Button } from 'reactstrap'
export default function Custombutton(props) {
  return (
    <Button color={props.color}>{props.children}</Button>
  )
}
