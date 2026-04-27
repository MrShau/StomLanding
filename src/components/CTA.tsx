import React, { useState } from 'react'
import { Button } from './ui/Button'
import { Input } from './ui/Input'

export function CTA() {
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
	})

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		console.log('CTA Form submitted:', formData)
	}

	return (
		<section
			id='консультация'
			className='py-16 bg-gradient-to-br from-[#1CB5B2] to-[#2AA9FF]'
		>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='max-w-2xl mx-auto text-center'>
					<h2 className='text-3xl lg:text-4xl text-white mb-4'>
						Запишитесь на бесплатную консультацию
					</h2>
					<p className='text-xl text-white text-opacity-90 mb-8'>
						Получите план лечения и узнайте точную стоимость уже сегодня
					</p>

					<form onSubmit={handleSubmit} className='bg-white rounded-3xl p-8'>
						<div className='grid md:grid-cols-2 gap-4 mb-6'>
							<Input
								type='text'
								placeholder='Ваше имя'
								value={formData.name}
								onChange={e =>
									setFormData({ ...formData, name: e.target.value })
								}
								required
							/>
							<Input
								type='tel'
								placeholder='+7 (___) ___-__-__'
								value={formData.phone}
								onChange={e =>
									setFormData({ ...formData, phone: e.target.value })
								}
								required
							/>
						</div>

						<Button type='submit' size='lg' className='w-full'>
							Записаться сегодня
						</Button>

						<p className='text-sm text-[#6B7280] mt-4'>
							Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
						</p>
					</form>
				</div>
			</div>
		</section>
	)
}
