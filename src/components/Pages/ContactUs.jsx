import React from 'react';

const ContactUs = () => {
  const teamMembers = [
    { name: 'John Doe', npm: '111222333', socialMedia: 'Twitter' },
    { name: 'Jane Doe', npm: '444555666', socialMedia: 'Facebook' },
    { name: 'Bob Smith', npm: '777888999', socialMedia: 'Instagram' },
    { name: 'Alice Johnson', npm: '123456789', socialMedia: 'LinkedIn' },
  ];

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <div className="row">
        {teamMembers.map((member, index) => (
          <div key={index} className="col-md-6 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">NPM: {member.npm}</p>
                <p className="card-text">Social Media: {member.socialMedia}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactUs;
