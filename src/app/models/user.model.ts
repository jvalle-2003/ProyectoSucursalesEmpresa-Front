export class UserModel{
    constructor(
    public name: string,
    public type: string,
    public username: string,
    public email: string,
    public password: string,
    public role: string,
    ){}
}