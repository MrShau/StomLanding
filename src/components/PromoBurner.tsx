import { Gift } from 'lucide-react'
import { Button } from './ui/Button'

export function PromoBanner() {
	return (
		<section className='py-16 bg-gradient-to-r from-[#1CB5B2] to-[#2AA9FF]'>
			<div className='max-w-[1440px] mx-auto px-4 lg:px-8'>
				<div className='flex flex-col md:flex-row items-center justify-between gap-8'>
					<div className='flex items-start gap-4'>
						<div className='w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center flex-shrink-0'>
							<Gift className='w-8 h-8 text-[#1CB5B2]' />
						</div>
						<div>
							<h2 className='text-2xl lg:text-3xl text-white mb-2'>
								Бесплатная консультация + диагностика
							</h2>
							<p className='text-white text-opacity-90'>
								При записи онлайн сегодня
							</p>
						</div>
					</div>
					<a href={`#консультация`}>
						<Button variant='secondary' size='lg' className='flex-shrink-0'>
							Получить консультацию
						</Button>
					</a>
				</div>
			</div>
		</section>
	)
}
