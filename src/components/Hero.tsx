import { CheckCircle2, Clock, Star } from 'lucide-react'
import { Button } from './ui/Button'

export default function Hero() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-white via-[#F5F7FA] to-white'>
			{/* Decorative blurred circles */}
			<div className='absolute top-0 right-0 w-96 h-96 bg-[#1CB5B2] opacity-5 rounded-full blur-3xl'></div>
			<div className='absolute bottom-0 left-0 w-96 h-96 bg-[#2AA9FF] opacity-5 rounded-full blur-3xl'></div>

			<div className='max-w-[1440px] mx-auto px-4 lg:px-8 py-16 lg:py-24'>
				<div className='grid lg:grid-cols-2 gap-12 items-center'>
					{/* Left Content */}
					<div className='space-y-8'>
						<div className='inline-block bg-[#1CB5B2] bg-opacity-10 text-white px-4 py-2 rounded-full text-sm'>
							Современная стоматология в Казани
						</div>

						<h1 className='text-4xl lg:text-5xl text-[#0B1F3A] leading-tight'>
							Лечение зубов без боли и с гарантией до 5 лет
						</h1>

						<p className='text-lg text-[#6B7280]'>
							Диагностика за 15 минут, лечение под микроскопом и прозрачная
							стоимость до начала работ.
						</p>

						<div className='flex flex-col sm:flex-row gap-4'>
							<a href={`#консультация`}>
								<Button size='lg'>Записаться на консультацию</Button>
							</a>
							<a href='#калькулятор'>
								<Button variant='secondary' size='lg'>
									Рассчитать стоимость
								</Button>
							</a>
						</div>

						{/* Trust Icons */}
						<div className='grid sm:grid-cols-3 gap-6 pt-8'>
							<div className='flex items-center gap-3'>
								<CheckCircle2 className='w-6 h-6 text-[#1CB5B2] flex-shrink-0' />
								<span className='text-sm text-[#0B1F3A]'>
									Бесплатная консультация
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<CheckCircle2 className='w-6 h-6 text-[#1CB5B2] flex-shrink-0' />
								<span className='text-sm text-[#0B1F3A]'>Рассрочка 0%</span>
							</div>
							<div className='flex items-center gap-3'>
								<CheckCircle2 className='w-6 h-6 text-[#1CB5B2] flex-shrink-0' />
								<span className='text-sm text-[#0B1F3A]'>
									350+ отзывов пациентов
								</span>
							</div>
						</div>
					</div>

					{/* Right Image */}
					<div className='relative'>
						<div className='relative rounded-3xl overflow-hidden shadow-2xl'>
							<img
								src='https://images.unsplash.com/photo-1729162128021-f37dca3ff30d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwZG9jdG9yJTIwcHJvZmVzc2lvbmFsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzc1NDY1NjM1fDA&ixlib=rb-4.1.0&q=80&w=1080'
								alt='Врач WhiteDent Clinic'
								className='w-full h-[500px] object-cover'
							/>
						</div>

						{/* Floating Cards */}
						<div className='absolute top-8 -left-4 bg-white rounded-2xl p-4 shadow-lg max-w-[200px]'>
							<div className='flex items-center gap-2 mb-2'>
								<Clock className='w-5 h-5 text-[#1CB5B2]' />
								<span className='text-sm text-[#0B1F3A]'>Сегодня свободно</span>
							</div>
							<div className='text-sm text-[#6B7280]'>
								16:30 • 18:00 • 19:15
							</div>
						</div>

						<div className='absolute bottom-8 -right-4 bg-white rounded-2xl p-4 shadow-lg'>
							<div className='flex items-center gap-2'>
								<div className='flex'>
									{[1, 2, 3, 4, 5].map(star => (
										<Star
											key={star}
											className='w-4 h-4 fill-[#FFA500] text-[#FFA500]'
										/>
									))}
								</div>
								<span className='text-lg text-[#0B1F3A]'>4.9/5.0</span>
							</div>
							<div className='text-sm text-[#6B7280] mt-1'>Рейтинг клиники</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
