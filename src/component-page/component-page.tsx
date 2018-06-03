import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';


@Component({
	tag: 'component-page'
})
export class ComponentPage {
	@Prop() match: MatchResults;

	render() {
		return (
			<p>My name is Stencil {this.match.params.componentName}</p>
		);
	}
}
