import React from 'react'
import Header from '../../component/Header/Header'
function Settings() {
  return (
    <div>  <Header />
    <>
  @{"{"}
  Layout = "_BlankLayout"; ViewData["Title"] = "Register Basic - Pages";
  {"}"}
  @section PageStyles {"{"}
  <link rel="stylesheet" href="~/vendor/css/pages/page-auth.css" />
  {"}"}
  @* ************** Content ************** *@
  <div className="position-relative">
    <div className="authentication-wrapper authentication-basic container-p-y">
      <div className="authentication-inner py-6 mx-4">
        {/* Register Card */}
        <div className="card p-7">
          {/* Logo */}
          <div className="app-brand justify-content-center mt-5">
            <a href="/" className="app-brand-link gap-3">
              <span className="app-brand-logo demo">
                @await Html.PartialAsync("../_Partials/_Macros")
              </span>
              <span className="app-brand-text demo text-heading fw-semibold">
                @TempData.Peek("appName")
              </span>
            </a>
          </div>
          {/* /Logo */}
          <div className="card-body mt-1">
            <h4 className="mb-1">Adventure starts here 🚀</h4>
            <p className="mb-5">Make your app management easy and fun!</p>
            <form
              id="formAuthentication"
              className="mb-5"
              action="~/"
              method="GET"
            >
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                  autofocus=""
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="form-floating form-floating-outline mb-5">
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="mb-5 form-password-toggle">
                <div className="input-group input-group-merge">
                  <div className="form-floating form-floating-outline">
                    <input
                      type="password"
                      id="password"
                      className="form-control"
                      name="password"
                      placeholder="············"
                      aria-describedby="password"
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                  <span className="input-group-text cursor-pointer">
                    <i className="ri-eye-off-line ri-20px" />
                  </span>
                </div>
              </div>
              <div className="mb-5 py-2">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="terms-conditions"
                    name="terms"
                  />
                  <label
                    className="form-check-label"
                    htmlFor="terms-conditions"
                  >
                    I agree to
                    <a href="javascript:void(0);">privacy policy &amp; terms</a>
                  </label>
                </div>
              </div>
              <button className="btn btn-primary d-grid w-100 mb-5">
                Sign up
              </button>
            </form>
            <p className="text-center mb-5">
              <span>Already have an account?</span>
              <a href="/Auth/LoginBasic">
                <span>Sign in instead</span>
              </a>
            </p>
          </div>
        </div>
        {/* Register Card */}
        <img
          src="~/img/illustrations/tree-3.png"
          alt="auth-tree"
          className="authentication-image-object-left d-none d-lg-block"
        />
        <img
          src="~/img/illustrations/auth-basic-mask-light.png"
          className="authentication-image d-none d-lg-block"
          height={172}
          alt="triangle-bg"
          data-app-light-img="illustrations/auth-basic-mask-light.png"
          data-app-dark-img="illustrations/auth-basic-mask-dark.png"
        />
        <img
          src="~/img/illustrations/tree.png"
          alt="auth-tree"
          className="authentication-image-object-right d-none d-lg-block"
        />
      </div>
    </div>
  </div>
</>

    
    </div>
  )
}

export default Settings