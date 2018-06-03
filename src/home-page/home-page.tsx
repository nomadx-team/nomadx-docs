import { Component, State } from '@stencil/core';


@Component({
	tag: 'home-page',
	styleUrl: 'home-page.scss'
})
export class Home {

	@State() sections: { title: string, description: string, icon: string }[] = [
		{
			title: 'Vanilla',
			description: 'Use <nomadx> with your favorite framework or with none at all.',
			icon: 'fast'
		}, {
			title: 'Modular',
			description: 'Include a single component or install them all at one',
			icon: 'simple'
		}
	]

	render() {
		return [
			<header role="banner" class="reversed">
				<app-nav />
				<app-hero />
			</header>,
			<main>
				<section class="intro">
					<div class="content">
						<h3>Nomadx</h3>
						<p>Nomadx is a set of web components that make your products more accessible.</p>
					</div>
				</section>

				<section class="connect">
					<div class="content">
						<h3>Connect</h3>
						<p>Follow us on twitter</p>
						<a href="https://twitter.com/nomadx_team">@nomadx_team</a>
					</div>
				</section>

				<section class="newsletter">
					<div class="content">
						<h3>Subscribe to our Newsletter</h3>
						<p>Get monthly updates about new components, updates, community projects, and more...</p>

					</div>
				</section>
			</main>
		]
	}
}
