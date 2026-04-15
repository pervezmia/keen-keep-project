import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';
import { RiTwitterXLine } from 'react-icons/ri';

const FooterPage = () => {
    return (
        <div className='w-full bg-[#244D3F] py-10 mt-5 mb-0'>
            <div className='max-w-[70%] mx-auto text-center'>
                <h2><span className='font-semibold'>Keen</span>Keeper</h2>
                <p>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
                <p className='font-semibold my-5'>Social Links</p>
                <div className='gap-10 flex items-center justify-center '>
                    <div className='bg-green-300 p-3 w-3 h-3 rounded-full flex items-center justify-center'><Link href={''}> <FaYoutube /></Link></div>
                    <div className='bg-green-300 p-3 w-3 h-3 rounded-full flex items-center justify-center'><Link href={''}> <FaFacebookF /></Link></div>
                    <div className='bg-green-300 p-3 w-3 h-3 rounded-full flex items-center justify-center'><Link href={''}> <RiTwitterXLine /></Link></div>
                    
                </div>
            </div>
        </div>
    );
};

export default FooterPage;