import React from 'react'
import Footer from '../Footer';


const Home = ({ inactive, toggleoff }) => {
  return (
    <div>
      <div
        className={`content ${inactive ? 'inactive' : ''} ${
          toggleoff ? 'toggleoff' : ''
        }`}
      >

        <div className="container">
          <div className="heading d-flex my-2">
            <h1 style={{ fontFamily: 'Arvo' }}>Selamat Datang Di Kelompok Kami</h1>

          </div>
          <div className="container col-xs-6 col-sm-10 col-md-12 col-lg-12">
            <p>
              Salam dari kelompok kami yang terdiri dari empat orang! Kami bergabung dengan tujuan bersama menghadapi tantangan ujian praktikum pemrograman web kami, dengan fokus menguasai operasi CRUD dan lebih dari itu. Izinkan kami memperkenalkan diri sebagai tim yang berdedikasi untuk memberikan keunggulan dalam setiap baris kode.
              <br />
              Kami percaya pada kekuatan kolaborasi dan kerja keras. Misi kami bukan hanya menyelesaikan tugas, tetapi juga melebihi harapan. Saat kami memulai perjalanan pemrograman ini, tujuan kami adalah belajar, tumbuh, dan menciptakan sesuatu yang luar biasa bersama-sama. Pantau terus perkembangan menarik yang akan kami bawa untuk Anda!
            </p>
            <img src={"https://www.aalpha.net/wp-content/uploads/2021/02/reactjs-framework.gif"} id="homeImage" alt=""/>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home