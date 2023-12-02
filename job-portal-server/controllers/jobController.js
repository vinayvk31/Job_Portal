import { db } from "../db/db.js"

export const jobPostController = async(req, res)  =>{
    const c_id = req.params.id;
    const {Title,Description,Location,Salary,Deadline,Industry} = req.body;

if(!Title || !Description || !Location || !Salary || !Deadline || !Industry ){
    return res.status(200).send({message: "All the fields are required..", success: true})
}
    try{
        var q = "INSERT INTO jobs (`c_id`, `Title`,`Description`,`Location`,`Salary`, `Deadline`, `Industry`) VALUES (?)";
        const Values = [c_id,Title,Description,Location,Salary,Deadline,Industry];
        db.query(q,[Values],(err,data)=>{
            if(err) return res.status(400).send({err, success: false});
            return res.status(201).send({data, message: "Job Post created.", success: true})
           })
    }
catch(error){
    return res.status(400).send({error, message: "Error in creating job post.", success: true})
}

}

//getJobsController
export const getJobsController = async(req, res)  =>{
 
    try{
        var q = "SELECT * FROM jobs"; 
        db.query(q,(err,data)=>{
            if(err) return res.status(400).send({err, success: false});
            return res.status(201).send({data, message: "All jobs List.", success: true})
           })
    }
catch(error){
    return res.status(400).send({error, message: "Error in getting all jobs.", success: true})
}

}

// getJobsByIndustryController
export const getJobsByIndustryController = async(req, res)  =>{
    const Industry = req.params.Industry;

    try{
        var q = "SELECT * FROM jobs WHERE Industry = (?) "; 
        db.query(q,[Industry],(err,data)=>{
            if(err) return res.status(400).send({err, success: false});
            return res.status(201).send({data, message: "Industry jobs List.", success: true})
           })
    }
catch(error){
    return res.status(400).send({error, message: "Error in getting jobs Industry Wise.", success: true})
}

}


// per page by load
export const productListController = async (req, res) => {
    try {
        const perPage = 2;
        const page = req.params.page ? req.params.page : 1;

        // Fetching products from MySQL database
        var q = 'SELECT * FROM jobs ORDER BY id DESC LIMIT ?, ?';
        const values = [(page - 1) * perPage, perPage];
        
        db.query(q, values, (err, data) => {
            if (err) return res.status(400).send({ err, success: false });
            return res.status(201).send({ data, message: "Industry jobs per page.", success: true });
        });
    } catch (e) {
        // console.error(e);
        return res.status(500).json({
            success: false,
            error: e,
            message: "Error in per page ctrl Count"
        });
    }
};


// apply
export const jobPostApplyController = async(req, res)  =>{
 
    const {u_id,c_id} = req.body;

// if(!Title || !Description || !Location || !Salary || !Deadline || !Industry ){
//     return res.status(200).send({message: "All the fields are required..", success: true})
// }
//     try{
//         var q =";
//         const Values = [c_id,Title,Description,Location,Salary,Deadline,Industry];
//         db.query(q,[Values],(err,data)=>{
//             if(err) return res.status(400).send({err, success: false});
//             return res.status(201).send({data, message: "Job Post created.", success: true})
//            })
//     }
// catch(error){
//     return res.status(400).send({error, message: "Error in creating job post.", success: true})
// }

}