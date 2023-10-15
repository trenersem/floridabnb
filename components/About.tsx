import React from 'react'

const About = () => {
  return (
       <section className="w-full flex-center flex-col mb-10 mt-24 layout">
            <h1 className="font-display text-4xl font-extrabold leading-tight text-black sm:text-5xl sm:leading-tight">
                Send Stress Packing
            </h1>
            <div className='flex justify-start items-center gap-5 mt-12 sm:flex-row flex-col'>
                <p className="text-sm text-start text-center flex-1">
                Traditional short-term rental managers are often local, small businesses with just one or a few people handling everything. They’re typically great with services like cleaning, but lack the marketing and booking expertise you need to make the most from your investment.
                <br/>
                <br/>
                Evolve has teams of specialists in every facet of management working around the clock to ensure that your property outperforms the competition. We deliver top-notch revenue management and customer service. Plus, we give you the flexibility to choose your own home team so you know your property is always in good hands.
                <br/>
                <br/>
                And our marketing is second to none. Every Evolve property gets professional photography, and a team of experts craft each listing to ensure they’ll reach the top of search results. We also promote your property on all the popular sites like Airbnb and Vrbo, in addition to Evolve.com. Our goal is to consistently deliver a 5-star experience for you and your guests. Best of all,we only charge 10%.
                </p>

                <div className='flex-1 w-full h-full'>
                    <img
                        src='/assets/images/about.svg'
                        alt='about'
                        className='max-w-[100%] max-h-[100%] object-cover rounded-lg'
                    />
                </div>
            </div>

       </section>
  )
}

export default About
