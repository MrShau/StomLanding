import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary' | 'outline'
	size?: 'sm' | 'md' | 'lg'
	children: React.ReactNode
}

export function Button({
	variant = 'primary',
	size = 'md',
	className = '',
	children,
	...props
}: ButtonProps) {
	const baseStyles =
		'rounded-xl transition-all duration-200 inline-flex items-center justify-center gap-2'

	const variants = {
		primary:
			'bg-[#1CB5B2] text-white hover:bg-[#189f9c] shadow-sm hover:shadow-md',
		secondary:
			'bg-white text-[#0B1F3A] border-2 border-[#1CB5B2] hover:bg-[#f0fffe]',
		outline:
			'bg-transparent text-[#0B1F3A] border border-[#E5E7EB] hover:border-[#1CB5B2] hover:text-[#1CB5B2]',
	}

	const sizes = {
		sm: 'px-4 py-2 text-sm',
		md: 'px-6 py-3',
		lg: 'px-8 py-4',
	}

	return (
		<button
			className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className} cursor-pointer`}
			{...props}
		>
			{children}
		</button>
	)
}
