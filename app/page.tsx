import React from 'react'
import { StrictMode } from "react";
import HeroMain from './_components/Hero/Hero3D/HeroLanding';
import { Toaster } from "@/app/_components/ui/toaster"
import ContactMain from './_components/Contact/ContactMain';


export default function MainPage() {
    return (
        <StrictMode>
            <main className='flex flex-col items-center justify-center mx-auto'>
                <HeroMain />
                <ContactMain />
                <Toaster />
            </main>
        </StrictMode>
    )
}

