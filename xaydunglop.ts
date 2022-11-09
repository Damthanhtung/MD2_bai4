enum Role {
    admin=1,
    user
}
class User {
    protected _name: string;
    protected _email: string;
    public _role: Role;

    constructor(name: string, email: string, role: Role) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }
     getInfo(name: string, email: string, role: number )  {
        return User;
    }
    IsAdmin(role:Role): void {
        if (role===1) {
            console.log('Là admin');
        }
        else if (role===2){
            console.log('Là user');
        }
    }
}
let tung = new User('Dam Thanh Tung', 'damthanhtung998@gmail.com',1);
let ha = new User('Nguyen Thi Thu Ha', 'thuha41099@gmail.com', 2);
console.log(tung);
tung.IsAdmin(1);
console.log(ha);
ha.IsAdmin(2);