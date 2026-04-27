import { MenuIcon, PhoneIcon, XIcon } from 'lucide-react'
import { useState } from 'react'
import { Button } from './ui/Button'

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

	const menuItems = ['Услуги', 'Врачи', 'Цены', 'Отзывы', 'FAQ', 'Контакты']

	return (
		<>
			<header className='sticky top-0 z-50 bg-white shadow-sm'>
				<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
					<div className='flex items-center justify-between h-20'>
						<div className='flex items-center'>
							<div className='text-2xl text-[#0B1F3A]'>
								<span className='font-bold'>WhiteDent</span>
								<span className='text-[#1CB5B2] ml-1'>Clinic</span>
							</div>
						</div>

						<nav className='hidden lg:flex items-center gap-8'>
							{menuItems.map(item => (
								<a
									key={item}
									href={`#${item.toLowerCase()}`}
									className='text-[#0B1F3A] hover:text-[#1CB5B2] transition-colors'
								>
									{item}
								</a>
							))}
						</nav>

						<div className='hidden lg:flex items-center gap-6'>
							<div className='text-right'>
								<div className='text-[#0B1F3A] font-semibold'>
									+7 (123) 456-78-90
								</div>
								<div className='text-sm text-[#6B7280]'>Пн-Пт 9:00-18:00</div>
							</div>
							<a href={`#контакты`}>
								<Button className='w-full'>Записаться</Button>
							</a>
						</div>

						<div className='flex lg:hidden items-center gap-4'>
							<a href='tel:+71234567890' className='text-[#1CB5B2]'>
								<PhoneIcon className='w-6 h-6' />
							</a>

							<button
								onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
								className='text-[#0B1F3A]'
							>
								{mobileMenuOpen ? (
									<XIcon className='w-6 h-6' />
								) : (
									<MenuIcon className='w-6 h-6' />
								)}
							</button>
						</div>
					</div>

					{mobileMenuOpen && (
						<div className='lg:hidden py-4 border-t border-[#E5E7EB]'>
							<nav className='flex flex-col gap-4'>
								{menuItems.map(item => (
									<a
										key={item}
										href={`#${item.toLowerCase()}`}
										className='text-[#0B1F3A] hover:text-[#1CB5B2] active:text-[#1CB5B2] transition-colors py-2 mx-auto'
										onClick={() => setMobileMenuOpen(false)}
									>
										{item}
									</a>
								))}
								<div className='pt-4 border-t border-[#E5E7EB] text-center'>
									<div className='text-[#0B1F3A] font-semibold mb-1'>
										+7 (123) 456-78-90
									</div>
									<div className='text-sm text-[#6B7280] mb-4'>
										Пн-Пт 9:00-18:00
									</div>
									<a href={`#контакты`}>
										<Button className='w-full'>Записаться</Button>
									</a>
								</div>
							</nav>
						</div>
					)}
				</div>
			</header>
		</>
	)
}
