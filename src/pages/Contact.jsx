import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header1 from '../components/Common/Header1';
import Header2 from '../components/Common/Header2';
import Header3 from '../components/Common/Header3';
import Footer from '../components/Common/Footer';

const Contact = () => {
    const header1Ref = useRef(null);
    const ticking = useRef(false);
    const [setScrolled] = useState(false);

    const handleScroll = useCallback(() => {
        if (!ticking.current) {
            ticking.current = true;
            window.requestAnimationFrame(() => {
                const header1Height = header1Ref.current ? header1Ref.current.offsetHeight : 0;
                const currentScrollY = window.scrollY;
                setScrolled(currentScrollY > header1Height);
                ticking.current = false;
            });
        }
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', handleScroll);
            ticking.current = false;
        };
    }, [handleScroll]);

    const validationSchema = Yup.object({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        phone: Yup.string().required('Phone is required'),
        message: Yup.string().required('Message is required'),
        agree: Yup.bool().oneOf([true], 'You must agree to the privacy policy'),
    });

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            company: '',
            message: '',
            agree: false,
        },
        validationSchema,
        onSubmit: (values) => {
            toast.success('Form submitted successfully!');
            console.log(values);
        },
    });

    return (
        <>
            <ToastContainer />
            <div className='w-full h-full overflow-x-hidden bg-white flex flex-col items-center text-black'>
                <Header1 />
                <Header3 />
                <Header2 />

                <div className='bg-black w-full h-[35rem] relative flex justify-center items-center mb-[5rem]'>
                    <img className='h-full w-full object-cover absolute z-10' src="/assets/images/image-home1.png" alt="error" />
                    <div className='w-full h-full bg-black absolute opacity-[50%] z-20'></div>
                    <div className='w-[50rem] h-[20rem] relative z-50 flex flex-col justify-center items-center px-4'>
                        <h1 className='font-bold text-[4rem] text-white'>Contact Us</h1>
                        <p className='font-medium text-[1.2rem] text-white mt-4'>Book a meeting or call with the team.</p>
                    </div>
                </div>

                <div className='w-[70%] flex flex-row justify-between mb-[4rem]'>
                    {/* Left Contact Info */}
                    <div className='w-[40%] flex flex-col px-[3rem] py-[2rem] gap-10'>
                        <div>
                            <h1 className='text-[3rem] font-medium'>Our Contacts</h1>
                            <p className='text-[1.1rem]'>Contrary to popular belief, Lorem Ipsum is not simply random text...</p>
                        </div>
                        <div>
                            <h2 className='text-[2rem] font-medium'>Address</h2>
                            <p className='text-[1.1rem]'>245 King Street, Touterie Victoria 8520 Australia</p>
                        </div>
                        <div>
                            <h2 className='text-[2rem] font-medium'>Phone</h2>
                            <p className='text-[1.1rem]'>92-012345679</p>
                            <p className='text-[1.1rem]'>92-012345679</p>
                        </div>
                        <div>
                            <h2 className='text-[2rem] font-medium'>Email</h2>
                            <p className='text-[1.1rem]'>email@example.com</p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className='w-[59%]'>
                        <h1 className='text-[3rem] font-medium mb-[3rem]'>Quick Contact Form</h1>
                        <form onSubmit={formik.handleSubmit} className='flex flex-col gap-[1.5rem]'>
                            <div className='flex gap-[1rem]'>
                                <div className='flex flex-col w-[23rem]'>
                                    <input
                                        name="name"
                                        placeholder="Your Name"
                                        className='rounded-[1rem] p-[0.5rem] text-[1.4rem] bg-gray-200'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.name}
                                    />
                                    {formik.touched.name && formik.errors.name && (
                                        <div className='text-red-500 text-[1rem]'>{formik.errors.name}</div>
                                    )}
                                </div>
                                <div className='flex flex-col w-[23rem]'>
                                    <input
                                        name="email"
                                        type="email"
                                        placeholder="Your Email"
                                        className='rounded-[1rem] p-[0.5rem] text-[1.4rem] bg-gray-200'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.email}
                                    />
                                    {formik.touched.email && formik.errors.email && (
                                        <div className='text-red-500 text-[1rem]'>{formik.errors.email}</div>
                                    )}
                                </div>
                            </div>

                            <div className='flex gap-[1rem]'>
                                <div className='flex flex-col w-[23rem]'>
                                    <input
                                        name="phone"
                                        placeholder="Your Phone"
                                        className='rounded-[1rem] p-[0.5rem] text-[1.4rem] bg-gray-200'
                                        onChange={formik.handleChange}
                                        onBlur={formik.handleBlur}
                                        value={formik.values.phone}
                                    />
                                    {formik.touched.phone && formik.errors.phone && (
                                        <div className='text-red-500 text-[1rem]'>{formik.errors.phone}</div>
                                    )}
                                </div>
                                <div className='flex flex-col w-[23rem]'>
                                    <input
                                        name="company"
                                        placeholder="Your Company (Optional)"
                                        className='rounded-[1rem] p-[0.5rem] text-[1.4rem] bg-gray-200'
                                        onChange={formik.handleChange}
                                        value={formik.values.company}
                                    />
                                </div>
                            </div>

                            <div className='flex flex-col w-full'>
                                <textarea
                                    name="message"
                                    placeholder="Describe your issue"
                                    className='h-[15rem] rounded-[1rem] p-[1rem] text-[1.3rem] bg-gray-200'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    value={formik.values.message}
                                />
                                {formik.touched.message && formik.errors.message && (
                                    <div className='text-red-500 text-[1rem]'>{formik.errors.message}</div>
                                )}
                            </div>

                            <div className='w-full flex justify-between items-center'>
                                <div className='flex items-center gap-[0.5rem]'>
                                    <input
                                        type="checkbox"
                                        name="agree"
                                        className='h-[1.5rem] w-[1.5rem] rounded-full cursor-pointer'
                                        onChange={formik.handleChange}
                                        checked={formik.values.agree}
                                    />
                                    <span className='text-[1.1rem] font-medium'>I agree to the privacy policy</span>
                                </div>
                                <button type="submit"
                                    className='bg-primary p-[1rem] rounded-[1rem] w-[10rem] text-[1.3rem] font-medium hover:bg-secondary hover:text-white hover:scale-[110%] transition-all duration-1000'>
                                    Submit
                                </button>
                            </div>
                            {formik.touched.agree && formik.errors.agree && (
                                <div className='text-red-500 text-[1rem] mt-[-1rem]'>{formik.errors.agree}</div>
                            )}
                        </form>
                    </div>
                </div>

                {/* Google Map Section */}
                <div id="map" className="bg-black w-[60%] h-[30rem] rounded-xl overflow-hidden shadow-lg mb-10">
                    <iframe
                        title="Google Map"
                        width="100%"
                        height="100%"
                        className="border-0"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src="https://www.google.com/maps/embed/v1/place?q=London,+England&key=AIzaSyACPSdVs9n7NWjI1wixKMkNcJJYGdBq8ZE"
                    ></iframe>
                </div>
               <Footer />
            </div>
            
        </>
    );
};

export default Contact;
