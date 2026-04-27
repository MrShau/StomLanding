import { CalculatorIcon } from 'lucide-react'
import { useState } from 'react'
import { Select } from './ui/Select'

export function Calculator() {
	const [service, setService] = useState('implant')
	const [material, setMaterial] = useState('standard')
	const [teeth, setTeeth] = useState('1')
	const [consultation, setConsultation] = useState(false)

	const prices: { [key: string]: { [key: string]: number } } = {
		implant: { standard: 59900, premium: 89900 },
		crown: { standard: 19900, premium: 29900 },
		veneer: { standard: 24900, premium: 34900 },
		whitening: { standard: 19900, premium: 24900 },
	}

	const calculatePrice = () => {
		const basePrice = prices[service][material]
		const teethCount = parseInt(teeth)
		const total = basePrice * teethCount
		const consultationPrice = consultation && total > 0 ? 0 : 0
		return total + consultationPrice
	}

	const serviceOptions = [
		{ value: 'implant', label: 'Имплантация' },
		{ value: 'crown', label: 'Коронка' },
		{ value: 'veneer', label: 'Виниры' },
		{ value: 'whitening', label: 'Отбеливание' },
	]

	const materialOptions = [
		{ value: 'standard', label: 'Стандарт' },
		{ value: 'premium', label: 'Премиум' },
	]

	const teethOptions = [
		{ value: '1', label: '1 зуб' },
		{ value: '2', label: '2 зуба' },
		{ value: '3', label: '3 зуба' },
		{ value: '4', label: '4 зуба' },
		{ value: '6', label: '6 зубов' },
	]

	return (
		<section id='калькулятор' className='py-16 bg-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='max-w-3xl mx-auto'>
					<div className='text-center mb-12'>
						<div className='inline-flex items-center justify-center w-16 h-16 bg-[#1CB5B2] bg-opacity-10 rounded-2xl mb-4'>
							<CalculatorIcon className='w-8 h-8 text-white' />
						</div>
						<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
							Калькулятор стоимости
						</h2>
						<p className='text-lg text-[#6B7280]'>
							Рассчитайте предварительную стоимость лечения
						</p>
					</div>

					<div className='bg-[#F5F7FA] rounded-3xl p-8'>
						<div className='grid md:grid-cols-2 gap-6 mb-6'>
							<Select
								label='Услуга'
								options={serviceOptions}
								value={service}
								onChange={e => setService(e.target.value)}
							/>

							<Select
								label='Вариант материала'
								options={materialOptions}
								value={material}
								onChange={e => setMaterial(e.target.value)}
							/>

							<Select
								label='Количество зубов'
								options={teethOptions}
								value={teeth}
								onChange={e => setTeeth(e.target.value)}
							/>

							<div className='flex items-end'>
								<label className='flex items-center gap-3 cursor-pointer'>
									<input
										type='checkbox'
										checked={consultation}
										onChange={e => setConsultation(e.target.checked)}
										className='w-5 h-5 text-[#1CB5B2] rounded focus:ring-[#1CB5B2]'
									/>
									<span className='text-[#0B1F3A]'>
										Бесплатная консультация
									</span>
								</label>
							</div>
						</div>

						<div className='bg-white rounded-2xl p-6 mb-6'>
							<div className='flex items-center justify-between mb-2'>
								<span className='text-[#6B7280]'>
									Предварительная стоимость:
								</span>
							</div>
							<div className='text-4xl text-[#1CB5B2]'>
								{calculatePrice().toLocaleString('ru-RU')} ₽
							</div>
							<p className='text-sm text-[#6B7280] mt-2'>
								Точная стоимость определяется после консультации и диагностики
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
