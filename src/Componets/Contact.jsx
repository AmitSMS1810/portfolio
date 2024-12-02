import axios from 'axios'
import React from 'react'
import { useForm } from "react-hook-form"
import toast from 'react-hot-toast'

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            name: data.name,
            email: data.email,
            message: data.message,
        }
        try {
            await axios.post('https://getform.io/f/avrrpwna', userInfo);
            toast.success('your message has been send');
        }
        catch (err) {
            console.log(err);
            toast.error('Something went rong');
        }
    }
    return (
        <>
            <div name="ContactUs" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
                <h1 className='text-3xl font-bold mb-4'>Contact me </h1>
                <span>Please fill out the form below contact me</span>
                <div className='flex flex-col items-center justify-center'>
                    <form
                        onSubmit={handleSubmit(onSubmit)}                        
                        className='bg-slate-200 w-96 px-8 py-8 rounded-md mt-4'
                    >
                        <h1 className='text-xl font-semibold mb-4'>Send your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Full Name
                            </label>
                            <input type="text"
                                {...register("name", { required: true })}
                                id='name'
                                name='name'
                                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter your Full Name' />
                            {errors.name && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Email Address
                            </label>
                            <input type="email"
                                {...register("email", { required: true })}
                                id='email'
                                name='email'
                                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter your Email' />
                            {errors.email && <span>This field is required</span>}
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700'>
                                Message
                            </label>
                            <textarea type="text"
                                {...register("message", { required: true })}
                                id='message'
                                name='message'
                                className='shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                                placeholder='Enter your Message' />
                            {errors.message && <span>This field is required</span>}
                        </div>
                        <button type='submit' className='bg-black text-white py-2 px-3 rounded-md hover:bg-slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact
