export default class Home extends HTMLElement {
	constructor() {
			super();
			this.attachShadow({ mode: "open" });
			this.loadStyles();
			this.render();
	}

	async loadStyles() {
			const response = await fetch('/style/home.css');
			const css = await response.text();
			const style = document.createElement('style');
			style.textContent = css;
			this.shadowRoot.appendChild(style);
	}


	template() {
			return `
			<div class="block">
				<img src="/icons/Weather.svg" alt="weather">
				<p class="temp">19&deg</p>
				<p class="wth">Precipitations</p>
					<div class="temp-block">
						<p>Max: 24</p>
						<p>Min: 18</p>
					</div>
				<img src="/icons/House.svg" alt="weather">
				<div class="data-temp-block">
					<div class="current-data">
						<p>Today</p>
						<p>July, 21</p>
					</div>
					<hr>
				</div>
			</div>
			`;
	}

	render() {
			this.shadowRoot.innerHTML = this.template();
	}
}


