import React from 'react'
//import search icon

const searchTodo = ({TodoList,setSearch}) => {
    const handleSubmit =(e)=> e.preventDefault()

    const handleSearch = (e)=>{
        if(!e.target.value) return setSearch(TodoList)

        const resultArray =TodoList.filter(list => list.filter.includes(e.target.value) || list.body.includes(e.target.value) )

        setSearch(resultArray)

    }
  return (
    <form className="search" onSubmit={handleSubmit}>
        <input className='search_input' type="text"
        id='search' 
        onChange={handleSearch}
        
        />
        <button className='search_button'>
            
        </button>


    </form>

  )
}

export default searchTodo