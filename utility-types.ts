interface MyUser {
    name: string | number,
    id: string,
    email?: string
}

type MyUserOptional = Partial<MyUser>
type MyUserRequired = Required<MyUser>
type JustEmailAndNAme = Pick<MyUser, "email">

//utility types
//Partial<> Required<> Pick<> Record<> Omit<>

const mapById = (users: MyUser[]): Record<string, MyUser>=>{
    return users.reduce((a, v)=>{
        const { id, ...others} = v
        console.log('a', others)
        return {
            ...a,
            [id]: others
        }
    }, {})
}

console.log(mapById([{id: 'foo', name: 'mr foo', email: 'foo@gmail.com'}, {id: 'baz', name: 'mr baz'}]))


