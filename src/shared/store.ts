import { ref, Ref } from "vue"

const SETTINGS = "settings"

class Store {
	private _isDark = ref(false)
	private db: IDBDatabase | undefined = undefined
	
	get isDark() {
		return this._isDark
	}
	
	constructor() {
		const query = window.matchMedia("(prefers-color-scheme: dark)")
		this._isDark.value = query.matches

		query.onchange = (event) => {
			this._isDark.value = event.matches
		}

		const request = window.indexedDB.open("harding")

		request.onerror = function (event) {
			console.error(`Database error: ${this.error?.message}`)
		}

		request.onupgradeneeded = function (event) {
			const db = this.result

			db.onerror = function (event) {
				console.error("Error upgrading database")
			}

			const store = db.createObjectStore(SETTINGS)

			store.transaction.oncomplete = function (event) {
				const store = db.transaction(SETTINGS, "readwrite")
					.objectStore(SETTINGS)
				store.add(false, "darkMode")
			}
		}

		request.onblocked = function (event) {
			console.warn("The database is in use")
		}

		request.onsuccess = (event) => {
			const db = this.result
			const tx = db.transaction(SETTINGS, "readwrite")
			const store = tx.objectStore(SETTINGS)
		}
	}
}

export const store = new Store()