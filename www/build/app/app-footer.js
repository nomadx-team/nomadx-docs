/*! Built with http://stenciljs.com */
const { h } = window.App;

class Footer {
    render() {
        return (h("footer", null,
            h("div", { class: "content" })));
    }
    static get is() { return "app-footer"; }
    static get style() { return "app-footer {\n  display: block; }\n  app-footer footer {\n    background-color: var(--gray0);\n    width: 100vw;\n    height: 256px; }"; }
}

export { Footer as AppFooter };
