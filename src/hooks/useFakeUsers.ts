/* eslint-disable @typescript-eslint/no-unsafe-return */
export type FakeUsers = {
    page: string,
    per_page: number,
    total: number,
    total_pages: number,
    data: Evaluateur[]
}

export type Evaluateur = {
    "id": number,
    "email": string,
    "first_name": string,
    "last_name": string,
    "avatar": string
}

const useFakeUsers = () => {



    const fetchUsers: () => Promise<FakeUsers | undefined> = async () => {
        const fakeUsers = await fetch('https://reqres.in/api/users')
        return fakeUsers.json()
    }

    return {
        fetchUsers
    }
}

export default useFakeUsers