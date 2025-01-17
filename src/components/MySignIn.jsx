import React from 'react'
import { SignIn, SignUp } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import HeroSectionSignin from './HeroSectionSignin'
import { assets } from '../assets/assets'
import Footer from './Footer'

function MySignIn() {
    return (
        <>
            <HeroSectionSignin />

            <div style={{
                backgroundImage: `url(${assets.bg_hero})`,
                display: 'flex',
                justifyContent: 'center', // Center horizontally
                alignItems: 'center', // Center vertically
                height: '100vh', // Make the div take the full viewport height
            }} >
                <SignIn
                    appearance={{
                        baseTheme: dark,
                    }}
                    signUpUrl='/signup'
                />
            </div>

            <br />

            <Footer />
        </>
    )
}


export default MySignIn