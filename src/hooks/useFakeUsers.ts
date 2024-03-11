const useFakeUsers = () => {

//   export  type FakeUsers = {
//         "page": string,
//         "per_page": number,
//         "total": number,
//         "total_pages": number,
//         "data": User[]
//     }

//     type User = {
//         "id": number,
//         "email": string,
//         "first_name": string,
//         "last_name": string,
//         "avatar": string
//     }

    const fetchUsers= async () => {
        const fakeUsers = await fetch('https://reqres.in/api/users')
        return fakeUsers.json()
    }

    return {
        fetchUsers
    }
}

export default useFakeUsers