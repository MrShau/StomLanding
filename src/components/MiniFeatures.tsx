import { Hammer, Microscope, Scan } from 'lucide-react'
import { Card } from './ui/Card'

export function MiniFeatures() {
	const features = [
		{
			icon: Microscope,
			title: 'Лечение под микроскопом',
			description: 'Точность до 40x увеличения',
		},
		{
			icon: Scan,
			title: '3D-диагностика',
			description: 'Современный томограф',
		},
		{
			icon: Hammer,
			title: 'Имплантация под ключ',
			description: 'С гарантией 10 лет',
		},
	]

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='grid md:grid-cols-3 gap-8'>
					{features.map((feature, index) => {
						const Icon = feature.icon
						return (
							<Card key={index} hover className='text-center'>
								<div className='inline-flex items-center justify-center w-16 h-16 bg-[#1CB5B2] bg-opacity-10 rounded-2xl mb-4'>
									<Icon className='w-8 h-8 text-white' />
								</div>
								<h3 className='text-xl text-[#0B1F3A] mb-2'>{feature.title}</h3>
								<p className='text-[#6B7280]'>{feature.description}</p>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
