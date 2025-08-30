import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
       <footer style={{ backgroundColor: "#00416A" }} className="  lg:px-10 px-4 text-white ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="grid md:grid-cols-4 gap-12 mb-8 py-16">
            <div>
              <div className="flex items-cen   ter space-x-3 mb-4">
              <img className='w-20' src="/logo.png" alt="" />
              </div>
              <p className="  leading-relaxed">
                AI-powered financial intelligence for smarter business spending decisions and cost optimization.
              </p>
            </div>

            <div>
              <h4 className="font-semibold  mb-4">Product</h4>
              <ul className="space-y-3">
                <li>
                  <a href="/product#SpendScore" className="hover:text-slate-900 transition-colors">
                    SpendScore 
                  </a>

                </li>
                <li>
              
                  <Link 
                     onClick={() => window.scrollTo(0, 0)}
                    className="hover:text-slate-900 transition-colors" to='/pricing'>Pricing</Link>
                </li>
                <li>
                <Link 
                   onClick={() => window.scrollTo(0, 0)}
                  className="hover:text-slate-900 transition-colors" to='/Resources'>Resources</Link>

                </li>
            
              </ul>
            </div>

            <div>
              <h4 className="font-semibold  mb-4">Company</h4>
              <ul className="space-y-3">
                <li>
                 <Link 
                    onClick={() => window.scrollTo(0, 0)}
                   className="hover:text-slate-900 transition-colors" to='/Company'>About US</Link>
                </li>
                <li>
                <Link className="hover:text-slate-900 transition-colors" to='/Company'>Our Team</Link>
                </li>
           
                <li>
                           <Link 
                              onClick={() => window.scrollTo(0, 0)}
                             className="hover:text-slate-900 transition-colors" to='/Company'>Contact Us</Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                     <Link 
                        onClick={() => window.scrollTo(0, 0)}
                       className="hover:text-slate-900 transition-colors" to='/Legal'>Privacy Policy</Link>
                </li>
                <li>
                <Link className="hover:text-slate-900 transition-colors" to='/Legal'>Term of Service</Link>
                </li>
                <li>
                 <Link 
                    onClick={() => window.scrollTo(0, 0)}
                   className="hover:text-slate-900 transition-colors" to='/Legal'>Cookie Policy</Link>
                </li>
               
              </ul>
            </div>
          </div>

          <div className="border-t py-4 border-slate-200 pt-4 text-center">
            <p className="text-slate-200">&copy; 2024 SpendScore. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
