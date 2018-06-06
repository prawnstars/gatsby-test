import React from 'react'
import Link from 'gatsby-link'
import fontawesome from '@fortawesome/fontawesome'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope'
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter'


fontawesome.library.add(faEnvelope, faTwitter);


const IndexPage = () => (
  <div className="wrapper">
    <div className="overlay"></div>
    <div className="masthead">
      <div className="masthead-bg"></div>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-12 my-auto">
            <div className="masthead-content text-white py-5 py-md-0">
              <div className="logo">
                <img src="img/logo-roar.svg" className="logo-image" />
                <span className="logo-text">Roar</span>
              </div>
              <p className="mb-5">
                <strong>Roar for Jira</strong> is a voice assistant that makes working with JIRA
                more direct and intuitive, bringing back the natural flow to meetings.
                It saves the team time and effort without a click of the mouse.
              </p>
              <p>
                Subscribe to get updates on our progress.
              </p>
              {/*Begin MailChimp Signup Form*/}
              <form action="https://roar.us17.list-manage.com/subscribe/post?u=121ef695e491fca3d3456fae4&amp;id=3085a35b0e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
                  {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups*/}
                  <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                    <input type="text" name="b_121ef695e491fca3d3456fae4_3085a35b0e" tabIndex="-1" value="" />
                  </div>
                  <div className="input-group input-group-lg input-group-newsletter">
                    <input type="email" name="EMAIL" className="form-control" placeholder="Enter your email..." aria-label="Enter your email..." required />
                    <div className="input-group-append">
                      <input id="mc-embedded-subscribe" type="submit" value="Subscribe" name="subscribe" className="btn btn-primary" />
                    </div>
                  </div>
              </form>
              {/*End mc_embed_signup*/}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="social-icons">
      <ul className="list-unstyled text-center mb-0">
        <li className="list-unstyled-item">
          <a href="#">
            {/* <FontAwesomeIcon icon="coffee" /> */}
            <FontAwesomeIcon icon={['fab', 'twitter']} />
            {/*<i className="fa fa-twitter"></i>*/}
          </a>
        </li>
        <li className="list-unstyled-item">
          <a href="#">
            <FontAwesomeIcon icon={['fas', 'envelope']} />
            {/* <i className="fa fa-envelope"></i> */}
          </a>
        </li>
      </ul>
    </div>
  </div>
)


export default IndexPage
