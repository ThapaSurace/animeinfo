import React from 'react'
import { Youtube,Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  return (
    <div className='px-6 mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-7xl mx-auto py-6'>
        <div>
            <h1 className='font-bold text-lg mb-2'>Navigation</h1>
            <ul>
                <li className='font-light mb-1 md:mb-2'>Browse Popular</li>
                <li className='font-light mb-1 md:mb-2'>Browse Simulcasts</li>
                <li className='font-light mb-1 md:mb-2'>Release Calendar</li>
                <li className='font-light mb-1 md:mb-2'>News</li>
                <li className='font-light mb-1 md:mb-2'>Games</li>
            </ul>
        </div>
        <div>
        <h1 className='font-bold text-lg mb-2'>Connect With Us</h1>
            <ul>
                <li className='font-light mb-1 md:mb-2 flex gap-1 items-center'><Youtube /><span>Youtube</span></li>
                <li className='font-light mb-1 md:mb-2 flex gap-1 items-center'> <Facebook /><span>Facebook</span></li>
                <li className='font-light mb-1 md:mb-2 flex gap-1 items-center'><Twitter /><span>Twitter</span></li>
                <li className='font-light mb-1 md:mb-2 flex gap-1 items-center'><Instagram /><span>Instagram</span></li>
            </ul>
        </div>
        <div>
        <h1 className='font-bold text-lg mb-2'>Crunchyroll</h1>
            <ul>
                <li className='font-light mb-1 md:mb-2'>About</li>
                <li className='font-light mb-1 md:mb-2'> Help/FAQ</li>
                <li className='font-light mb-1 md:mb-2'>Terms of Use</li>
                <li className='font-light mb-1 md:mb-2'>Privacy Policy</li>
            </ul>
        </div>
        <div>
        <h1 className='font-bold text-lg mb-2'>Account</h1>
            <ul>
                <li className='font-light mb-1 md:mb-2'>Create Account</li>
                <li className='font-light mb-1 md:mb-2'>Log In</li>
            </ul>
        </div>
        <div className='py-1 text-slate-400'>
           <span className='mr-4 text-xl'>Anime Hub</span><span className=' italic text-sm'>© Crunchyroll, LLC</span>
        </div>
    </div>
  )
}

export default Footer