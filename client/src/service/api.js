import axios from 'axios'



 const url=`http://localhost:5000`;
export const Adduser=async(data)=>{
    try {
       await axios.post(`${url}/add`,data)
    } catch (error) {
        console.log('Error in adding user ',error.message)
    }
}