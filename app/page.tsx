import SendStress from '@/components/SendStress';
import CTA from '@/components/CTA';
import Description from '@/components/Description';
import Earth from '@/components/Earth';
import Footer from '@/components/Footer';
import Main from '@/components/Main';
import Partners from '@/components/Partners';
import Stats from '@/components/Stats';
import Testitominals from '@/components/Testitominals';
import Why from '@/components/Why';
import '@/styles/globals.css';
import About from '@/components/About';

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
     <Main />
     <Why />
     <About />

      <Partners/>
      <Earth />
      <SendStress />
      <Stats />
      <Description />
      <Testitominals />
      <CTA/>
    </section>
  )
}