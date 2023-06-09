import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import Banner from '../partials/Banner';

function SignUp() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        <section className="relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
                <h1 className="h1">PigeonsAI will revolutionize your sales process.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                
               
                <form action="https://api.web3forms.com/submit" method="POST" id="form">
                <input type="hidden" name="access_key" value="65f438b6-8ea3-4a59-ba2e-a5896671880d" />
                  <input type="hidden" name="subject" value="New Submission from Web3Forms" />
                  <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                  
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="full-name">Full Name <span className="text-red-600">*</span></label>
                      <input id="full-name" type="text" className="form-input w-full text-gray-300" placeholder="First and last name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="company-name">Company Name <span className="text-red-600">*</span></label>
                      <input id="company-name" type="text" className="form-input w-full text-gray-300" placeholder="Your company or app name" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="email">Work Email <span className="text-red-600">*</span></label>
                      <input id="email" type="email" className="form-input w-full text-gray-300" placeholder="you@yourcompany.com" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <label className="block text-gray-300 text-sm font-medium mb-1" htmlFor="message">Message <span className="text-red-600"></span></label>
                      <textarea rows="5" name="message" id="message" placeholder="Your Message" className="form-textarea w-full text-gray-300"></textarea>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap -mx-3 mb-4">
                    <div className="w-full px-3">
                      <button className="btn text-black bg-purple-600 hover:bg-purple-700 w-full">Request Demo</button>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500 text-center  -mx-3 mt-6">
                    I agree to be contacted by PigeonsAI <br/>about demo or services.
                  </div>
                </form>

                
                {/* <div className="text-gray-400 text-center mt-6">
                  Already using Open PRO? <Link to="signin" className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out">Sign in</Link>
                </div> */}
              </div>

            </div>
          </div>
        </section>

      </main>

      <Banner />

    </div>
  );
}

export default SignUp;