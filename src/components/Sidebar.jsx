import React, { useEffect, useState } from 'react'
import MenuItem from './MenuItem'
// import { Link } from 'react-router-dom';







const menuItems = [
  { name: 'Home', to: '/', icon: 'fa-solid fa-house' },
  { name: 'Dashboard', to: '/dashboard', icon: 'bi bi-speedometer2' },
  {
    name: 'mahasiswa', 
    to: '/students',
    subMenus: [{ name: 'Manage Mahasiswa', to: '/students/Managestudents' }],
    icon: 'fa-solid fa-user-graduate',
  },
]

const Sidebar = ({ onCollapse, onToggleOff }) => {
  const [inactive, setInactive] = useState(false)
  const [toggleoff, setToggleoff] = useState(false)
  
  useEffect(() => {
    if (inactive) {
      document.querySelectorAll('.sub-menu').forEach((el) => {
        el.classList.remove('active')
      })
    }

    window.addEventListener('resize', function () {
      if (window.innerWidth < 768) {
        setInactive(true)
      } else {
        setInactive(false)
      }
    })

    window.addEventListener('resize', function () {
      if (window.innerWidth < 496) {
        setToggleoff(true)
      } else {
        setToggleoff(false)
      }
    })

    onCollapse(inactive)
    onToggleOff(toggleoff)
  }, [inactive, toggleoff])

  return (
  
    <div
      className={`side-menu ${inactive ? 'inactive' : ''} ${
        toggleoff ? 'toggleoff' : ''
      }`}
    >
      
      <div className="top-section">
        <div className="logo">
          <img src={"https://pluspng.com/img-png/react-logo-png-react-logo-png-img-900-900-free-transparent-react-png-900x900.jpg"} alt="react-logo" />
        </div>
        <h3>Kelompok web</h3>
      </div>


      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenus={menuItem.subMenus}
              icon={menuItem.icon}
              onClick={() => {
                if (inactive) {
                  setInactive(false)
                }
              }}
            />
          ))}
        </ul>
      </div>

      <div className="toggle-menu-btn" onClick={() => setInactive(!inactive)}>
        {inactive ? (
          <i className="bi bi-arrow-right-square-fill"></i>
        ) : (
          <i className="bi bi-arrow-left-square-fill"></i>
        )}
      </div>

    </div>

  )
}

export default Sidebar