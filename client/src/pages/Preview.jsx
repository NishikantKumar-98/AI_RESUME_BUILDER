import React, { useEffect, useState } from 'react'
import { dummyResumeData } from '../assets/assets'
import ResumePreview from '../components/ResumePreview'
import Loader from '../components/Loader'
import { ArrowLeftIcon } from 'lucide-react'
import { useParams } from 'react-router-dom'  
import api from '../configs/api'
const Preview = () => {
  const {resumeId} = useParams()
  const [isLoading, setIsLoading] =useState(true)
  const [resumeData, setResumeData] = useState(null)

  const loadResume = async ()=>{
   try {
    const {data}= await api.get('/api/resumes/public/'+resumeId )
    setResumeData(data.resume)
   } catch (error) {
    console.log(error.message)
   } finally{
    setIsLoading(false)
   }
  }
 useEffect(()=>{
  loadResume()
 },[])

  return resumeData?(
    <div className='bg-slate-100'>
      <div className='max-w-3xl mx-auto py-10'>
        <ResumePreview data={resumeData} template={resumeData.template} accentColor={resumeData.accent_color}
        classes='py-4 bg-white'  />
      </div>
    </div>
  ) : (
       <div>
        {isLoading? <Loader/>:(
          <div>
            <p className='text-center text-6xl text-slate-400 font-medium'>Resume Not Found</p>
            <a href="/" className='mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-full px-6 h-9 m-1 ring-offset-1 ring-1 ring-blue-400 flex items-center transition-colors'>
              <ArrowLeftIcon className='mr-2 size-4' />go to home page
            </a>
          </div>
        )}
       </div>
  )
}

export default Preview