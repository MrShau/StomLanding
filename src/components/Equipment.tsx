import {
	Box,
	Fingerprint,
	Microscope,
	Scan,
	Shield,
	Syringe,
} from 'lucide-react'
import { Card } from './ui/Card'

export function Equipment() {
	const equipment = [
		{
			icon: Scan,
			title: '3D-томограф',
			description:
				'Точная диагностика за 20 секунд с минимальной дозой облучения',
		},
		{
			icon: Microscope,
			title: 'Дентальный микроскоп',
			description: 'Увеличение до 40x для максимальной точности лечения',
		},
		{
			icon: Fingerprint,
			title: 'Цифровые слепки',
			description: 'Сканирование полости рта без неприятных ощущений',
		},
		{
			icon: Shield,
			title: 'Система стерилизации',
			description: 'Автоклавы класса B по европейским стандартам',
		},
		{
			icon: Box,
			title: 'CAD/CAM система',
			description: 'Изготовление коронок и виниров за один визит',
		},
		{
			icon: Syringe,
			title: 'Компьютерная анестезия',
			description: 'Безболезненные инъекции с точной дозировкой',
		},
	]

	return (
		<section className='py-16 bg-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Современное оборудование
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto'>
						Используем только сертифицированную технику от ведущих мировых
						производителей
					</p>
				</div>

				<div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'>
					{equipment.map((item, index) => {
						const Icon = item.icon
						return (
							<Card key={index} hover>
								<div className='inline-flex items-center justify-center w-14 h-14 bg-[#1CB5B2] bg-opacity-10 rounded-2xl mb-4'>
									<Icon className='w-7 h-7 text-white' />
								</div>
								<h3 className='text-xl text-[#0B1F3A] mb-2'>{item.title}</h3>
								<p className='text-[#6B7280]'>{item.description}</p>
							</Card>
						)
					})}
				</div>
			</div>
		</section>
	)
}
