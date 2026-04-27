import React from 'react'

interface CardProps {
	children: React.ReactNode
	className?: string
	hover?: boolean
}

export function Card({ children, className = '', hover = false }: CardProps) {
	return (
		<div
			className={`bg-white rounded-2xl p-6 shadow-sm ${
				hover ? 'hover:shadow-lg transition-shadow duration-200' : ''
			} ${className}`}
		>
			{children}
		</div>
	)
}
