import React from 'react'

const page = () => {
  return (
       <div className="py-10 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="head_text  text-center mb-20">
            <span className="orange_gradient text-center">
           About Us
            </span>
         </h1>

        {/* Розділ 1 */}
        <section className="mb-10">
            PremierFloridaBNB is a leading property management company specializing in short-term vacation rentals. We are committed to delivering exceptional service, maximizing occupancy rates, and ensuring a seamless experience for both property owners and guests.
             <br/>
            Our team holds the prestigious SuperHost status, which translates to increased bookings and improved search engine visibility. We utilize automated messaging systems, respond promptly to inquiries, and offer a wide range of services, from check-out calls to quick problem resolution.
             <br/>
            What sets us apart is our competitive pricing structure. While the industry average for property management fees ranges from 20% to 30% of gross rental income, we offer a flat fee of 20% for single-family properties and 15% for multifamily units.
             <br/>
            We pride ourselves on our ability to obtain the necessary permits and licenses for vacation rentals, and we are registered with the Department of Business and Professional Regulation (DBPR).
             <br/>
            Our budget management expertise ensures efficient spending and cost-effective solutions. We collaborate with various vendors, ensuring access to products and services at different price points. Additionally, we provide up to $3 million in damage protection through Airbnb Aircover.
              <br/>
            Maintaining properties at their best is our priority. We conduct regular inspections, have an in-house cleaning team, and collaborate with handymen, landscapers, plumbers, and other professionals to ensure your property remains in top condition.
              <br/>
            We excel at crafting competitive pricing strategies, optimizing calendars, and using SEO-focused software to attract more guests and increase revenue.
               <br/>
            With a strong focus on energy efficiency, we keep an inventory of essentials to reduce environmental impact.

        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            1. Great Service, Great Reviews, High Occupancy
          </h2>
          <ul className="list-disc pl-6">
            <li>SuperHost status - meaning more bookings and better SEO</li>
            <li>Automated messages (using software)</li>
            <li>Respond fast</li>
            <li>Check out Calls</li>
            <li>Resolve problems fast</li>
            <li>Long term relationship</li>
            <li>Share calendar</li>
            <li>Itemized report with receipts</li>
          </ul>
        </section>

        {/* Розділ 2 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            2. Competitive pricing
          </h2>
          <ul className="list-disc pl-6">
            <li>Median vacation rental property management fee: 20%-30% of Gross rental income</li>
            <li>Our pricing: 20% of Gross rental income for single families and 15% of Gross rental income for multifamilies</li>
          </ul>
        </section>

        {/* Розділ 3 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            3. Permits and Licenses
          </h2>
          <ul className="list-disc pl-6">
            <li>We can get any Vacation rental License</li>
            <li>Registered with DBPR (Department of Business and Professional Regulation)</li>
          </ul>
        </section>

        {/* Розділ 4 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            4. Budget Boss (be great with budget)
          </h2>
          <ul className="list-disc pl-6">
            <li>Find solutions for all issues</li>
            <li>We know the places where to buy</li>
            <li>Multiple Vendors with different price range</li>
            <li>Airbnb Aircover reimbursements - $3M damage protection</li>
          </ul>
        </section>

        {/* Розділ 5 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            5. Keep Property Well Maintained
          </h2>
          <ul className="list-disc pl-6">
            <li>Going 2 days per week at least</li>
            <li>In-house Cleaning Team</li>
            <li>Handyman Team</li>
            <li>Landscape company</li>
            <li>Plumbers</li>
            <li>Pool Service</li>
            <li>Renovations</li>
            <li>Maintenance</li>
            <li>You name it, we have it</li>
          </ul>
        </section>

        {/* Розділ 6 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            6. Charge Competitive Rates
          </h2>
          <ul className="list-disc pl-6">
            <li>Calendar optimization</li>
            <li>Discount and pricing strategies</li>
            <li>Software usage for SEO</li>
          </ul>
        </section>

        {/* Розділ 7 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            7. Energy Efficient
          </h2>
          <ul className="list-disc pl-6">
            <li>We keep inventory</li>
          </ul>
        </section>

        {/* Розділ 8 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            8. Outstanding Listing Creation
          </h2>
          <ul className="list-disc pl-6">
            <li>Amenities</li>
            <li>Amazing pictures</li>
            <li>Property features</li>
          </ul>
        </section>

        {/* Розділ 9 */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-black mb-4">
            9. Property Management Software
          </h2>
          <ul className="list-disc pl-6">
            <li>Hostaway</li>
            <li>Pricelabs</li>
            <li>Airbnb</li>
            <li>Minut</li>
          </ul>
        </section>

        {/* Додаткова інформація та контакти */}
        <section>
          <p className="text-sm text-start text-center">
            For more information, please visit our website: <a href="https://premierfloridabnb.com">premierfloridabnb.com</a><br />
            Follow us on Instagram: <a href="https://www.instagram.com/premierfloridabnb/">@premierfloridabnb</a><br />
            Cell: (786) 784-0643 / (786) 784-0644<br />
            Email: <a href="mailto:info@premierfloridabnb.com">info@premierfloridabnb.com</a>
          </p>
        </section>
      </div>
    </div>
  )
}

export default page
