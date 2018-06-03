import { Component } from '@stencil/core';
import { Menu } from '../icons';

@Component({
	tag: 'app-nav',
	styleUrl: 'app-nav.scss'
})
export class AppNav {

	render() {
		return (
			<nav aria-label="site">
				<ul>
					<li>
						<Menu/>
						<stencil-route-link url="/">Nomadx</stencil-route-link>
					</li>
					<li>
						<stencil-route-link url="/component/hello-world">Components</stencil-route-link>
					</li>
					<li>
						<a href="/">About</a>
					</li>
				</ul>
			</nav>
		);
	}
}
