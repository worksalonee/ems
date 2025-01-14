import React from 'react'

export const TaskListNumbers = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
        <div className='rounded-xl w-[45%] px-6 py-9 bg-green-200'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-6 py-9 bg-yellow-200'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-6 py-9 bg-blue-500'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className='rounded-xl w-[45%] px-6 py-9 bg-purple-800'>
            <h2 className='text-2xl font-semibold'>0</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
    </div>

  )
}

// export default TaskListNumbers
