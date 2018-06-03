/*! Built with http://stenciljs.com */
const { h } = window.App;

class HomeSection {
    render() {
        return (h("section", null,
            h("img", { width: "64", height: "64", src: `assets/images/icons/${this.icon}.svg`, alt: this.sectionTitle.toLowerCase() }),
            h("div", { class: "text" },
                h("h3", null,
                    " ",
                    this.sectionTitle,
                    " "),
                h("p", null,
                    " ",
                    this.description,
                    " "))));
    }
    static get is() { return "home-page-section"; }
    static get properties() { return {
        "description": {
            "type": String,
            "attr": "description"
        },
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "sectionTitle": {
            "type": String,
            "attr": "section-title"
        }
    }; }
    static get style() { return "home-page-section {\n  display: block; }\n  home-page-section section {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: column wrap;\n    flex-flow: column wrap;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    width: 100%;\n    min-height: 128px; }\n  home-page-section img {\n    padding: 16px;\n    width: 72px;\n    height: 72px; }\n  home-page-section .text {\n    width: calc(100% - 64px);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: column nowrap;\n    flex-flow: column nowrap;\n    border-bottom: 2px dotted var(--gray); }\n    home-page-section .text h3 {\n      margin-top: 0; }\n\n\@media (min-width: 720px) {\n  app-home-section section {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -ms-flex-flow: row nowrap;\n    flex-flow: row nowrap; }\n  app-home-section img {\n    width: 56px;\n    height: 56px; } }"; }
}

export { HomeSection as HomePageSection };
