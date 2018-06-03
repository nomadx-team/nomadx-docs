/*! Built with http://stenciljs.com */
const { h } = window.App;

import { a as matchPath, k as isModifiedEvent } from './chunk-1fa7ed7c.js';

const Menu = () => (h("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24" },
    h("path", { d: "M0 0h24v24H0z", fill: "none" }),
    h("path", { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" })));

class AppNav {
    render() {
        return (h("nav", { "aria-label": "site" },
            h("ul", null,
                h("li", null,
                    h(Menu, null),
                    h("stencil-route-link", { url: "/" }, "Nomadx")),
                h("li", null,
                    h("stencil-route-link", { url: "/component/hello-world" }, "Components")),
                h("li", null,
                    h("a", { href: "/" }, "About")))));
    }
    static get is() { return "app-nav"; }
    static get style() { return "app-nav nav {\n  width: 100%;\n  position: fixed;\n  top: 0;\n  height: var(--nav-height);\n  z-index: 999; }\n\napp-nav ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -ms-flex-flow: row nowrap;\n  flex-flow: row nowrap;\n  -webkit-box-align: center;\n  -ms-flex-align: center;\n  align-items: center;\n  -webkit-box-pack: stretch;\n  -ms-flex-pack: stretch;\n  justify-content: stretch; }\n  app-nav ul li a {\n    margin: 0;\n    padding: 0;\n    color: #FFF; }"; }
}

class Home {
    constructor() {
        this.sections = [
            {
                title: 'Vanilla',
                description: 'Use <nomadx> with your favorite framework or with none at all.',
                icon: 'fast'
            }, {
                title: 'Modular',
                description: 'Include a single component or install them all at one',
                icon: 'simple'
            }
        ];
    }
    render() {
        return [
            h("header", { role: "banner", class: "reversed" },
                h("app-nav", null),
                h("app-hero", null)),
            h("main", null,
                h("section", { class: "intro" },
                    h("div", { class: "content" },
                        h("h3", null, "Nomadx"),
                        h("p", null, "Nomadx is a set of web components that make your products more accessible."))),
                h("section", { class: "connect" },
                    h("div", { class: "content" },
                        h("h3", null, "Connect"),
                        h("p", null, "Follow us on twitter"),
                        h("a", { href: "https://twitter.com/nomadx_team" }, "@nomadx_team"))),
                h("section", { class: "newsletter" },
                    h("div", { class: "content" },
                        h("h3", null, "Subscribe to our Newsletter"),
                        h("p", null, "Get monthly updates about new components, updates, community projects, and more..."))))
        ];
    }
    static get is() { return "home-page"; }
    static get properties() { return {
        "sections": {
            "state": true
        }
    }; }
    static get style() { return "home-page main {\n  padding-top: calc(calc(100vw * 9) / 16);\n  width: 100%;\n  margin: 0 auto; }\n\nhome-page section {\n  width: 100%;\n  padding: 16px; }\n  home-page section .content {\n    width: 100%;\n    max-width: var(--max-width);\n    margin: 0 auto; }\n  home-page section.intro {\n    background-color: var(--gray0);\n    height: 256px;\n    width: 100%; }\n\n\@media (min-width: 720px) {\n  home-page main {\n    padding-top: 512px; } }"; }
}

/**
  * @name Route
  * @module ionic
  * @description
 */
class RouteLink {
    constructor() {
        this.unsubscribe = () => { return; };
        this.activeClass = 'link-active';
        this.exact = false;
        this.strict = true;
        /**
         *  Custom tag to use instead of an anchor
         */
        this.custom = 'a';
        this.match = null;
    }
    // Identify if the current route is a match.
    computeMatch(pathname) {
        if (!pathname) {
            const location = this.activeRouter.get('location');
            pathname = location.pathname;
        }
        const match = matchPath(pathname, {
            path: this.urlMatch || this.url,
            exact: this.exact,
            strict: this.strict
        });
        return match;
    }
    componentWillLoad() {
        // subscribe the project's active router and listen
        // for changes. Recompute the match if any updates get
        // pushed
        this.unsubscribe = this.activeRouter.subscribe({
            isMatch: this.computeMatch.bind(this),
            listener: (matchResult) => {
                this.match = matchResult;
            },
        });
        // Likely that this route link could receive a location prop
        this.match = this.computeMatch();
    }
    componentDidUnload() {
        // be sure to unsubscribe to the router so that we don't
        // get any memory leaks
        this.unsubscribe();
    }
    handleClick(e) {
        if (isModifiedEvent(e)) {
            return;
        }
        e.preventDefault();
        if (!this.activeRouter) {
            console.warn('<stencil-route-link> wasn\'t passed an instance of the router as the "router" prop!');
            return;
        }
        const history = this.activeRouter.get('history');
        return history.push(this.getUrl(this.url));
    }
    // Get the URL for this route link without the root from the router
    getUrl(url) {
        const root = this.activeRouter.get('root') || '/';
        // Don't allow double slashes
        if (url.charAt(0) == '/' && root.charAt(root.length - 1) == '/') {
            return root.slice(0, root.length - 1) + url;
        }
        return root + url;
    }
    render() {
        let anchorAttributes = {
            class: {
                [this.activeClass]: this.match !== null,
            },
            onClick: this.handleClick.bind(this)
        };
        if (this.anchorClass) {
            anchorAttributes.class[this.anchorClass] = true;
        }
        if (this.custom === 'a') {
            anchorAttributes = Object.assign({}, anchorAttributes, { href: this.url, title: this.anchorTitle, role: this.anchorRole, tabindex: this.anchorTabIndex });
        }
        return (h(this.custom, Object.assign({}, anchorAttributes),
            h("slot", null)));
    }
    static get is() { return "stencil-route-link"; }
    static get properties() { return {
        "activeClass": {
            "type": String,
            "attr": "active-class"
        },
        "activeRouter": {
            "context": "activeRouter"
        },
        "anchorClass": {
            "type": String,
            "attr": "anchor-class"
        },
        "anchorRole": {
            "type": String,
            "attr": "anchor-role"
        },
        "anchorTabIndex": {
            "type": String,
            "attr": "anchor-tab-index"
        },
        "anchorTitle": {
            "type": String,
            "attr": "anchor-title"
        },
        "custom": {
            "type": String,
            "attr": "custom"
        },
        "exact": {
            "type": Boolean,
            "attr": "exact"
        },
        "match": {
            "state": true
        },
        "strict": {
            "type": Boolean,
            "attr": "strict"
        },
        "url": {
            "type": String,
            "attr": "url"
        },
        "urlMatch": {
            "type": String,
            "attr": "url-match"
        }
    }; }
}

export { AppNav, Home as HomePage, RouteLink as StencilRouteLink };
