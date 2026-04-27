import {
	Activity,
	Baby,
	Braces,
	Hammer,
	Shield,
	Smile,
	Sparkles,
	Zap,
} from 'lucide-react'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

export function Services() {
	const services = [
		{
			icon: Activity,
			title: 'Лечение кариеса',
			description: 'Современные композитные материалы премиум-класса',
			price: 'от 3 500 ₽',
		},
		{
			icon: Sparkles,
			title: 'Профессиональная чистка',
			description: 'Ультразвук + Air Flow + полировка',
			price: 'от 4 900 ₽',
		},
		{
			icon: Zap,
			title: 'Отбеливание зубов',
			description: 'Безопасное отбеливание ZOOM 4',
			price: 'от 19 900 ₽',
		},
		{
			icon: Hammer,
			title: 'Имплантация',
			description: 'Швейцарские импланты Nobel Biocare',
			price: 'от 59 900 ₽',
		},
		{
			icon: Shield,
			title: 'Протезирование',
			description: 'Коронки из диоксида циркония',
			price: 'от 24 900 ₽',
		},
		{
			icon: Smile,
			title: 'Виниры',
			description: 'Керамические виниры E-max',
			price: 'от 29 900 ₽',
		},
		{
			icon: Braces,
			title: 'Ортодонтия',
			description: 'Брекеты и элайнеры для исправления прикуса',
			price: 'от 89 900 ₽',
		},
		{
			icon: Baby,
			title: 'Детская стоматология',
			description: 'Лечение молочных и постоянных зубов',
			price: 'от 2 500 ₽',
		},
	]

	return (
		<section id='услуги' className='py-16 bg-[#F5F7FA]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Наши услуги
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto'>
						Полный спектр стоматологических услуг с использованием современного
						оборудования
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-6'>
					{services.map((service, index) => {
						const Icon = service.icon
						return (
							<Card key={index} hover className='flex flex-col'>
								<div className='inline-flex items-center justify-center w-12 h-12 bg-[#1CB5B2] bg-opacity-10 rounded-xl mb-4'>
									<Icon className='w-6 h-6 text-white' children={''} />
								</div>
								<h3 className='text-lg text-[#0B1F3A] mb-2'>{service.title}</h3>
								<p className='text-sm text-[#6B7280] mb-4 flex-grow'>
									{service.description}
								</p>
								<div className='flex items-center justify-between mt-auto'>
									<span className='text-[#1CB5B2]'>{service.price}</span>
									<Button variant='outline' size='sm'>
										Подробнее
									</Button>
								</div>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
