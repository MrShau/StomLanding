import {
	ClipboardList,
	FileText,
	Search,
	ShieldCheck,
	Stethoscope,
} from 'lucide-react'

export function Process() {
	const steps = [
		{
			icon: Search,
			title: 'Осмотр и диагностика',
			description: 'Первичный осмотр, 3D-снимок и консультация специалиста',
		},
		{
			icon: FileText,
			title: 'Составление плана',
			description: 'Подробный план лечения с фиксированной стоимостью',
		},
		{
			icon: ClipboardList,
			title: 'Согласование',
			description: 'Обсуждаем все детали и отвечаем на ваши вопросы',
		},
		{
			icon: Stethoscope,
			title: 'Лечение',
			description: 'Проводим процедуры под контролем микроскопа',
		},
		{
			icon: ShieldCheck,
			title: 'Гарантия и контроль',
			description:
				'Выдаем гарантию до 5 лет и приглашаем на контрольные осмотры',
		},
	]

	return (
		<section className='py-16 bg-[#F5F7FA]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl lg:text-4xl text-[#0B1F3A] mb-4'>
						Как проходит лечение
					</h2>
					<p className='text-lg text-[#6B7280] max-w-2xl mx-auto'>
						Прозрачный процесс от первого визита до гарантийного обслуживания
					</p>
				</div>

				<div className='relative'>
					{/* Desktop Timeline Line */}
					<div className='hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-[#E5E7EB]'></div>

					<div className='grid md:grid-cols-5 gap-8'>
						{steps.map((step, index) => {
							const Icon = step.icon
							return (
								<div key={index} className='relative'>
									{/* Step Number and Icon */}
									<div className='flex flex-col items-center mb-4'>
										<div className='relative w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center mb-4 border-4 border-[#F5F7FA] z-10'>
											<Icon className='w-10 h-10 text-[#1CB5B2]' />
										</div>
										<div className='absolute top-2 left-1/2 -translate-x-1/2 w-8 h-8 bg-[#1CB5B2] text-white rounded-full flex items-center justify-center text-sm z-20'>
											{index + 1}
										</div>
									</div>

									{/* Step Content */}
									<div className='text-center'>
										<h3 className='text-lg text-[#0B1F3A] mb-2'>
											{step.title}
										</h3>
										<p className='text-sm text-[#6B7280]'>{step.description}</p>
									</div>
								</div>
							)
						})}
					</div>
				</div>
			</div>
		</section>
	)
}
