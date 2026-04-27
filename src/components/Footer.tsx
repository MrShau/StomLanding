import { Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
	const menuItems = ['Услуги', 'Врачи', 'Цены', 'Отзывы', 'FAQ', 'Контакты']

	return (
		<footer className='bg-[#0B1F3A] text-white'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8 py-12'>
				<div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8'>
					{/* Logo and Description */}
					<div>
						<div className='text-2xl mb-4'>
							<span className='font-bold'>WhiteDent</span>
							<span className='text-[#1CB5B2] ml-1'>Clinic</span>
						</div>
						<p className='text-white text-opacity-70 mb-4'>
							Современная стоматология в Казани. Лечение без боли с гарантией до
							5 лет.
						</p>
						<div className='flex gap-4'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								xmlnsXlink='http://www.w3.org/1999/xlink'
								aria-label='Instagram'
								role='img'
								className='w-12 h-12 cursor-pointer hover:w-13 hover:h-13 transition-all'
								viewBox='0 0 512 512'
								fill='#000000'
							>
								<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									stroke-linecap='round'
									stroke-linejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									{' '}
									<rect width='512' height='512' rx='15%' id='b'></rect>{' '}
									<use fill='url(#a)' xlinkHref='#b'></use>{' '}
									<use fill='url(#c)' xlinkHref='#b'></use>{' '}
									<radialGradient id='a' cx='.4' cy='1' r='1'>
										{' '}
										<stop offset='.1' stop-color='#fd5'></stop>{' '}
										<stop offset='.5' stop-color='#ff543e'></stop>{' '}
										<stop offset='1' stop-color='#c837ab'></stop>{' '}
									</radialGradient>{' '}
									<linearGradient id='c' x2='.2' y2='1'>
										{' '}
										<stop offset='.1' stop-color='#3771c8'></stop>{' '}
										<stop
											offset='.5'
											stop-color='#60f'
											stop-opacity='0'
										></stop>{' '}
									</linearGradient>{' '}
									<g fill='none' stroke='#ffffff' stroke-width='30'>
										{' '}
										<rect
											width='308'
											height='308'
											x='102'
											y='102'
											rx='81'
										></rect>{' '}
										<circle cx='256' cy='256' r='72'></circle>{' '}
										<circle cx='347' cy='165' r='6'></circle>{' '}
									</g>{' '}
								</g>
							</svg>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								aria-label='Telegram'
								role='img'
								className='w-12 h-12 cursor-pointer hover:w-13 hover:h-13 transition-all'
								viewBox='0 0 512 512'
								fill='#000000'
							>
								<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									stroke-linecap='round'
									stroke-linejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									<rect width='512' height='512' rx='15%' fill='#37aee2'></rect>
									<path
										fill='#c8daea'
										d='M199 404c-11 0-10-4-13-14l-32-105 245-144'
									></path>
									<path
										fill='#a9c9dd'
										d='M199 404c7 0 11-4 16-8l45-43-56-34'
									></path>
									<path
										fill='#f6fbfe'
										d='M204 319l135 99c14 9 26 4 30-14l55-258c5-22-9-32-24-25L79 245c-21 8-21 21-4 26l83 26 190-121c9-5 17-3 11 4'
									></path>
								</g>
							</svg>

							<svg
								xmlns='http://www.w3.org/2000/svg'
								aria-label='WhatsApp'
								role='img'
								className='w-12 h-12 cursor-pointer hover:w-13 hover:h-13 transition-all'
								viewBox='0 0 512 512'
								fill='#000000'
							>
								<g id='SVGRepo_bgCarrier' stroke-width='0'></g>
								<g
									id='SVGRepo_tracerCarrier'
									stroke-linecap='round'
									stroke-linejoin='round'
								></g>
								<g id='SVGRepo_iconCarrier'>
									<rect width='512' height='512' rx='15%' fill='#25d366'></rect>
									<path
										fill='#25d366'
										stroke='#ffffff'
										stroke-width='26'
										d='M123 393l14-65a138 138 0 1150 47z'
									></path>
									<path
										fill='#ffffff'
										d='M308 273c-3-2-6-3-9 1l-12 16c-3 2-5 3-9 1-15-8-36-17-54-47-1-4 1-6 3-8l9-14c2-2 1-4 0-6l-12-29c-3-8-6-7-9-7h-8c-2 0-6 1-10 5-22 22-13 53 3 73 3 4 23 40 66 59 32 14 39 12 48 10 11-1 22-10 27-19 1-3 6-16 2-18'
									></path>
								</g>
							</svg>
						</div>
					</div>

					{/* Quick Links */}
					<div>
						<h4 className='text-lg mb-4'>Быстрые ссылки</h4>
						<nav className='space-y-2'>
							{menuItems.map(item => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className='block text-white text-opacity-70 hover:text-[#1CB5B2] transition-colors'
								>
									{item}
								</a>
							))}
						</nav>
					</div>

					{/* Services */}
					<div>
						<h4 className='text-lg mb-4'>Услуги</h4>
						<nav className='space-y-2 text-white text-opacity-70'>
							<a
								href='#'
								className='block hover:text-[#1CB5B2] transition-colors'
							>
								Лечение кариеса
							</a>
							<a
								href='#'
								className='block hover:text-[#1CB5B2] transition-colors'
							>
								Имплантация
							</a>
							<a
								href='#'
								className='block hover:text-[#1CB5B2] transition-colors'
							>
								Отбеливание зубов
							</a>
							<a
								href='#'
								className='block hover:text-[#1CB5B2] transition-colors'
							>
								Виниры
							</a>
							<a
								href='#'
								className='block hover:text-[#1CB5B2] transition-colors'
							>
								Ортодонтия
							</a>
						</nav>
					</div>

					{/* Contacts */}
					<div>
						<h4 className='text-lg mb-4'>Контакты</h4>
						<div className='space-y-3'>
							<div className='flex items-start gap-3'>
								<MapPin className='w-5 h-5 text-[#1CB5B2] flex-shrink-0 mt-0.5' />
								<span className='text-white text-opacity-70'>
									г. Казань, ул. Иванова, д. 77
								</span>
							</div>
							<div className='flex items-center gap-3'>
								<Phone className='w-5 h-5 text-[#1CB5B2] flex-shrink-0' />
								<a
									href='tel:+78435552211'
									className='text-white text-opacity-70 hover:text-[#1CB5B2] transition-colors'
								>
									+7 (843) 555-22-11
								</a>
							</div>
							<div className='flex items-center gap-3'>
								<Mail className='w-5 h-5 text-[#1CB5B2] flex-shrink-0' />
								<a
									href='mailto:info@whitedent-kazan.ru'
									className='text-white text-opacity-70 hover:text-[#1CB5B2] transition-colors'
								>
									info@whitedent-kazan.ru
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-white border-opacity-20 pt-8'>
					<div className='flex flex-col md:flex-row justify-between items-center gap-4'>
						<p className='text-white text-opacity-70 text-sm'>
							© 2026 WhiteDent Clinic. Все права защищены.
						</p>
						<div className='flex gap-6 text-sm'>
							<a
								href='#'
								className='text-white text-opacity-70 hover:text-[#1CB5B2] transition-colors'
							>
								Политика конфиденциальности
							</a>
							<a
								href='#'
								className='text-white text-opacity-70 hover:text-[#1CB5B2] transition-colors'
							>
								Пользовательское соглашение
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
