import React from 'react'

const NotFoundPage = () => (
  <div>
    <div class="overlay"></div>
    <div class="masthead">
      <div class="masthead-bg"></div>
      <div class="container h-100">
        <div class="row h-100">
          <div class="col-12 my-auto">
            <div class="masthead-content text-white py-5 py-md-0">
              <div class="logo">
                <img src="img/logo-roar.svg" class="logo-image" />
                <span class="logo-text">Roar</span>
              </div>
              <h2>Page Not Found</h2>
              <p class="mb-5">
                Sorry, but that page doesn't exist.
              </p>
              <p class="mb-5">
                You should check out our <a href="/">voice assistant</a>, though.
                It's pretty cool.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="social-icons">
      <ul class="list-unstyled text-center mb-0">
        <li class="list-unstyled-item">
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
        </li>
        <li class="list-unstyled-item">
          <a href="#">
            <i class="fa fa-envelope"></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
)

export default NotFoundPage
