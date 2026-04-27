import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export function BeforeAfter() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const cases = [
		{
			title: 'Отбеливание ZOOM 4',
			before:
				'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop',
			after:
				'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop',
		},
		{
			title: 'Виниры E-max',
			before:
				'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop',
			after:
				'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop',
		},
		{
			title: 'Имплантация',
			before:
				'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop',
			after:
				'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&auto=format&fit=crop',
		},
		{
			title: 'Исправление прикуса',
			before:
				'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=600&auto=format&fit=crop',
			after:
				'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=600&auto=format&fit=crop',
		},
	]

	const next = () => {
		setCurrentIndex(prev => (prev + 1) % cases.length)
	}

	const prev = () => {
		setCurrentIndex(prev => (prev - 1 + cases.length) % cases.length)
	}

	return (
		<section className='py-16 bg-[#F5F7FA]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Наши работы
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto'>
						Результаты лечения говорят сами за себя
					</p>
				</div>

				<div className='max-w-4xl mx-auto'>
					<div className='bg-white rounded-3xl p-8 shadow-lg'>
						<h3 className='text-2xl text-[#0B1F3A] text-center mb-8'>
							{cases[currentIndex].title}
						</h3>

						<div className='grid md:grid-cols-2 gap-8 mb-8'>
							<div>
								<div className='text-center mb-3'>
									<span className='inline-block px-4 py-2 bg-[#F5F7FA] text-[#0B1F3A] rounded-xl'>
										До
									</span>
								</div>
								<div className='rounded-2xl overflow-hidden'>
									<img
										src={cases[currentIndex].before}
										alt='До лечения'
										className='w-full h-80 object-cover'
									/>
								</div>
							</div>

							<div>
								<div className='text-center mb-3'>
									<span className='inline-block px-4 py-2 bg-[#1CB5B2] text-white rounded-xl'>
										После
									</span>
								</div>
								<div className='rounded-2xl overflow-hidden'>
									<img
										src={cases[currentIndex].after}
										alt='После лечения'
										className='w-full h-80 object-cover'
									/>
								</div>
							</div>
						</div>

						<div className='flex items-center justify-center gap-4'>
							<button
								onClick={prev}
								className='w-12 h-12 bg-[#F5F7FA] hover:bg-[#1CB5B2] hover:text-white text-[#0B1F3A] rounded-full flex items-center justify-center transition-colors'
							>
								<ChevronLeft className='w-6 h-6' />
							</button>

							<div className='flex gap-2'>
								{cases.map((_, index) => (
									<button
										key={index}
										onClick={() => setCurrentIndex(index)}
										className={`w-2 h-2 rounded-full transition-all ${
											index === currentIndex
												? 'w-8 bg-[#1CB5B2]'
												: 'bg-[#E5E7EB]'
										}`}
									/>
								))}
							</div>

							<button
								onClick={next}
								className='w-12 h-12 bg-[#F5F7FA] hover:bg-[#1CB5B2] hover:text-white text-[#0B1F3A] rounded-full flex items-center justify-center transition-colors'
							>
								<ChevronRight className='w-6 h-6' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
