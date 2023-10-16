"use client"

import React from 'react'
import InputField from './InputField';
import { Formik, Field, Form, ErrorMessage, } from 'formik';
import * as Yup from 'yup';
interface InitialValues {
  typeOfProperty: string;
  currentlyManages: string;
  percentage: string;
  country:string;
  streetAddress: string;
  city: string;
  state:string;
  zip: number;
  bedrooms: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const FormComponent = () => {
    const  initialValues =  {
        typeOfProperty: '',
        currentlyManages: '',
        percentage:'',
        country:'',
        streetAddress: '',
        city: '',
        state: '',
        zip: 0,
        bedrooms: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
    }
    const onSubmit = (values: InitialValues) => {
        console.log('values', values)
    }

    const validationSchema = Yup.object({
        email: Yup.string().required("Email is required").email("Invalid email address"),
        typeOfProperty: Yup.string().required("Required"),
        currentlyManages: Yup.string().required("Required"),
        percentage: Yup.string().required("Required"),
        country: Yup.string().required("Required"),
        streetAddress: Yup.string().required("Required"),
        city: Yup.string().required("Required"),
        state:Yup.string().required("Required"),
        zip: Yup.number().required("Required"),
        bedrooms: Yup.number().required("Required").typeError('Must be a number'),
        firstName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        lastName: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        phone: Yup.string()
            .required('Phone number is required')
            .matches(
            /^[0-9]{10}$/,
            'Invalid phone number'
            ),
    
    })
  return (
    <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
    >
        {({errors, isValidating}) => (
            <Form className='layout'>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 py-12">
                        <h2 className="text-base font-semibold leading-7 text-gray-900">
                            Welcome! Let's start with the basics.
                        </h2>
                        <p className="mt-1 text-sm leading-6 text-gray-600">
                            This information will be displayed ...
                        </p>

                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                 <InputField 
                                    label='What type of property will you rent out?'
                                    id='typeOfProperty'
                                    type='text'
                                    autoComplete='typeOfProperty'
                                    as='select'
                                    placeholder='Type of property'
                                    error={!!errors.typeOfProperty}
                                >
                                        <option></option>
                                        <option>My entire vacation home or condo</option>
                                        <option>No property yet, but I'm looking to buy</option>
                                        <option>My primary residence</option>
                                        <option>My timeshare</option>
                                        <option>A private room in my home</option>
                                        <option>A guesthouse with a private entrance</option>
                                        <option>My mobile property, treehouse or campsite</option>
                                </InputField> 
                            </div>

                            <div className="sm:col-span-3">
                                <InputField 
                                    label='Who currently manages your property?'
                                    id='currentlyManages'
                                    type='text'
                                    autoComplete='currentlyManages'
                                    as='select'
                                >
                                     <option></option>
                                    <option>Nobody, I've never rented it out before</option>
                                    <option>I use a property manager</option>
                                    <option>I manage my property on my own</option>
                                </InputField> 
                            </div>

                            <div className="sm:col-span-full">
                                <InputField 
                                    label='What percentage of the year will your property be available to rent?'
                                    id='percentage'
                                    type='text'
                                    autoComplete='percentage'
                                    as='select'
                                >
                                     <option></option>
                                    <option>Under 10% (0-4 weeks)</option>
                                    <option>10-50% (5-26 weeks)</option>
                                    <option>50-90% (26-47 weeks)</option>
                                    <option>90%+ (Over 47 weeks)</option>
                                </InputField> 
                               
                            </div>
                            <div className="sm:col-span-full">
                                <InputField 
                                    label='How many bedrooms does your property have?'
                                    id='bedrooms'
                                    type='text'
                                    autoComplete='bedrooms'
                                />
                            </div>
                            
                            <div className="sm:col-span-3">
                                    <InputField 
                                        label='Country'
                                        id='country'
                                        type='text'
                                        autoComplete='percentage'
                                        as='select'
                                    >
                                        <option></option>
                                        <option>United States</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </InputField> 
                            </div>

                            <div className="col-span-full">
                                <InputField 
                                    label='Street address'
                                    id='streetAddress'
                                    type='text'
                                    autoComplete='streetAddress'
                                />
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <InputField 
                                    label='City'
                                    id='city'
                                    type='text'
                                    autoComplete='city'
                                />
                            </div>

                            <div className="sm:col-span-2">
                                <InputField 
                                    label='State'
                                    id='state'
                                    type='text'
                                    autoComplete='state'
                                />
                            </div>

                            <div className="sm:col-span-2">
                                 <InputField 
                                    label='ZIP / Postal code'
                                    id='zip'
                                    type='number'
                                    autoComplete='zip'
                                />
                            </div>

                            <div className="col-span-full">
                            <label htmlFor="cover-photo" className="block text-sm font-medium leading-6 text-gray-900">Cover photo</label>
                            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                <div className="text-center">
                                <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 012.25-2.25h16.5A2.25 2.25 0 0122.5 6v12a2.25 2.25 0 01-2.25 2.25H3.75A2.25 2.25 0 011.5 18V6zM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0021 18v-1.94l-2.69-2.689a1.5 1.5 0 00-2.12 0l-.88.879.97.97a.75.75 0 11-1.06 1.06l-5.16-5.159a1.5 1.5 0 00-2.12 0L3 16.061zm10.125-7.81a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0z" clipRule="evenodd" />
                                </svg>
                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                    <label htmlFor="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500">
                                    <span>Upload a file</span>
                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                                    </label>
                                    <p className="pl-1">or drag and drop</p>
                                </div>
                                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

                    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                        <div className="sm:col-span-3">
                            <InputField 
                                id='firstName'
                                label='First name'
                                type='text'
                                autoComplete='given-name'
                            />
                        </div>

                        <div className="sm:col-span-3">
                            <InputField 
                                id='lastName'
                                label='Last name'
                                type='text'
                                autoComplete='last-name'
                            />
                        </div>

                        <div className="sm:col-span-4">
                            <InputField 
                                id='email'
                                label='Email address'
                                type='text'
                                autoComplete='email'
                            />
                        </div>
                        <div className="sm:col-span-4">
                            <InputField 
                                id='phone'
                                label='Phone'
                                type='text'
                                autoComplete='phone'
                            />
                        </div>

                        <div className="col-span-full">
                            <InputField 
                                id='about'
                                label='About'
                                type='text'
                                autoComplete=''
                                rows={3}
                                as="textarea"
                            />
                            <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about yourself.</p>
                        </div>
                    </div>
                    </div>

                    <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">Notifications</h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

                    <div className="mt-10 space-y-10">
                        <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">By Email</legend>
                        <div className="mt-6 space-y-6">
                            <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="comments" className="font-medium text-gray-900">Comments</label>
                                <p className="text-gray-500">Get notified when someones posts a comment on a posting.</p>
                            </div>
                            </div>
                            <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="candidates" className="font-medium text-gray-900">Candidates</label>
                                <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                            </div>
                            </div>
                            <div className="relative flex gap-x-3">
                            <div className="flex h-6 items-center">
                                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            </div>
                            <div className="text-sm leading-6">
                                <label htmlFor="offers" className="font-medium text-gray-900">Offers</label>
                                <p className="text-gray-500">Get notified when a candidate accepts or rejects an offer.</p>
                            </div>
                            </div>
                        </div>
                        </fieldset>
                        <fieldset>
                        <legend className="text-sm font-semibold leading-6 text-gray-900">Push Notifications</legend>
                        <p className="mt-1 text-sm leading-6 text-gray-600">These are delivered via SMS to your mobile phone.</p>
                        <div className="mt-6 space-y-6">
                            <div className="flex items-center gap-x-3">
                            <input id="push-everything" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <label htmlFor="push-everything" className="block text-sm font-medium leading-6 text-gray-900">Everything</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <input id="push-email" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <label htmlFor="push-email" className="block text-sm font-medium leading-6 text-gray-900">Same as email</label>
                            </div>
                            <div className="flex items-center gap-x-3">
                            <input id="push-nothing" name="push-notifications" type="radio" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"/>
                            <label htmlFor="push-nothing" className="block text-sm font-medium leading-6 text-gray-900">No push notifications</label>
                            </div>
                        </div>
                        </fieldset>
                    </div>
                    </div>
                </div>

                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">Cancel</button>
                    <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Save</button>
                </div>
            </Form>
        )}
    </Formik>
  )
}

export default FormComponent
