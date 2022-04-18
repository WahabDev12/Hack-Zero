import {createContext, useState, useEffect} from 'react'
import axios from 'axios'

export const userContext = createContext()



function UserProvider({children}) {

    const [user, setUser] = useState()
    const getUser = () => {
        axios({
        method: 'get',
        url: 'http://localhost:5000/user/profile',
        withCredentials: true,
        })
        .then(response => {setUser(response.data.user)  })
        .catch(err => {console.log(err)})
        
    }
    useEffect(() => {

        getUser()

    }, []);

  return (
    <userContext.Provider value={{user, setUser, getUser}}>
        {children}
    </userContext.Provider>
  )
}

export default UserProvider