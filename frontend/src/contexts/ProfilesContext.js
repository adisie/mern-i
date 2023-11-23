
import { createContext,useEffect,useState } from "react"
import axios from 'axios'

export const ProfilesContext = createContext()

const ProfilesContextProvider = (props) => {
    // states
    const [profiles,setProfiles] = useState([])

    // effects
    useEffect(()=>{
        getAllProfiles()
    },[])

    //get all profiles
    const getAllProfiles = async () => {
        try {
            const response = await axios.get('/users/profiles',{withCredentials: true})
            setProfiles([...profiles,...response.data.profiles])
        }catch(err){
            console.log(err)
        }
    }

    // add new profile image 
    const addNewProfile = async profile => {
        try {
            const response = await axios.post('/users/profiles',profile,{withCredentials: true})
            setProfiles([response.data.profile,...profiles])
        }catch(err){
            console.log(err)
        }
    }

    // delete profile
    const deleteProfile = async _id => {
        try {
            const response = await axios.delete(`/users/profiles/${_id}`,{withCredentials: true})
            if(response.data.message === "DELETED"){
                setProfiles(profiles.filter(profile => profile._id !== _id))
            }
        }catch(err){
            console.log(err)
        }
    }


    return ( 
        <ProfilesContext.Provider value={{
            profiles,
            addNewProfile,
            deleteProfile,
        }}>
            {props.children}
        </ProfilesContext.Provider>
     );
}
 
export default ProfilesContextProvider;