import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'Hi, how are you?', likesCount: 7},
				{id: 2, message: 'It\'s my first project)', likesCount: 42}
			],
			newPostText: "Test"
		},
		
		dialogsPage: {
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
			newMessageBody: ""
		},
		sidebar: {}
	},
	
	_callSubscriber() {
		console.log("State changed")
	},
	
	getState() {
		return this._state;
	},
	
	subscribe(observer) {
		this._callSubscriber = observer
	},
	
	dispatch(action) {
		this._state.profilePage = profileReducer(this._state.profilePage, action)
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
		this._state.sidebar = sidebarReducer(this._state.sidebar, action)
		this._callSubscriber(this._state)
	}
}

export default store