import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Input, Select } from './ui/Select'

export function Contacts() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		service: 'consultation',
		time: 'morning',
	})

	const serviceOptions = [
		{ value: 'consultation', label: 'Консультация' },
		{ value: 'cleaning', label: 'Чистка зубов' },
		{ value: 'treatment', label: 'Лечение' },
		{ value: 'implant', label: 'Имплантация' },
		{ value: 'whitening', label: 'Отбеливание' },
	]

	const timeOptions = [
		{ value: 'morning', label: 'Утро (9:00-12:00)' },
		{ value: 'day', label: 'День (12:00-15:00)' },
		{ value: 'evening', label: 'Вечер (15:00-21:00)' },
	]

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('Form submitted:', formData)
	}

	return (
		<section id='контакты' className='py-16 bg-[#F5F7FA]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>Контакты</h2>
					<p className='text-lg text-[#6B7280]'>
						Приходите к нам или запишитесь онлайн
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12'>
					{/* Contact Info */}
					<div>
						<div className='bg-white rounded-3xl p-8 mb-6'>
							<div className='space-y-6'>
								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-[#1CB5B2] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0'>
										<MapPin className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='text-lg text-[#0B1F3A] mb-1'>Адрес</h4>
										<p className='text-[#6B7280]'>
											г. Казань, ул. Баумана, д. 58
											<br />
											ТЦ "Кольцо", 3 этаж
										</p>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-[#1CB5B2] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0'>
										<Phone className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='text-lg text-[#0B1F3A] mb-1'>Телефон</h4>
										<a
											href='tel:+78435552211'
											className='text-[#6B7280] hover:text-[#1CB5B2]'
										>
											+7 (843) 555-22-11
										</a>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-[#1CB5B2] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0'>
										<Mail className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='text-lg text-[#0B1F3A] mb-1'>Email</h4>
										<a
											href='mailto:info@whitedent-kazan.ru'
											className='text-[#6B7280] hover:text-[#1CB5B2]'
										>
											info@whitedent-kazan.ru
										</a>
									</div>
								</div>

								<div className='flex items-start gap-4'>
									<div className='w-12 h-12 bg-[#1CB5B2] bg-opacity-10 rounded-xl flex items-center justify-center flex-shrink-0'>
										<Clock className='w-6 h-6 text-white' />
									</div>
									<div>
										<h4 className='text-lg text-[#0B1F3A] mb-1'>
											Режим работы
										</h4>
										<p className='text-[#6B7280]'>
											Ежедневно: 09:00 – 21:00
											<br />
											Без выходных
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Map Placeholder */}
						<div className='bg-[#E5E7EB] rounded-3xl h-70 flex items-center justify-center shadow-2xl'>
							<iframe
								src='https://yandex.ru/map-widget/v1/?um=constructor%3A3ab9e1a07c8f31456db18d87fbd1d5e84ff94c70e26056c655e052a74eb570ee&amp;source=constructor'
								width='863'
								className='h-70'
							></iframe>
						</div>
					</div>

					{/* Booking Form */}
					<div className='bg-white rounded-3xl p-8'>
						<h3 className='text-2xl text-[#0B1F3A] mb-6'>
							Записаться на прием
						</h3>

						<form onSubmit={handleSubmit} className='space-y-6'>
							<Input
								label='Ваше имя'
								type='text'
								placeholder='Иван Иванов'
								value={formData.name}
								onChange={e =>
									setFormData({ ...formData, name: e.target.value })
								}
								required
							/>

							<Input
								label='Телефон'
								type='tel'
								placeholder='+7 (___) ___-__-__'
								value={formData.phone}
								onChange={e =>
									setFormData({ ...formData, phone: e.target.value })
								}
								required
							/>

							<Select
								label='Услуга'
								options={serviceOptions}
								value={formData.service}
								onChange={e =>
									setFormData({ ...formData, service: e.target.value })
								}
							/>

							<Select
								label='Удобное время'
								options={timeOptions}
								value={formData.time}
								onChange={e =>
									setFormData({ ...formData, time: e.target.value })
								}
							/>

							<Button type='submit' className='w-full' size='lg'>
								Записаться на прием
							</Button>

							<p className='text-sm text-[#6B7280] text-center'>
								Нажимая кнопку, вы соглашаетесь с{' '}
								<a href='#' className='text-[#1CB5B2] hover:underline'>
									политикой конфиденциальности
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}
