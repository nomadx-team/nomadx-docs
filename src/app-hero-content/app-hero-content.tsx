import { Component } from '@stencil/core';

@Component({
	tag: 'app-hero-content',
	styleUrl: 'app-hero-content.scss'
})
export class AppHeroContent {

	render() {
		return (
			<div class="container">
				<img src="./assets/images/logo.svg" alt="Nomadx Logo" />
				<h3>Awesome, accessible web components.</h3>
				<button>Get Started</button>
			</div>
		);
	}
}
