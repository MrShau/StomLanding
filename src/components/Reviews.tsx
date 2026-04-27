import { ChevronLeft, ChevronRight, Star } from 'lucide-react'
import { useState } from 'react'
import { Card } from './ui/Card'

export function Reviews() {
	const [currentIndex, setCurrentIndex] = useState(0)

	const reviews = [
		{
			name: 'Анна Петрова',
			date: '15 марта 2026',
			rating: 5,
			text: 'Делала имплантацию у доктора Петрова. Очень довольна результатом! Все прошло быстро и совершенно безболезненно. Спасибо всей команде клиники за профессионализм и внимательное отношение.',
			service: 'Имплантация',
		},
		{
			name: 'Дмитрий Соколов',
			date: '10 марта 2026',
			rating: 5,
			text: 'Отличная клиника! Современное оборудование, квалифицированные врачи. Проходил лечение под микроскопом - впечатляет уровень технологий. Цены адекватные, есть рассрочка. Рекомендую!',
			service: 'Лечение кариеса',
		},
		{
			name: 'Елена Иванова',
			date: '5 марта 2026',
			rating: 5,
			text: 'Делала отбеливание ZOOM 4. Результат превзошел все ожидания! Зубы стали на несколько тонов белее. Никакого дискомфорта во время процедуры. Всем советую эту клинику!',
			service: 'Отбеливание',
		},
		{
			name: 'Михаил Новиков',
			date: '28 февраля 2026',
			rating: 5,
			text: 'Исправлял прикус на элайнерах. Врач-ортодонт Смирнова - настоящий профессионал! Все объяснила, составила подробный план. Результат виден уже через несколько месяцев.',
			service: 'Ортодонтия',
		},
		{
			name: 'Ольга Васильева',
			date: '20 февраля 2026',
			rating: 5,
			text: 'Привела дочку на лечение к детскому стоматологу. Ребенок не боялся, все прошло в игровой форме. Очень благодарны доктору Новиковой за терпение и профессионализм!',
			service: 'Детская стоматология',
		},
		{
			name: 'Сергей Морозов',
			date: '12 февраля 2026',
			rating: 5,
			text: 'Установил виниры E-max. Результат потрясающий - голливудская улыбка! Все сделали за два визита. Цена соответствует качеству. Очень доволен, спасибо!',
			service: 'Виниры',
		},
	]

	const itemsPerPage = 3
	const maxIndex = Math.max(0, Math.ceil(reviews.length / itemsPerPage) - 1)

	const next = () => {
		setCurrentIndex(prev => Math.min(prev + 1, maxIndex))
	}

	const prev = () => {
		setCurrentIndex(prev => Math.max(prev - 1, 0))
	}

	const visibleReviews = reviews.slice(
		currentIndex * itemsPerPage,
		(currentIndex + 1) * itemsPerPage,
	)

	return (
		<section id='отзывы' className='py-16 bg-[#F5F7FA]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Отзывы наших пациентов
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto'>
						Более 350 довольных пациентов оставили отзывы о нашей работе
					</p>
				</div>

				<div className='grid md:grid-cols-3 gap-6 mb-8'>
					{visibleReviews.map((review, index) => (
						<Card key={index} hover>
							<div className='flex items-center justify-between mb-4'>
								<div>
									<h4 className='text-lg text-[#0B1F3A]'>{review.name}</h4>
									<p className='text-sm text-[#6B7280]'>{review.date}</p>
								</div>
								<div className='flex gap-1'>
									{[...Array(review.rating)].map((_, i) => (
										<Star
											key={i}
											className='w-4 h-4 fill-[#FFA500] text-[#FFA500]'
										/>
									))}
								</div>
							</div>

							<p className='text-[#0B1F3A] mb-4'>{review.text}</p>

							<div className='inline-block px-3 py-1 bg-[#1CB5B2] bg-opacity-10 text-white text-sm rounded-full'>
								{review.service}
							</div>
						</Card>
					))}
				</div>

				<div className='flex items-center justify-center gap-4'>
					<button
						onClick={prev}
						disabled={currentIndex === 0}
						className='w-12 h-12 bg-white hover:bg-[#1CB5B2] hover:text-white text-[#0B1F3A] rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
					>
						<ChevronLeft className='w-6 h-6' />
					</button>

					<div className='flex gap-2'>
						{[...Array(maxIndex + 1)].map((_, index) => (
							<button
								key={index}
								onClick={() => setCurrentIndex(index)}
								className={`w-2 h-2 rounded-full transition-all ${
									index === currentIndex ? 'w-8 bg-[#1CB5B2]' : 'bg-[#E5E7EB]'
								}`}
							/>
						))}
					</div>

					<button
						onClick={next}
						disabled={currentIndex === maxIndex}
						className='w-12 h-12 bg-white hover:bg-[#1CB5B2] hover:text-white text-[#0B1F3A] rounded-full flex items-center justify-center transition-colors disabled:opacity-50 disabled:cursor-not-allowed'
					>
						<ChevronRight className='w-6 h-6' />
					</button>
				</div>
			</div>
		</section>
	)
}
