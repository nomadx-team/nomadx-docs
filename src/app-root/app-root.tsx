import { Component } from '@stencil/core';
import '@stencil/router';


@Component({
	tag: 'app-root'
})
export class AppRoot {

	render() {
		return ([
			<stencil-router>
				<stencil-route url="/" exact={true} component="home-page"></stencil-route>
				<stencil-route url="/component/:componentName" component="component-page"></stencil-route>
			</stencil-router>,
			// <app-footer></app-footer>
		])
	}
}
