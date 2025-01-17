import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import HeroSectionSignup from './HeroSectionSignup'
import { assets } from '../assets/assets'
import Footer from './Footer'

function MySignUp() {
    return (
        <>
            <HeroSectionSignup />

            <div style={{
                backgroundImage: `url(${assets.bg_hero})`,
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                height: '100vh', // Make the div take the full viewport height
            }} >
                <SignUp
                    appearance={{
                        baseTheme: dark,
                    }}
                    signInUrl='/signin'
                />
            </div>
            <br />

            <Footer />
        </>
    )
}


export default MySignUp