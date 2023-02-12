import User from "../model/usermodal.js"

export const userData=async (req,res)=>{
try {
   const exist=await User.findOne({sub:req.body.sub});
   if(exist){
    res.status(200).json({msg:'User Already exists'});
    return;
   }
   const newUser= new User(req.body);
   await newUser.save();
  return res.status(200).json(newUser)
} catch (error) {
    return res.status(500).json(error.message)
}
}

export const getUserData=async(req,res)=>{
  try {
  const  user=await User.find({})
  return res.status(200).json(user)
  } catch (err) {
    return res.status(500).json(err.message)
  }

}