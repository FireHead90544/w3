import React from 'react'

const Footer = () => {
  return (
		<footer className="flex justify-between items-center text-muted-foreground">
			<div className="flex space-x-2 text-sm">
				<span className="hover:text-foreground cursor-pointer">
					&copy; Rudransh Joshi
				</span>
				<span>/</span>
				<span className="hover:text-foreground cursor-pointer">2024</span>
				<span>/</span>
				<span className="hover:text-foreground cursor-pointer">
					Built with &lt;3
				</span>
			</div>
			<span className="hover:text-foreground cursor-pointer">🍊 orng :3</span>
		</footer>
	);
}

export default Footer