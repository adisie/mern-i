import {createContext,useState,useEffect} from 'react'
import axios from 'axios'

export const ProfileContext = createContext()


const ProfileContextProvider = (props) => {
    // states 
    const [profiles,setProfiles] = useState([])

    // effects
    useEffect(()=>{
        getAllProfiles()
    },[])

    // functions
    // get all profils
    const getAllProfiles = async () => {
        try {
            const response = await axios.get('/users/profiles',{withCredentials: true})
            setProfiles([...profiles,...response.data.profiles])
        }catch(err){
            console.log(err)
        }
    }

    // delete profile
    const deleteProfile = async _id => {
        try {
            const response = await axios.delete(`/users/profiles/${_id}`,{withCredentials: true})
            const newProfiles = profiles.filter(profile => {
                return profile._id !== _id
            })
            setProfiles([...newProfiles])
            
        }catch(err){
            console.log('------------------------------------------------')
            console.log(err)
        }
    }

    // add new profile
    const addNewProfile = async profile => {
        try{
            const response = await axios.post('/users/profiles/',profile,{withCredentials: true})
            setProfiles([response.data.profile,...profile])
        }catch(err){
            console.log(err)
        }
    }

    return ( 
        <ProfileContext.Provider value={{
            profiles,
            deleteProfile,
            addNewProfile,
        }}>
            {props.children}
        </ProfileContext.Provider>
     );
}
 
export default ProfileContextProvider;