import { Component, Element, Listen } from '@stencil/core';

@Component({
	tag: 'app-hero',
	styleUrl: 'app-hero.scss'
})
export class AppHero {

	@Element() element: HTMLElement;
	@Listen('document:scroll')
	onScroll() {
		const value = document.documentElement.scrollTop;
		const max = 256;
		if (value <= max) {
			this.element.style.setProperty('--skew', `${value / max}`)
		}
	}

	render() {
		return (
			<div class="hero">
				<app-hero-content />
			</div>
		);
	}
}
