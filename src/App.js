import React from 'react';
import { Routes, Route, useNavigate } from
 
'react-router-dom';
import Home from
 
'./components/Pages/Home';
import Dashboard from
 
'./components/Pages/Dashboard';
import Students from
 
'./components/Pages/Students';
import Abotus from './components/Pages/abotus'; // Import the Abotus component
import ManageStudents from './components/Pages/ManageStudents';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar'; // Import the Sidebar component

function App() {
  const [inactive, setInactive] = useState(false);
  const [toggleOff, setToggleOff] = useState(false);

  const navigate = useNavigate();

  const [stuData, setStuData] = useState([]);

  const studentInitialValues = {
    FirstName: '',
    LastName: '',
    Course: '',
    NPM: '',
    PhoneNumber: '',
  };

  const [studentFormData, setStudentFormData] = useState(studentInitialValues);

  const handleSelected = (id) => {
    const selectedData = stuData.filter((row) => row.id === id)[0];

    setStudentFormData(selectedData);
    navigate('/students/ManageStudents');
  };

  return (
    <div
 
className="App">

      
<div
 
className="wrapper">

        
<Sidebar

          
onCollapse={(inactive) => setInactive(inactive)}
          onToggleOff={(toggleOff) => setToggleOff(toggleOff)}
        />

        <Navbar
 
inactive={inactive}
 
toggleOff={toggleOff} />


        
<Routes>

          
<Route
 
exact
 
path="/"
 
element={<Home
 
inactive={inactive}
 
toggleOff={toggleOff} />} />
          <Route
 
exact
 
path="/tentang-kami" element={<Abotus inactive={inactive}
 
toggleOff={toggleOff} />} />
          <Route

            
exact

            
path="/dashboard"

            
element={
              <Dashboard

                
inactive={inactive}

                
toggleOff={toggleOff}

                
stuData={stuData}

                
setStuData={setStuData}
              />
            }
          />
          <Route

            
exact

            
path="/students"

            
element={
              <Students

                
inactive={inactive}

                
toggleOff={toggleOff}

                
handleSelected={handleSelected}

                
stuData={stuData}

                
setStuData={setStuData}
              />
            }
          />
          <Route

            
exact

            
path="/students/ManageStudents"

            
element={
              <ManageStudents

                
inactive={inactive}

                
toggleOff={toggleOff}

                
handleSelected={handleSelected}

                
studentFormData={studentFormData}

                
setStudentFormData={setStudentFormData}

                
studentInitialValues={studentInitialValues}

                
stuData={stuData}

                
setStuData={setStuData}
              />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;