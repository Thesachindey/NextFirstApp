"use client";
import { useRouter } from 'next/navigation';
import React from 'react';

const Banner = () => {
const router= useRouter();

const handelClick=()=>{
   const password= prompt("Enter the password to share your story");
   if(password==="1234"){
    // console.log(router);
    router.push('/dashboard')
   }
}
    
    return (
        <div>
            <div
  className="hero min-h-screen"
  style={{
    backgroundImage:
      "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
      <p className="mb-5">
        This is the FistNext solution please share your feedback and story.
      </p>
      <button onClick={handelClick} className="btn btn-primary">Share Story</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;