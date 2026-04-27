import { About } from './components/About'
import { BeforeAfter } from './components/BeforeAfter'
import { Calculator } from './components/Calculator'
import { Contacts } from './components/Contacts'
import { CTA } from './components/CTA'
import { Doctors } from './components/Doctors'
import { Equipment } from './components/Equipment'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import { MiniFeatures } from './components/MiniFeatures'
import { Pricing } from './components/Prices'
import { Process } from './components/Process'
import { PromoBanner } from './components/PromoBurner'
import { Reviews } from './components/Reviews'
import { Services } from './components/Services'

export default function App() {
	return (
		<>
			<Header />
			<Hero />
			<MiniFeatures />
			<Services />
			<PromoBanner />
			<About />
			<Process />
			<Doctors />
			<BeforeAfter />
			<Equipment />
			<Pricing />
			<Calculator />
			<Reviews />
			<FAQ />
			<Contacts />
			<CTA />
			<Footer />
		</>
	)
}
