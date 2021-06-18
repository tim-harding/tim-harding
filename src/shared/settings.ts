import { readonly, Ref, ref } from "vue"

class Settings {
	private _isDark: Ref<boolean>

	get isDark() {
		return readonly(this._isDark)
	}

	private setIsDark(value: boolean) {
		this._isDark.value = value
		localStorage.setItem("isDark", JSON.stringify(value))
	}

	toggleIsDark() {
		this.setIsDark(!this.isDark.value)
	}

	constructor() {
		const query = window.matchMedia("(prefers-color-scheme: dark)")
		this._isDark = ref(query.matches)

		query.onchange = (event) => {
			this._isDark.value = event.matches
		}

		const saved = localStorage.getItem("isDark")
		if (saved === null) {
			this.setIsDark(this.isDark.value)
		} else {
			let json = undefined
			try {
				json = JSON.parse(saved)
			} catch (e) {
				this.setIsDark(this._isDark.value)
			}
			if (typeof json === "boolean") {
				this.setIsDark(json)
			}
		}
	}
}

export const settings = new Settings()