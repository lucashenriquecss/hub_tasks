import express from 'express';
import { JobController } from '../controllers/JobControllers';

const  job = new JobController()
const router = express.Router();

router.get('/', job.initJobs);
router.post('/create', job.createJobs);

export default router;