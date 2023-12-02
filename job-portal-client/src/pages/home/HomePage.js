import React from 'react'
import Hero from '../../components/Hero/Hero'
import JobByCategory from '../../components/jobbycategory/JobByCategory'
import JpbListingbyLoad from '../../components/jobsListing/jpbListingbyLoad'
import Footer from '../../components/footer/footer'

const HomePage = () => {
  return (<>
    <Hero/>
    <JobByCategory/>
    <JpbListingbyLoad/>
    <Footer/>
  </>)
}

export default HomePage