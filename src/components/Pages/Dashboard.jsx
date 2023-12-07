import React, { useState } from 'react'
import Footer from '../Footer';

const Dashboard = ({ inactive, toggleoff, stuData }) => {
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >
        <div className="container ">
          <h1> Statistik Kami </h1>
          <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
          <p>
          Selamat datang di halaman Statistik kami. Di sini, Anda dapat melihat beberapa informasi penting terkait dengan keberhasilan kami dalam memberikan layanan pendidikan. Mari simak beberapa statistik di bawah ini:
          </p>
          </div>
          <div className="row">
            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-brown order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Total Students</h6>
                  <h2 className="text-right">
                    <i className="fa-solid fa-graduation-cap mx-2"></i>
                    <span>{stuData.length}</span>
                  </h2>
                  <p className="m-b-0">
                    Satisfied Students
                    <span className="f-right">{stuData.length}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-xl-3">
              <div className="card bg-c-green order-card">
                <div className="card-block">
                  <h6 className="m-b-20">Active Visitors</h6>
                  <h2 className="text-right">
                    <i className="fa-solid fa-eye mx-2"></i>
                    <span>5</span>
                  </h2>
                  <p className="m-b-0">
                    Completed Orders<span className="f-right">5</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Dashboard