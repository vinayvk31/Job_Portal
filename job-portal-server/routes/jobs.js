import express from 'express' 
import { jobPostController,jobPostApplyController,getJobsController,getJobsByIndustryController ,productListController} from '../controllers/jobController.js';

const router = express.Router()

router.post('/post/:id', jobPostController);
router.get('/all-jobs', getJobsController);
router.get('/Industry/:Industry', getJobsByIndustryController);
router.get('/product-list/:page',  productListController)
router.post('/apply',  jobPostApplyController)
export default router;