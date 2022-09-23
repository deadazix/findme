import React from 'react'
import classes from './Tool.module.css'
import { classicNameResolver } from 'typescript'
import { ToolType } from '../../models/types'
interface ToolFace {
    type:ToolType
}
const Tool:React.FC<ToolFace>= (props) => {


  return (
    <li>{props.type}</li>
  )
}

export default Tool