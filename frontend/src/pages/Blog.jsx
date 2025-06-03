import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data, comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment/moment'
import Footer from '../components/Footer'
import Loder from '../components/Loder'

const Blog = () => {

    const {id} = useParams()
    const [data, setData]=  useState(null)
   const [comment,setComment] = useState([])
   const [name, setName] = useState('')
   const [content, setContent] = useState('');

    const fetchBlogData = async ()=>{
      const data=  blog_data.find(item=>item._id === id)
      setData(data)
    }
   
    const fetchComment = async ()=>{
setComment(comments_data)    }

const addComment = async (e)=>{
  e.preventDefault();
   }


    useEffect(()=>{
        fetchBlogData()
        fetchComment()
    },[])
  return data ?  (
    <div className='relative'>
        <Navbar/>
        <div className='text-center mt- text-gray-600'>
         <p className='text-primary py-20 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>   
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto text-gray-800'>{data.title}</h1>
        <h2 className='my-5 max-w-lg turncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>John smith</p>
        </div>

        <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6 '>
           <img src={data.image} alt="" className='rounded-3xl mb-5' />
        <div dangerouslySetInnerHTML={{__html:data.description}} className='rich-text max-w-3xl mx-auto '></div>
       {/*comment section*/}
        <div className='mt-14 mb-10 max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Comments ({comments_data.length})</p>
          <div className='flex flex-col gap-4'>
            {comment.map((item, index)=>(
              <div key={index} className='relative bg-gray-100 border border-primary/12 max-w-xl p-4 rounded-3xl text-gray-600'>
                <div className='flex items-center gap-2 mb-2'>
                  <img src={assets.user_icon} alt="" className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                </div>
                <p className='text-sm max-w-md ml-8'>{item.content}</p>
                <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>
              </div>
            ))}
          </div>
        </div>
        </div>
        {/*Add comment section*/}
        <div className='max-w-3xl mx-auto'>
          <p className='font-semibold mb-4'>Add your comments</p>
        <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
          
          <input onChange={(e)=>setName(e.target.value)} value={name} type="text" placeholder='Name' required className='w-full p-2 border border-gray-300  rounded outline-none' />
          
          <textarea onChange={(e)=>setContent(e.target.value)} value={content} placeholder='Comment' className='w-full p-2 border border-gray-300 rounded outline-none h-48'></textarea>
        
        <button className='p-2 px-8 rounded hover:scale-102 transition-all cursor-pointer text-white bg-primary '>Submit</button>
        </form>

        {/*Share button*/}

        <div className='m-24 max-w-3xl mx-auto'>
           <p className='font-semibold my-4'>Share this article on social media</p>
        <div className='flex'>
        <img src={assets.facebook_icon} width={50} alt="" />
        <img src={assets.twitter_icon} width={50} alt="" />
          <img src={assets.googleplus_icon} width={50} alt="" />
        </div>
        </div>
       </div>
    <Footer/>
    </div>
  ): <Loder/>
}

export default Blog