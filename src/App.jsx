import React from 'react'
import Sidebar from './components/Sidebar/Sidebar'
import Home from './components/Home';
import Main from './components/Main/Main'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
import { BrowserRouter, Routes, Route } from 'react-router';
import Contact from './components/Contact';
import MySignIn from './components/MySignIn';
import MySignUp from './components/MySignUp';
import NonSignedInMain from './components/NonSignedInMain';

const App = () => {
  return (
    <>
      <SignedOut>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/nonuser' element={<NonSignedInMain />} />
            <Route path="/signin" element={<MySignIn />} />
            <Route path="/signup" element={<MySignUp />} />
          </Routes>
        </BrowserRouter>
      </SignedOut>

      <div className="maindiv">
        <SignedIn>
          <BrowserRouter> {/* so i can be able to use "useNavigate" inside Main.jsx */}
            <Sidebar />
            <Main />
          </BrowserRouter>
        </SignedIn>
      </div>
    </>
  );
}

export default App