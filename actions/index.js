let nextTodoId = 0;

export const addTodo = (text) => {
	return {
		type:"ADD_TODO",
		id:nextTodoId,
		text
	}
}

export const setVisibility = (filter) => {
	return {
		type:"SET_VISIBILITY_FILTER",
		filter
	}
}

export const toggleTodo = (id) => {
	return {
		type:"TOGGOLE_TODO",
		id
	}
}