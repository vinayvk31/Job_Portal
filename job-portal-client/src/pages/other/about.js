import React from 'react'
import './other.css'
import Footer from '../../components/footer/footer'
const About = () => {
  return (<>
    <div>
    <section className="about">
  <h1>About Us</h1>
  <p style={{ fontWeight: 'bold' }}>Welcome to our job portal. Connecting job seekers with opportunities.</p>
  <div className="about-info">
    <div className="about-img">
      <img src="https://dummyimage.com/640x360/fff/aaa" alt="Company Logo" />
    </div>
    <div>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec justo sit amet sapien semper...</p>
    </div>
  </div>
</section>

<section className="team">
  <h1>Meet Our Team</h1>
  <div className="team-cards">
    {/* Card 1 */}
    <div className="card">
      <div className="card-img">
        <img src="https://dummyimage.com/640x360/fff/aaa" alt="Team Member 1" />
      </div>
      <div className="card-info">
        <h2 className="card-name">John Doe</h2>
        <p className="card-role">HR Manager</p>
        <p className="card-email">john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>

    {/* Card 2 */}
    <div className="card">
      <div className="card-img">
        <img src="https://dummyimage.com/640x360/fff/aaa" alt="Team Member 2" />
      </div>
      <div className="card-info">
        <h2 className="card-name">Jane Smith</h2>
        <p className="card-role">Recruitment Specialist</p>
        <p className="card-email">jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="card">
      <div className="card-img">
        <img src="https://dummyimage.com/640x360/fff/aaa" alt="Team Member 3" />
      </div>
      <div className="card-info">
        <h2 className="card-name">Alex Johnson</h2>
        <p className="card-role">Tech Lead</p>
        <p className="card-email">alex@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
</section>

</div>
<Footer/>
</>

  )
}

export default About