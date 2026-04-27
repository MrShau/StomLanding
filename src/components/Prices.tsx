import { Check, Star } from 'lucide-react'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

export function Pricing() {
	const packages = [
		{
			name: 'Базовый уход',
			price: '4 900 ₽',
			description: 'Профилактика и гигиена полости рта',
			features: [
				'Консультация стоматолога',
				'Профессиональная чистка',
				'Полировка зубов',
				'Фторирование эмали',
				'Рекомендации по уходу',
			],
			highlighted: false,
		},
		{
			name: 'Эстетическая улыбка',
			price: '12 900 ₽',
			description: 'Комплексное отбеливание и уход',
			features: [
				'Все из пакета "Базовый уход"',
				'Отбеливание ZOOM 4',
				'Реминерализация эмали',
				'Каппы для домашнего ухода',
				'Гарантия на 1 год',
			],
			highlighted: true,
		},
		{
			name: 'Имплантация под ключ',
			price: '59 900 ₽',
			description: 'Полное восстановление зуба',
			features: [
				'3D-диагностика и планирование',
				'Имплант Nobel Biocare',
				'Установка под ключ',
				'Коронка из диоксида циркония',
				'Гарантия на 10 лет',
			],
			highlighted: false,
		},
	]

	return (
		<section id='цены' className='py-16 bg-[#F5F7FA]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Пакеты услуг
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto'>
						Выгодные комплексные предложения с фиксированной стоимостью
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-8'>
					{packages.map((pkg, index) => (
						<Card
							key={index}
							className={`relative ${
								pkg.highlighted
									? 'border-2 border-[#1CB5B2] shadow-xl scale-105'
									: ''
							}`}
						>
							{pkg.highlighted && (
								<div className='absolute -top-4 left-1/2 -translate-x-1/2'>
									<div className='bg-[#1CB5B2] text-white px-4 py-2 rounded-full text-sm flex items-center gap-2'>
										<Star className='w-4 h-4 fill-white' />
										Популярный
									</div>
								</div>
							)}

							<div className='text-center mb-6'>
								<h3 className='text-2xl text-[#0B1F3A] mb-2'>{pkg.name}</h3>
								<p className='text-[#6B7280] text-sm mb-4'>{pkg.description}</p>
								<div className='text-4xl text-[#1CB5B2] mb-1'>{pkg.price}</div>
								<div className='text-sm text-[#6B7280]'>за пакет</div>
							</div>

							<div className='space-y-3 mb-6'>
								{pkg.features.map((feature, i) => (
									<div key={i} className='flex items-start gap-3'>
										<Check className='w-5 h-5 text-[#1CB5B2] flex-shrink-0 mt-0.5' />
										<span className='text-[#0B1F3A]'>{feature}</span>
									</div>
								))}
							</div>

							<Button
								className='w-full'
								variant={pkg.highlighted ? 'primary' : 'outline'}
							>
								Выбрать пакет
							</Button>
						</Card>
					))}
				</div>

				<div className='text-center mt-12'>
					<p className='text-[#6B7280] mb-4'>
						Предоставляем рассрочку 0% на все услуги на срок до 12 месяцев
					</p>
				</div>
			</div>
		</section>
	)
}
