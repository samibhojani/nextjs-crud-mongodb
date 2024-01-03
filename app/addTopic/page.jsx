import React from 'react'

const page = () => {
  return (
    <form className='flex flex-col gap-3'>
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Add title here. eg: Grocery shopping' />
        <input className='border border-slate-500 px-8 py-2' type="text" placeholder='Add title description here. eg: Eggs, Milk, etc' />

        <button className='bg-blue-600 rounded font-bold text-white py-3 px-6 w-fit'>Add Task</button>
    </form>
  )
}

export default page