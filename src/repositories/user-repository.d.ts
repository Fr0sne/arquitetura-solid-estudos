
interface CreateUserInterface {
    name: string
    email: string
    password: string
}
interface UserInterface extends CreateUserInterface{
    id: string
}

declare interface UserRepository {
    create(data: CreateUserInterface);
    findById(id: string): UserInterface | undefined;
    findByEmail(email: string): UserInterface | undefined;
}