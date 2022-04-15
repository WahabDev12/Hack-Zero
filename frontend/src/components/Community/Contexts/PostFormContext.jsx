import {React, createContext, useContext, useState} from 'react'

export const formContext = createContext()

const PostFormProvider = ({children}) => {
  const [postFormIsOpen, setPostFormOpen] = useState(false)

  return (
    <formContext.Provider value={{postFormIsOpen, setPostFormOpen}}>
        {children}
    </formContext.Provider>
  )
}

export default PostFormProvider