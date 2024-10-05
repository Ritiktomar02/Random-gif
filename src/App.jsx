import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchdata } from './redux/slices/randomslice';
import { setparam } from './redux/slices/randominputslice';
import { fetchdatainput } from './redux/slices/randominputslice';
import Spinner from './Spinner';

const App = () => {
  const [url,seturl]=useState('');
  const [url2,seturl2]=useState('');
  const [tag,setag]=useState('');
  const dispatch=useDispatch();
  const {data,isLoading}=useSelector((state)=>state.random)
  const {data2,isLoading2}=useSelector((state)=>state.randominput);

  useEffect(()=>{
    dispatch(fetchdata())
  },[])
  function clickhandler(){
      dispatch(fetchdata())
  }

  
  function clickhandler2(){
      dispatch(fetchdatainput(tag))
  }

  function changehandler(e){
    setag(e.target.value);
    dispatch(setparam(e.target.value))
  }

  
  useEffect(()=>{

    if(data){
      seturl(data.data.images.downsized_large.url)
    }
  },[data])

  useEffect(()=>{

    if(data2){
      seturl2(data2.data.images.downsized_large.url)
    }
  },[data2])
  
 console.log("data",data2)
  
  return (
    <div className='min-w-full min-h-screen background flex flex-col  items-center'>
      
      <div className='uppercase font-extrabold text-3xl w-5/6 bg-white flex justify-center items-center mt-[50px] h-[70px] rounded-xl'>Random gifs</div>
       
       <div className=' flex flex-col items-center gap-y-4 mt-[50px] w-2/5 bg-green-400 border border-black border-solid '>
         
         <div className='font-bold uppercase underline text-xl'>A Random gif</div>
         <div className='max-w-5/6  border'>
         
          {
            isLoading?(<Spinner/>):(<img src={url}/>)
          }
         </div>

        <button className=' mb-3 w-5/6 h-[30px] uppercase font-bold bg-slate-200 rounded-lg' onClick={()=>clickhandler()}>generate</button>
       </div>

       <div className=' flex flex-col items-center gap-y-4 mt-[50px] w-2/5 bg-blue-400 border border-black border-solid'>
         
         <div className='font-bold uppercase underline text-xl'>Random gif</div>
         <div className='max-w-5/6  border'>
         {
            isLoading2?(<Spinner/>):(<img src={url2}/>)
          }
         </div>
        <input type='text' className='w-5/6 h-[30px] mb-3   bg-slate-200 rounded-lg text-center' value={tag} onChange={changehandler}></input>
        <button className='mb-3 w-5/6 h-[30px] uppercase font-bold bg-slate-200 rounded-lg' onClick={()=>clickhandler2()}>generate</button>
       </div>

    </div>
  )
}

export default App
