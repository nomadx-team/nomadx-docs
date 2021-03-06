/*! Built with http://stenciljs.com */
const { h } = window.App;

class ComponentPage {
    render() {
        return (h("p", null,
            "My name is Stencil ",
            this.match.params.componentName));
    }
    static get is() { return "component-page"; }
    static get properties() { return {
        "match": {
            "type": "Any",
            "attr": "match"
        }
    }; }
}

export { ComponentPage };
