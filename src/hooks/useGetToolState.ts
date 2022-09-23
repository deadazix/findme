import { useAppSelector } from './reduxHooks'
import React,{useState,useCallback} from 'react'
import { stat } from 'fs'


const useGetToolState = () => {
    const toolState = useAppSelector(state => state.ui.ToolsState)
    const getToolState =useCallback(()=>toolState,[])

  return {getToolState} 
    
}

export default useGetToolState