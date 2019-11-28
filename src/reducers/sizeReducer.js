export default function sizeReducer(state = { size: "desktop" }, action) {
	switch (action.type) {
		case "SET_SIZE":
			let newSize = action.size <= 700 ? "mobile" : "desktop"
			let x = { ...state, size: newSize }

			return x

		default:
			return state
	}
}
