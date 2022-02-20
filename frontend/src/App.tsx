import React, { FC, useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import axios from 'axios'
import './App.css'
import { User } from './types'
import Users from './components/Users'

const App: FC = () => {
  const [loading, setLoading] = useState<boolean>(true)
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<User[]>('http://localhost:8000')
        setUsers(data)
        setLoading(false)
      } catch (error: any) {
        console.log('running', error.response.status)
        if (error.response.status === 404) {
          return setLoading(true)
        }
      }
    }

    fetchData()
  }, [])

  if (loading) {
    return <h1>Loading ....</h1>
  }
  return (
    <>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Users users={users} />
          </Route>
        </Switch>
      </div>
    </>
  )
}

export default App
