import { useState } from 'react'
import List from './components/List'
import { UsersData } from './types/type'
import Details from './components/Details';
import usePolling from './components/usePolling';
import Loader from './components/Loader';
import './App.css'

function App() {

  const [id, setId] = useState<number | undefined>(undefined)

  const [{data: users, isLoading}] = usePolling(
    import.meta.env.VITE_FULL_DATA_URL,
    []
  )

  const handlerUsers = (id: number) => {
    setId(id)
  }

  return (
    <div className='container'>
      {isLoading ? <Loader /> :
        <>
          <List list={users as UsersData[]} handler={handlerUsers}/>
          {id ? <Details id={id} /> : null}
        </>
      }
    </div>
  )
}

export default App
