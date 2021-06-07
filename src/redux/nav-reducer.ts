
type myFriendType = {
    id:number
    name:string
    img:string
}

let initialState =  {
    myFriends: [
        {
            id:1,
            name: "Andrew",
            img: "https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300",
        },
        {
            id:2,
            name: "Aziza",
            img: "https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"
        },
        {
            id:3,
            name: "Rajab",
            img: "https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"
        }
    ] as Array<myFriendType>
}

type InitialStateType = typeof initialState

const navReducer = (state = initialState,action :any):InitialStateType=>{
    return state
}

export default navReducer;