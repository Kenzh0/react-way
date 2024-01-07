const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
	dialogs: [
		{id: 1, name: "Yera"},
		{id: 2, name: "Yela"},
		{id: 3, name: "Maxim"},
		{id: 4, name: "David"},
		{id: 5, name: "Vova"},
		{id: 6, name: "Madi"},
		{id: 7, name: "Madiar"}
	],
	
	messages: [
		{id: 1, message: 'Hello!'},
		{id: 2, message: 'Good morning!'},
		{id: 3, message: 'How are you?'},
		{id: 4, message: 'Test'},
		{id: 5, message: 'Test!'},
		{id: 6, message: 'Test!'},
		{id: 7, message: 'Test!'}
	],
}

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEND_MESSAGE: {
			let body = action.newMessageBody
			return {
				...state,
				newMessageBody: '',
				messages: [...state.messages, {id: 8, message: body}]
		}
		}
		default:
			return state;
	}
}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody})

export default dialogsReducer;