import React, { useState, useRef, useEffect } from 'react';
import Header1 from '../components/Common/Header1';
import Header2 from '../components/Common/Header2';
import Header3 from '../components/Common/Header3';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '../components/Common/Footer';

const dropdownOptions = {
    truckType: ['Flatbed', 'Reefer', 'Dry Van', 'Step Deck', 'Other'],
    regions: ['Midwest', 'Nationwide', 'West Coast', 'East Coast', 'Other'],
    trailer: ['Yes', 'No'],
};

const Lease = () => {
    const [dropdowns, setDropdowns] = useState({ truckType: false, regions: false, trailer: false });
    const timers = useRef({});
    const refs = { truckType: useRef(null), regions: useRef(null), trailer: useRef(null) };
    const lastCloseTime = useRef(0);

    useEffect(() => {
        const handleClickOutside = (event) => {
            Object.entries(refs).forEach(([key, ref]) => {
                if (ref.current && !ref.current.contains(event.target)) {
                    setDropdowns((prev) => ({ ...prev, [key]: false }));
                    lastCloseTime.current = Date.now();
                }
            });
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            email: '',
            phone: '',
            companyName: '',
            truckType: '',
            dotNumber: '',
            mcNumber: '',
            regions: '',
            trailer: '',
            comments: '',
            agree: false,
        },
        validationSchema: Yup.object({
            fullName: Yup.string().required('Full name is required'),
            email: Yup.string().email('Invalid email').required('Email is required'),
            phone: Yup.string().required('Phone number is required'),
            dotNumber: Yup.string().required('DOT Number is required'),
            truckType: Yup.string().required('Truck Type is required'),
            regions: Yup.string().required('Region is required'),
            trailer: Yup.string().required('Trailer option is required'),
            agree: Yup.boolean().oneOf([true], 'You must agree to the privacy policy'),
        }),
        onSubmit: async (values, formikBag) => { // formikBag provides access to setTouched, setErrors, etc.
            // Manually validate all fields. This ensures formik.errors are up-to-date.
            const errors = await formikBag.validateForm(values);

            if (Object.keys(errors).length > 0) {
                // If there are errors, explicitly mark all fields as touched.
                // This makes sure all error messages are displayed.
                formikBag.setTouched(
                    Object.keys(values).reduce((acc, key) => {
                        acc[key] = true;
                        return acc;
                    }, {})
                );
                toast.error('Please correct the form errors.');
                console.log("Validation Errors:", errors);
            } else {
                // If no errors, proceed with successful submission
                toast.success('Form submitted successfully!');
                console.log('Form Values:', values);
                // Here you would typically send 'values' to your backend API
            }
        },
    });

    const renderDropdown = (key, options) => (
        <div
            ref={refs[key]}
            className='relative w-[30%]'
            onMouseEnter={() => {
                clearTimeout(timers.current[key]);
                const now = Date.now();
                const delay = Math.max(0, 1000 - (now - lastCloseTime.current));
                timers.current[key] = setTimeout(() => {
                    setDropdowns((prev) => ({ ...prev, [key]: true }));
                }, delay);
            }}
            onMouseLeave={() => {
                clearTimeout(timers.current[key]);
                timers.current[key] = setTimeout(() => {
                    setDropdowns((prev) => ({ ...prev, [key]: false }));
                    lastCloseTime.current = Date.now();
                }, 500);
            }}
        >
            <div className='bg-gray-200 h-[4rem] flex justify-between items-center p-[0.8rem] rounded-[0.5rem] text-[1.2rem] font-medium cursor-default'>
                {formik.values[key] || (key === 'trailer' ? 'Have trailer' : `Select ${key.replace(/([A-Z])/g, ' $1')}`)}
                <span className='text-xl text-gray-600'>▾</span>
            </div>
            {dropdowns[key] && (
                <ul className='absolute z-50 bg-primary text-white w-full rounded-[1rem] shadow-md mt-1 text-left text-[1.2rem] font-medium'>
                    {options.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => {
                                formik.setFieldValue(key, item);
                                formik.setFieldTouched(key, true, true);
                                setDropdowns((prev) => ({ ...prev, [key]: false }));
                                lastCloseTime.current = Date.now();
                            }}
                            className='px-4 py-2 hover:bg-gray-100 cursor-pointer hover:text-[1.2rem] hover:scale-[90%] hover:rounded-[1rem] transition-all duration-300 hover:text-black'
                        >
                            {item}
                        </li>
                    ))}
                </ul>
            )}
            {/* Display error message for dropdown */}
            {formik.touched[key] && formik.errors[key] && (
                <div className='text-red-500 text-sm mt-1'>{formik.errors[key]}</div>
            )}
        </div>
    );

    return (
        <div className='w-full h-full bg-white text-black overflow-x-hidden flex flex-col justify-center items-center relative'>
            <Header1 />
            <Header3 />
            <Header2 />
            <ToastContainer />

            <div className='w-full h-[35rem] relative flex justify-center items-center overflow-hidden'>
                <img className='h-full w-full object-cover absolute z-10' src='src/assets/images/home-slide3.png' alt='error' />
                <div className='w-full h-full bg-black absolute opacity-[50%] z-20'></div>
                <div className='w-[50rem] h-[20rem] relative z-50 flex flex-col justify-center text-center items-center overflow-hidden px-4'>
                    <h1 className='font-bold text-[4rem] text-white leading-[4rem]'>Drive Your Business Forward with Kasmo</h1>
                    <p className='font-medium text-[1.2rem] text-white mt-4'>
                        Are you an owner-operator looking for steady loads and reliable partnerships? Lease your truck to Kasmo,
                        and we’ll connect you with one of our trusted third-party carriers or carriers under Kasmo.
                    </p>
                </div>
            </div>

            <div className='mt-[5rem] w-[80%] h-[60rem] flex flex-col justify-start items-center text-center'>
                <h1 className='text-black font-bold text-[3.5rem]'>Get Started Today!</h1>
                <p className='text-[1.5rem] font-medium'>
                    Fill out the form below, and our team will reach out with available opportunities.
                </p>

                <form onSubmit={formik.handleSubmit} className='w-full h-full flex flex-col justify-center items-center mt-[-10rem]'>
                    {/* Row 1 */}
                    <div className='w-[80%] h-[4rem] mt-[4rem] flex justify-between items-center'>
                        <div className='w-[30%]'> {/* Wrapper for input and error */}
                            <input
                                name='fullName'
                                placeholder='Full-Name'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.2rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.fullName}
                            />
                            {formik.touched.fullName && formik.errors.fullName && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.fullName}</div>
                            )}
                        </div>
                        <div className='w-[30%]'>
                            <input
                                name='email'
                                placeholder='Email-Address'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.2rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.email}
                            />
                            {formik.touched.email && formik.errors.email && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.email}</div>
                            )}
                        </div>
                        <div className='w-[30%]'>
                            <input
                                name='phone'
                                placeholder='Phone-Number'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.5rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.phone}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.phone}</div>
                            )}
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className='w-[80%] h-[4rem] mt-[4rem] flex justify-between items-center'>
                        <div className='w-[30%]'>
                            <input
                                name='companyName'
                                placeholder='Company-Name (Optional)'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.5rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.companyName}
                            />
                            {formik.touched.companyName && formik.errors.companyName && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.companyName}</div>
                            )}
                        </div>
                        {renderDropdown('truckType', dropdownOptions.truckType)}
                        <div className='w-[30%]'>
                            <input
                                name='dotNumber'
                                placeholder='DOT-Number'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.5rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.dotNumber}
                            />
                            {formik.touched.dotNumber && formik.errors.dotNumber && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.dotNumber}</div>
                            )}
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className='w-[80%] h-[4rem] mt-[4rem] flex justify-between items-center'>
                        <div className='w-[30%]'>
                            <input
                                name='mcNumber'
                                placeholder='MC-Number'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.2rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.mcNumber}
                            />
                            {formik.touched.mcNumber && formik.errors.mcNumber && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.mcNumber}</div>
                            )}
                        </div>
                        {renderDropdown('regions', dropdownOptions.regions)}
                        {renderDropdown('trailer', dropdownOptions.trailer)}
                    </div>

                    {/* Comments */}
                    <div className='w-[80%] h-[4rem] mt-[4rem] flex justify-center items-center'>
                        <div className='w-[30%]'> {/* Wrap comments input */}
                            <input
                                name='comments'
                                placeholder='Additional Comments'
                                className='bg-gray-200 h-full w-full p-[0.8rem] rounded-[0.5rem] text-[1.2rem] font-medium'
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.comments}
                            />
                            {formik.touched.comments && formik.errors.comments && (
                                <div className='text-red-500 text-sm mt-1 text-left'>{formik.errors.comments}</div>
                            )}
                        </div>
                    </div>

                    {/* Checkbox + Submit */}
                    <div className='w-[50%] flex justify-between items-center mt-[2rem]'>
                        <div className='flex flex-col items-start gap-[0.5rem]'>
                            <div className='flex items-center gap-[0.5rem]'>
                                <input
                                    type='checkbox'
                                    name='agree'
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    checked={formik.values.agree} // Added checked prop
                                    className='h-[1.5rem] w-[1.5rem] rounded-full cursor-pointer'
                                />
                                <span className='text-[1.1rem] font-medium'>I agree to the privacy policy</span>
                            </div>
                            {formik.touched.agree && formik.errors.agree && (
                                <div className='text-red-500 text-sm mt-1'>{formik.errors.agree}</div>
                            )}
                        </div>
                        <button type='submit' className='bg-primary p-[1rem] rounded-[1rem] w-[10rem] text-[1.3rem] font-medium hover:bg-secondary hover:text-white hover:scale-[110%] transition-all duration-1000'>
                            Submit
                        </button>
                    </div>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Lease;