import React from 'react';
import {Link} from 'react-router-dom';
import './JobByCategory.css';
const JobByCategory = () => {
    // Define an array of industries
    const industries = [
        {
            industry: "Technology",
            id: 1
        }, {
            industry: "Management",
            id: 2
        }, {
            industry: "Finance",
            id: 3
        }, {
            industry: "Operations",
            id: 4
        },
       {industry: "Marketing",
      id:5},
       {industry: "Others",id:6}
    ];

    return (
        <div className="outer-jbc">
            <h1>Explore By Industry</h1>
            <div className="main-jbc">
                {industries.map((item, index) => {
                    return (<>
                  
                        <Link key={index} className="sectorOuter" to={`/Industry/${item.industry}`}>
                            <h2>{item.industry}</h2>
                        </Link>
                        </> )
                })}
            </div>
        </div>
    );
};

export default JobByCategory;
