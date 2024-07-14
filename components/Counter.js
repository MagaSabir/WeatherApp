export default class Counter extends HTMLElement {

	constructor() {
			super();
			this.attachShadow({ mode: "open" });
			this.loadStyles()
			this.render();
	}

	async loadStyles() {
		const response = await fetch('/style/counter.css')
		const css = await response.text();
		const style = document.createElement('style');
		style.textContent = css;
		this.shadowRoot.appendChild(style)
	}

	template() {
		return `
		<div class="block"></div>
		`
	}

	render() {
			this.shadowRoot.innerHTML +=this.template();
	}
}
