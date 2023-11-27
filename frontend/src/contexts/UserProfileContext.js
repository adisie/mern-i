

import { createContext,useState,useEffect } from "react"
import axios from "axios"


export const UserProfileContext = createContext()

const UserProfileContextProvider = (props) => {
    // states
    const [profiles,setProfiles] = useState([])

    // effects 
    useEffect(()=>{
        getAllUserProfiles();
    })


    // functoions
    // get all profiles
    const getAllUserProfiles = async () => {
        try{
            const response = await axios.get('/users/profiles',{withCredentials: true})
            if(response.data.profiles.length > 0){
                setProfiles([...response.data.profiles])
            }else {
                setProfiles([])
            }
        }catch(err){
            console.log(err)
        }
    }

    // add new profile image
    const addNewProfileImage = async formData => {
        try {
            const response = await axios.post('/users/profiles',formData,{withCredentials: true})
            setProfiles([response.data.profile,...profiles])
        }catch(err){
            console.log(err)
        }
    }

    // delete profiles image
    const deleteProfileImage = async _id => {
        try {
            await axios.delete(`/users/profiles/${_id}`,{withCredentials: true})
            setProfiles(profiles.filter(profile=>profile._id !== _id))
        }catch(err){
            console.log(err)
        }
    }



    return ( 
        <UserProfileContext.Provider value={{
            profiles,
            setProfiles,
            getAllUserProfiles,
            addNewProfileImage,
            deleteProfileImage,
        }}>
            {props.children}
        </UserProfileContext.Provider>
     );
}
 
export default UserProfileContextProvider;