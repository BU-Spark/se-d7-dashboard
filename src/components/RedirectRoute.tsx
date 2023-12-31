import { useEffect, ReactNode } from "react"
import { useNavigate } from "react-router-dom"
import { onAuthStateChanged, getAuth } from "firebase/auth"


export const RedirectRoute = ({ children }: {children: ReactNode}) => {

  const navigate = useNavigate()
  useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home")
      }
    })
  }, [navigate])

  return (
    <>
      {children}
    </>
  )
}
