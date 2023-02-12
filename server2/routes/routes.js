import express from 'express';
import { userData,getUserData } from '../controller/user.js';
const route=express.Router();


route.post('/add',userData)
route.get('/getUser',getUserData)

export default route