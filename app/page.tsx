import About from '@/components/About';
import CTA from '@/components/CTA';
import Description from '@/components/Description';
import Earth from '@/components/Earth';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Testitominals from '@/components/Testitominals';
import '@/styles/globals.css';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
     <Main />

      <Partners/>
      <Earth />
      <About />
      <Stats />
      <Description />
      <Testitominals />
      <CTA/>
    </section>
  )
}