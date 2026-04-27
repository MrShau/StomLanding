import { Award, Heart, TrendingUp, Users } from 'lucide-react'

export function About() {
	const stats = [
		{ icon: Users, value: '12+', label: 'Врачей в команде' },
		{ icon: Award, value: '10+', label: 'Лет опыта' },
		{ icon: Heart, value: '3500+', label: 'Довольных пациентов' },
		{ icon: TrendingUp, value: '98%', label: 'Положительных отзывов' },
	]

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					<div>
						<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-6'>
							О клинике WhiteDent
						</h2>
						<div className='space-y-4 text-[#6B7280]'>
							<p>
								Мы создали современную стоматологическую клинику в Казани, где
								каждый пациент получает индивидуальный подход и качественное
								лечение без боли.
							</p>
							<p>
								Наша команда использует только проверенные методики и материалы
								премиум-класса. Все процедуры проводятся на современном
								европейском оборудовании с применением микроскопов для
								максимальной точности.
							</p>
							<p>
								Мы даем гарантию на все виды работ до 5 лет и предлагаем
								рассрочку 0% на любые услуги.
							</p>
						</div>
					</div>
					<div>
						<div className='relative rounded-3xl overflow-hidden shadow-2xl mb-8'>
							<img
								src='https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&auto=format&fit=crop'
								alt='WhiteDent Clinic'
								className='w-full h-80 object-cover'
							/>
						</div>

						<div className='grid grid-cols-2 gap-6'>
							{stats.map((stat, index) => {
								const Icon = stat.icon
								return (
									<div
										key={index}
										className='text-center p-6 bg-[#F5F7FA] rounded-2xl'
									>
										<Icon className='w-8 h-8 text-[#1CB5B2] mx-auto mb-3' />
										<div className='text-3xl text-[#0B1F3A] mb-1'>
											{stat.value}
										</div>
										<div className='text-sm text-[#6B7280]'>{stat.label}</div>
									</div>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
