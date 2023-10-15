import About from '@/components/About';
import CTA from '@/components/CTA';
import Earth from '@/components/Earth';
import Footer from '@/components/Footer';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Testitominals from '@/components/Testitominals';
import '@/styles/globals.css';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text  text-center">
        Maximize Your {' '}
        <br className="max-md:hidden"/>
        <span className="orange_gradient text-center">
           Short-Term Rental
        </span>
        <br />
        for Less
      </h1>
      <p className="desc text-center">
        Evolve partners with you and takes on the time-consuming tasks of
        vacation rental management so you can earn more and stress less.
      </p>

      <div className='flex-center gap-8 mt-10 mb-20'>
        <button className='black_btn'>Let's do this</button>
        <button className='outline_btn'>Learn more</button>
      </div>

      <Partners/>
      <Earth />
      <Stats />
      <About />
      <Testitominals />
      <CTA/>
      <Footer />
    </section>
  )
}