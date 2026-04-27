import { Award, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/Button'
import { Card } from './ui/Card'

export function Doctors() {
	const [activeFilter, setActiveFilter] = useState('Все')

	const filters = ['Все', 'Терапевты', 'Ортодонты', 'Хирурги']

	const doctors = [
		{
			name: 'Иванова Анна Сергеевна',
			specialty: 'Терапевт',
			experience: '12 лет опыта',
			tags: ['Микроскоп', 'Эндодонтия', 'Эстетика'],
			image:
				'https://images.unsplash.com/photo-1593636677199-11450abb6e7b?w=400&auto=format&fit=crop',
			category: 'Терапевты',
		},
		{
			name: 'Петров Дмитрий Иванович',
			specialty: 'Хирург-имплантолог',
			experience: '15 лет опыта',
			tags: ['Имплантация', 'Костная пластика', 'Nobel Biocare'],
			image:
				'https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?w=400&auto=format&fit=crop',
			category: 'Хирурги',
		},
		{
			name: 'Смирнова Елена Викторовна',
			specialty: 'Ортодонт',
			experience: '10 лет опыта',
			tags: ['Брекеты', 'Элайнеры', 'Invisalign'],
			image:
				'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop',
			category: 'Ортодонты',
		},
		{
			name: 'Козлов Максим Андреевич',
			specialty: 'Ортопед',
			experience: '14 лет опыта',
			tags: ['Виниры', 'Коронки', 'CAD/CAM'],
			image:
				'https://images.unsplash.com/photo-1622902046580-2b47f47f5471?w=400&auto=format&fit=crop',
			category: 'Терапевты',
		},
		{
			name: 'Новикова Ольга Дмитриевна',
			specialty: 'Детский стоматолог',
			experience: '8 лет опыта',
			tags: ['Профилактика', 'Лечение', 'Адаптация'],
			image:
				'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop',
			category: 'Терапевты',
		},
		{
			name: 'Волков Игорь Сергеевич',
			specialty: 'Пародонтолог',
			experience: '11 лет опыта',
			tags: ['Десны', 'Плазмолифтинг', 'Хирургия'],
			image:
				'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&auto=format&fit=crop',
			category: 'Хирурги',
		},
	]

	const filteredDoctors =
		activeFilter === 'Все'
			? doctors
			: doctors.filter(doc => doc.category === activeFilter)

	return (
		<section id='врачи' className='py-16 bg-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Наши врачи
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto mb-8'>
						Команда опытных специалистов с международными сертификатами
					</p>

					{/* Filter Tabs */}
					<div className='flex flex-wrap justify-center gap-3'>
						{filters.map(filter => (
							<button
								key={filter}
								onClick={() => setActiveFilter(filter)}
								className={`px-6 py-3 rounded-xl transition-all ${
									activeFilter === filter
										? 'bg-[#1CB5B2] text-white shadow-md'
										: 'bg-[#F5F7FA] text-[#0B1F3A] hover:bg-[#E5E7EB] cursor-pointer'
								}`}
							>
								{filter}
							</button>
						))}
					</div>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{filteredDoctors.map((doctor, index) => (
						<Card key={index} hover>
							<div className='rounded-2xl overflow-hidden mb-4'>
								<img
									src={doctor.image}
									alt={doctor.name}
									className='w-full h-64 object-cover'
								/>
							</div>

							<h3 className='text-xl text-[#0B1F3A] mb-1'>{doctor.name}</h3>
							<div className='flex items-center gap-2 text-[#6B7280] mb-2'>
								<GraduationCap className='w-4 h-4' />
								<span className='text-sm'>{doctor.specialty}</span>
							</div>
							<div className='flex items-center gap-2 text-[#6B7280] mb-4'>
								<Award className='w-4 h-4' />
								<span className='text-sm'>{doctor.experience}</span>
							</div>

							<div className='flex flex-wrap gap-2 mb-4'>
								{doctor.tags.map((tag, i) => (
									<span
										key={i}
										className='px-3 py-1 bg-[#F5F7FA] text-[#1CB5B2] text-xs rounded-full'
									>
										{tag}
									</span>
								))}
							</div>

							<Button className='w-full' variant='outline'>
								Записаться
							</Button>
						</Card>
					))}
				</div>
			</div>
		</section>
	)
}
