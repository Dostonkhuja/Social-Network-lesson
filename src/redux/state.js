let state = {
    profilePage: {
        posts: [
            {id:1, post: 'hou are you?', likesCount: 12},
            {id:2, post: 'nice to me to you!', likesCount: 1},
        ],
    },
    dialogsPage: {
        dialogs: [
            {name: "Doston", id: 1},
            {name: "Alisher", id: 2},
            {name: "Sveta", id: 3},
            {name: "Bahtiyor", id: 4},
            {name: "Davron", id: 5}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you'},
            {id: 3, message: 'Yo'},
            {id: 4, message: 'Yo'},
            {id: 5, message: 'Yo'}
        ]
    },
    navPage: {
        myFriends: [
            {
                name: "Andrew",
                img: "https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"
            },
            {
                name: "Aziza",
                img: "https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"
            },
            {
                name: "Rajab",
                img: "https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"
            }
        ]
    }
}

export const addPost= (textPost) => {

let newPost = {
    id:2, post: textPost, likesCount: 0
}
    state.profilePage.posts.push(newPost)
}


export default state;