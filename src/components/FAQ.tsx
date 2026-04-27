import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0)

	const faqs = [
		{
			question: 'Больно ли лечить зубы в вашей клинике?',
			answer:
				'Нет, все процедуры проводятся с применением современной анестезии. Мы используем компьютерную систему для безболезненных инъекций с точной дозировкой. Большинство пациентов не испытывают никаких болевых ощущений во время лечения.',
		},
		{
			question: 'Сколько стоит консультация и диагностика?',
			answer:
				'Первичная консультация и диагностика бесплатны при записи онлайн. Врач проведет осмотр, сделает необходимые снимки и составит план лечения с фиксированной стоимостью.',
		},
		{
			question: 'Какая гарантия на ваши услуги?',
			answer:
				'Мы предоставляем гарантию на все виды работ: до 5 лет на терапевтическое лечение, до 10 лет на имплантацию, до 3 лет на ортопедические конструкции. Точные условия гарантии обсуждаются индивидуально.',
		},
		{
			question: 'Есть ли у вас рассрочка?',
			answer:
				'Да, мы предоставляем рассрочку 0% на все виды услуг на срок до 12 месяцев. Без первоначального взноса и переплат. Оформление занимает 15 минут.',
		},
		{
			question: 'Как быстро можно попасть на прием?',
			answer:
				'Обычно мы можем записать вас на ближайшие 1-2 дня. В экстренных случаях (острая боль) стараемся принять в день обращения. Позвоните нам или оставьте заявку онлайн.',
		},
		{
			question: 'Какие материалы вы используете?',
			answer:
				'Мы работаем только с сертифицированными материалами премиум-класса от ведущих мировых производителей: композиты 3M, Kerr, Dentsply; импланты Nobel Biocare, Straumann; керамика E-max, диоксид циркония.',
		},
	]

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index)
	}

	return (
		<section id='faq' className='py-16 bg-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='max-w-3xl mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
							Частые вопросы
						</h2>
						<p className='text-lg text-[#6B7280]'>
							Ответы на самые популярные вопросы наших пациентов
						</p>
					</div>

					<div className='space-y-4'>
						{faqs.map((faq, index) => (
							<div
								key={index}
								className='bg-[#F5F7FA] rounded-2xl overflow-hidden transition-all'
							>
								<button
									onClick={() => toggleFAQ(index)}
									className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-[#E5E7EB] transition-colors'
								>
									<span className='text-lg text-[#0B1F3A] pr-4'>
										{faq.question}
									</span>
									<ChevronDown
										className={`w-6 h-6 text-[#1CB5B2] flex-shrink-0 transition-transform ${
											openIndex === index ? 'rotate-180' : ''
										}`}
									/>
								</button>

								{openIndex === index && (
									<div className='px-6 pb-5'>
										<p className='text-[#6B7280] leading-relaxed'>
											{faq.answer}
										</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}
