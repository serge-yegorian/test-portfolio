"use client"

import React, {useState} from 'react'
import GithubIcon from '../../public/github.svg'
import MastodonIcon from '../../public/mastodon.svg'
import Link from 'next/link'
import Image from 'next/image'

const EmailSection = () => {

    const [emailSubmitted, setEmailSubmitted] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = {
            email: e.target.email.value,
            subject: e.target.subject.value,
            message: e.target.email.value
        }
        const JSONdata = JSON.stringify(data);
        const endpoint = "/api/send";

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSONdata
        }

        const response = await fetch(endpoint, options)
        const resData = await response.json();

        if (response.status === 200) {
            console.log('Message sent!')
            setEmailSubmitted(true)
        }

        console.log(resData)
    }

  return (
    <section className='grid md:grid-cols-2 my-12 md:py-24 gap-4 relative'>
        <div className='bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -traslate-x-1/2 -translate-1/2'>
            {/* Primary Color Sphere */}
        </div>
      <div className="relative z-10">
        <h5 className='text-xl font-bold text-white my-2'>Let's Connect</h5>
        <p className='text-[#ADB7BE] mb-4 max-w-md'>
            We are constantly looking for new opportunities! Our inbox is always open. Whether you have a question or just want to say hi, we will do our best to respond to you as quickly as possible!
        </p>
        <div className='social-links flex flex-row gap-2'>
            <Link href={'github.com'}>
                <Image  src={GithubIcon} alt='github icon' width={40} height={40}/>
            </Link>
            <Link href={'mastodon.social'}>
                <Image  src={MastodonIcon} alt='mastodon icon' width={50} height={50}/>
            </Link>
        </div>
      </div>
      <div>
        <form className='relative z-10 flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='mb-2'>
                <label htmlFor="email" className='text-white block text-sm font-medium py-1'>
                    Email:
                </label>
                <input type={'email'} placeholder='jon@gmail.com' name="email" id="email" required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            </div>
            <div className='mb-2'>
                <label htmlFor="subject" className='text-white block text-sm font-medium py-1'>
                    Subject:
                </label>
                <input type={'text'} placeholder='I need a website' name="subject" id="subject" required className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'/>
            </div>
            <div className='mb-6'>
                <label htmlFor='message' className='text-white block text-sm py-1 font-medium'>
                    Message:
                </label>
                <textarea id='message' name='message' placeholder="Hi, Serge I would like to talk about..." className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'>
                </textarea>
            </div>
            <button type='submit' className='-mt-4 bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'>Send Message</button>
            {
                emailSubmitted && (
                    <p className='text-green-500 text-sm mt-2'>
                        Email sent successfully!
                    </p>
                )
            }
        </form>
      </div>
    </section>
  )
}

export default EmailSection
