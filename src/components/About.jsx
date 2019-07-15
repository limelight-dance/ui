import React from 'react'

function About() {
  return (
    <div className="about-page">
      <div className="cover">
        <div className="img-container">
          <img src="https://cdn.kevinchik.me/logo-white.png" alt="" />
        </div>
      </div>

      <div className="about">
        <h1>Limelight Dance Crew</h1>
        <p>
          Limelight Dance Club was founded on October 10th, 2015 by a group of talented dancers from
          the KW region of Ontario, Canada. We are a student-run, non-profit dance club. We make
          dance cover videos and offer free weekly dance tutorials. We also perform at various
          events, including Toronto K-pop Concert, Waterloo Chinese New Year, Annual Community All
          Style Battle, Fashion for Change Holiday Showcase and more. In 2017, we won 1st place at
          the Toronto K-pop World Festival hosted by the Korean Consulate and UTKSA. And also ranked
          within the top 10 K-pop cover groups in Canada. We are passionate about what we do, and we
          are GOOD at what we do. We are a group born to perform under the spotlight. We are number
          one.
        </p>
      </div>

      <div className="activities">
        <div>
          <h1>Tutorials</h1>
          <p>
            We hold free weekly dance tutorials at the University of Waterloo. These tutorials are
            open to the public. You can find more information on
            <a href="https://www.facebook.com/limelightdancecrew/">Facebook</a>
            .
          </p>
        </div>
        <div>
          <h1>Covers</h1>
          <p>
            We create Kpop dance cover videos and post them on
            <a href="https://www.youtube.com/channel/UC40GdqVnIsD23o_5fYvy3dQ">YouTube</a>
            . We hold auditions the select the best candidates for our covers.
          </p>
        </div>
        <div>
          <h1>Performances</h1>
          <p>
            We perform at various events and showcases. For performance inquiries, please email us
            at
            <a href="mailto:limelightmvcc@gmail.com">limelightmvcc@gmail.com</a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
