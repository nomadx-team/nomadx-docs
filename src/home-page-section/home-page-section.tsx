import { Component, Prop } from '@stencil/core';


@Component({
	tag: 'home-page-section',
	styleUrl: 'home-page-section.scss'
})
export class HomeSection {

	@Prop() sectionTitle: string;
	@Prop() description: string;
	@Prop() icon: string;

	render() {
		return (
			<section>
				<img width="64" height="64" src={`assets/images/icons/${this.icon}.svg`} alt={this.sectionTitle.toLowerCase()} />
				<div class="text">
					<h3> { this.sectionTitle } </h3>
					<p> { this.description } </p>
				</div>
			</section>
		);
	}
}
