import React from 'react';
import Footer from '../Footer';

const Abotus = ({ inactive, toggleoff }) => {
  const teamMembers = [
    { name: 'Labib Faruq Afifi', npm: '50421742', class: '3IA12' },
    { name: 'Riando Yonatan M ', npm: '51421298', class: '3IA12' },
    { name: 'sukamto irvan azis ', npm: '4565142144023789', class: '3IA12' },
    { name: 'Muhammad Firzal Anugerah Perdana ', npm: '7895142161723456', class: '3IA12' },
  ];

  return (
    <div
      className={`content ${inactive ? 'inactive' : ''} ${
        toggleoff ? 'toggleoff' : ''
      }`}
    >
      <div className="container">
        <div className="heading d-flex my-2">
          <h1 style={{ fontFamily: 'Arvo' }}>Tentang Kami</h1>
        </div>
        <div className="container">
          <p>
            Selamat datang di halaman Tentang Kami, di mana Anda dapat mengenal lebih dekat tim kami.          </p>
          <div className="row">
            {teamMembers.map((member, index) => (
              <div key={index} className="col-md-6 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{member.name}</h5>
                    <p className="card-text">NPM: {member.npm}</p>
                    <p className="card-text">Class: {member.class}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Abotus;
