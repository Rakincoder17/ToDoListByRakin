import React, { useState } from 'react'



const App = () => {
  const [task, settask] = useState('')
  const [description, setdescription] = useState('')
  const [date, setdate] = useState('')
  const [list, setlist] = useState([])

  let printTask = <p className=' text-center md:text-3xl pb-5 pt-5 text-white'>No Task For Today</p>
  let printButton = <span></span>
  const handleSubmit = (e) => {
    e.preventDefault()
    if (task != '') {
      setlist([...list, { task, description, date }])
      settask('')
      setdescription('')
      setdate('')
    }
  }

  const done = () => {

  }
  const deleteTask = (i) => {
    let copyList = [...list]
    copyList.splice(i, 1)
    setlist(copyList)
  }

  if (list.length > 0) {
    printTask = list.map((t, i) => {
      return <>

        <div className=' flex justify-center'>
          <div className='hidden border-2 mb-1 rounded-xl w-11/12 sm:flex justify-between lg:text-xl pb-1 bg-black text-white bg-opacity-60'>
            <span className=' m-1 p-1 w-2/12 h-fit mt-1 mb-0 text-center overflow-clip'>{t.task}</span>
            <span className=' m-1 p-1 w-1/5 h-fit mt-1 mb-0 text-center overflow-clip'>{t.description}</span>
            <span className=' m-1 p-1 w-2/12 h-fit mt-1 mb-0 text-center'>{t.date}</span>
            <span className=' m-1 p-1 w-2/12 h-fit mt-1 mb-0 text-center flex justify-evenly'>
              <button onClick={() => {
                deleteTask(i)
              }} className=' lg:text-lg md:text-sm  md:w-44 sm:text-xs sm:p-1 lg:h-12 sm: h-fit mr-3  border-2 bg-green-600 rounded-md text-white hover:bg-green-700 cursor-pointer border-white'>Done</button>
              <button onClick={() => {
                deleteTask(i)
              }} className=' lg:text-lg md:text-sm md:w-44 sm:text-xs sm:p-1 lg:h-12 sm: h-fit mr-3  border-2 bg-red-600 text-white rounded-md hover:bg-red-700 cursor-pointer border-white'>Delete</button>
            </span>
          </div>
          {/* For phone screen size the cards or tasks will be whole different */}
          <div className=' sm:hidden border-2 mb-1 rounded-xl w-11/12 flex-col justify-evenly items-center text-xl pb-1 bg-black text-white bg-opacity-60'>
            <div className=' flex-col min-h-24'>
              <div className='  m-5 p-1 w-11/12 h-fit  text-center overflow-clip'><i className=' bg-slate-700 rounded-lg p-1 m-1 text-green-300 border-2'>My Task:</i> {t.task}</div>
              <hr />
              <div className=' m-5 p-1 w-11/12 h-fit  mb-0 text-center overflow-clip'><i className=' bg-slate-700 rounded-lg p-1 m-1 text-yellow-300 border-2'>Description:</i> {t.description}</div>
            </div>
            <hr />
            <div className=' flex justify-between min-h-24'>
              <div className='  m-5 p-1 w-2/3 h-fit  text-center'><i className=' bg-slate-700 rounded-lg p-1 m-1 text-red-300 border-2'>Deadline:</i> {t.date}</div>
              <div className='m-5 p-1 w-1/2 h-fit  text-center flex justify-evenly'>
                <button onClick={() => {
                  deleteTask(i)
                }} className=' m-1 p-1 w-fit h-fit border-2 bg-green-600 rounded-lg text-white hover:bg-green-700 cursor-pointer border-white'>Done</button>
                <button onClick={() => {
                  deleteTask(i)
                }} className=' m-1 p-1 w-fit h-fit  border-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer border-white'>Delete</button>
              </div>

            </div>
          </div>
        </div>

      </>

    })
  }


  return (
    <>
      <div>
        <header className=' bg-gradient-to-b from-slate-500 to-black md:h-28 h-24 flex items-center justify-center'>
          <h1 className=' text-white self-center lg:text-5xl sm:text-3xl text-xl font-bold'>Rakin's To Do List Web Page</h1>

        </header>
        <main className=' mb-24 bg-black'>
          <form className='hidden sm:flex justify-center items-center sticky top-0 bg-slate-950 bg-opacity-80'>
            <input placeholder='Enter Task Here' type="text"
              className=' md:m-7 m-3 xl:w-80 lg:w-64 md:w-40 sm:w-40 w-64 p-4 md:h-12 h-10 sm:text-sm border-2 border-slate-600 rounded-lg hover:border-yellow-400'
              value={task}
              onChange={(e) => {
                settask(e.target.value)
              }} />
            <input placeholder='Enter Short Description' type="text"
              className=' md:m-7 m-3 xl:w-80 lg:w-64 md:w-40 sm:w-40 w-64 p-4 md:h-12 h-10 sm:text-sm border-2  border-slate-600 rounded-lg hover:border-yellow-400'
              value={description}
              onChange={(e) => {
                setdescription(e.target.value)
              }} />
            <input type="date" name="deadLine" id="deadLine" className=' lg:w-40 md:w-28 sm:w-20 md:h-12 h-10 sm:text-sm p-4 md:m-7 m-3 rounded-lg border-slate-600 border-2'
              value={date}
              onChange={(e) => {
                setdate(e.target.value)
              }} />
            <button type="submit"
              className=' bg-green-600 border-2 border-slate-800 text-white md:h-12 h-10 sm:text-sm md:m-7 m-3 p-1 sm:w-24 md:text-sm rounded-lg hover:bg-green-700 cursor-pointer'
              onClick={handleSubmit}
            >Add Task</button>
          </form>
          {/* Form for screen size less than smallest is whole different */}
          <form className=' sm:hidden flex-col justify-center items-center sticky top-0 bg-slate-950 bg-opacity-80'>
            <input placeholder='Enter Task Here' type="text"
              className=' w-10/12 ml-10 mb-3 h-10 text-center border-2 border-slate-600 rounded-lg hover:border-yellow-400'
              value={task}
              onChange={(e) => {
                settask(e.target.value)
              }} />
            <input placeholder='Enter Short Description' type="text"
              className='w-10/12 ml-10 mb-3 h-10 text-center border-2  border-slate-600 rounded-lg hover:border-yellow-400'
              value={description}
              onChange={(e) => {
                setdescription(e.target.value)
              }} />
            <input type="date" name="deadLine" id="deadLine" className='w-10/12 ml-10 mb-3 h-10 text-center rounded-lg border-slate-600 border-2'
              value={date}
              onChange={(e) => {
                setdate(e.target.value)
              }} />
            <button type="submit"
              className='w-10/12 ml-10 mb-3 h-10 text-center bg-green-600 border-2 border-slate-800 text-white rounded-lg hover:bg-green-700 cursor-pointer'
              onClick={handleSubmit}
            >Add Task</button>
          </form>


          <hr />

          <div className='bg-gradient-to-b from-slate-950 to-white'>
            <div className=' flex justify-around items-center'>
              <h2 className=' sm:visible border-white border-2 lg:text-2xl sm:text-lg text-2xl p-1 sm:p-0 font-bold mt-3 mb-3 bg-slate-950 text-white sm:w-1/5 w-2/3 h-14 text-center flex items-center justify-center lg:h-12 sm:h-fit rounded-md'>My Tasks</h2>
              <h2 className='sm:visible hidden border-white border-2 lg:text-2xl sm:text-lg p-1 sm:p-0 font-bold mt-3 mb-3 bg-slate-950 text-white sm:w-1/5 text-center sm:flex items-center justify-center lg:h-12 sm:h-fit rounded-md'>Description</h2>
              <h2 className='sm:visible hidden border-white border-2 lg:text-2xl sm:text-lg p-1 sm:p-0 font-bold mt-3 mb-3 bg-slate-950 text-white sm:w-1/5 text-center sm:flex items-center justify-center lg:h-12 sm:h-fit rounded-md'>Deadline</h2>
              <h2 className='sm:visible hidden border-white border-2 lg:text-2xl sm:text-lg p-1 sm:p-0 font-bold mt-3 mb-3 bg-slate-950 text-white sm:w-1/5 text-center sm:flex items-center justify-center lg:h-12 sm:h-fit rounded-md'>Action</h2>
            </div>
            <div className=' lg:min-h-80  '>
              {printTask}
            </div>
          </div>
        </main>
        <footer className=' bg-slate-950 text-white fixed bottom-0 w-full opacity-80 md:h-20 h-16 md:text-xl text-xs flex justify-evenly items-center'>
          <h3>Follow me on:</h3>
          <a href="https://www.facebook.com/profile.php?id=100085463775808" target='_blank' className=' text-blue-400 hover:text-blue-600 font-bold'>Facebook</a>
          <a href="https://www.instagram.com/rakin_absar_04/" target='_blank' className=' text-red-500 hover:text-red-700 font-bold'>Instagram</a>
          <a href="https://www.linkedin.com/in/rakinabsar04/" target='_blank' className=' text-blue-700 hover:text-blue-500 font-bold'>Linkedin</a>
          <a href="https://github.com/Rakincoder17" target='_blank' className=' text-slate-500 hover:text-slate-300 font-bold'>GitHub</a>
        </footer>
      </div>
    </>
  )
}

export default App
