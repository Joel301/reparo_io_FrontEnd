import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ClientProfile from './ClientProfile'
import Admin from './Admin/Admin'
import { Navigate } from 'react-router-dom'
import ProfessionalProfile from './ProfessionalProfile'
function UserProfile() {
    const user = useSelector(state=>state.user)
 
    const isClient = (user)=>{
            return <ClientProfile user ={user}/>
    }
    const isAdmin=(user)=>{
        return <Admin user={user} />
    }
    const isProfessional=(user)=> {
        return <ProfessionalProfile user={user}/>
    }
    function Profile(user) {
        switch (user.type) {
            case 'administrador':{
                return isAdmin(user)
            }
            case 'cliente':{
                return isClient(user)
}
            case 'profesional':{
                return isProfessional(user)
            }
                
        
            default: return <div>No existe dicho usuario</div>
        }
    }
    const profileToRender = Profile(user)
    console.log(profileToRender)
  return (
    <> { profileToRender}</> 
  )
}

export default UserProfile