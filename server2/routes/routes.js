import express from 'express';
import { userData } from '../controller/user.js';
const route=express.Router();


route.post('/add',userData)


export default route