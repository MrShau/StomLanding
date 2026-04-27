import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	label?: string
}

export function Input({ label, className = '', ...props }: InputProps) {
	return (
		<div className='w-full'>
			{label && (
				<label className='block mb-2 text-sm text-[#0B1F3A]'>{label}</label>
			)}
			<input
				className={`w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1CB5B2] focus:border-transparent transition-all ${className}`}
				{...props}
			/>
		</div>
	)
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
	label?: string
}

export function TextArea({ label, className = '', ...props }: TextAreaProps) {
	return (
		<div className='w-full'>
			{label && (
				<label className='block mb-2 text-sm text-[#0B1F3A]'>{label}</label>
			)}
			<textarea
				className={`w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1CB5B2] focus:border-transparent transition-all ${className}`}
				{...props}
			/>
		</div>
	)
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
	label?: string
	options: { value: string; label: string }[]
}

export function Select({
	label,
	options,
	className = '',
	...props
}: SelectProps) {
	return (
		<div className='w-full'>
			{label && (
				<label className='block mb-2 text-sm text-[#0B1F3A]'>{label}</label>
			)}
			<select
				className={`w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#1CB5B2] focus:border-transparent transition-all ${className}`}
				{...props}
			>
				{options.map(option => (
					<option key={option.value} value={option.value}>
						{option.label}
					</option>
				))}
			</select>
		</div>
	)
}
