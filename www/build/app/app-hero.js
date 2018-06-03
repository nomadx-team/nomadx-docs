/*! Built with http://stenciljs.com */
const { h } = window.App;

class AppHero {
    onScroll() {
        const value = document.documentElement.scrollTop;
        const max = 256;
        if (value <= max) {
            this.element.style.setProperty('--skew', `${value / max}`);
        }
    }
    render() {
        return (h("div", { class: "hero" },
            h("app-hero-content", null)));
    }
    static get is() { return "app-hero"; }
    static get properties() { return {
        "element": {
            "elementRef": true
        }
    }; }
    static get listeners() { return [{
            "name": "document:scroll",
            "method": "onScroll",
            "passive": true
        }]; }
    static get style() { return "app-hero {\n  position: relative;\n  --skew: 0; }\n  app-hero::before {\n    --height: calc(calc(100vw * 9) / 12);\n    content: \"\";\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    width: 100vw;\n    height: var(--height);\n    max-height: 460px;\n    background-image: linear-gradient(45deg, var(--accent), var(--accent-light));\n    -webkit-transform: translateY(-50%) skewY(calc(-15deg + calc(var(--skew) * 15deg)));\n    transform: translateY(-50%) skewY(calc(-15deg + calc(var(--skew) * 15deg))); }"; }
}

class AppHeroContent {
    render() {
        return (h("div", { class: "container" },
            h("img", { src: "./assets/images/logo.svg", alt: "Nomadx Logo" }),
            h("h3", null, "Awesome, accessible web components."),
            h("button", null, "Get Started")));
    }
    static get is() { return "app-hero-content"; }
    static get style() { return "app-hero-content {\n  display: block;\n  position: absolute;\n  top: 10vw;\n  z-index: 10;\n  width: 100vw; }\n  app-hero-content .container {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: column nowrap;\n    flex-flow: column nowrap;\n    text-align: center;\n    max-width: var(--max-width);\n    margin: 0 auto; }\n  app-hero-content img {\n    width: 90vw;\n    max-width: 540px; }\n  app-hero-content h3 {\n    margin-top: 0; }"; }
}

export { AppHero, AppHeroContent };
