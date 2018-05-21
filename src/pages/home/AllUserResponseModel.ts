export class UserDetails {
    constructor (
        public Courier_Name: string,
        public Units_Branches: string,
        public Phone_Numbers: number,
        public Email_Address: string) {}
}

export class UserResponseModel {
    constructor (
        public StatusCode: number,
        public Message: UserDetails[],
        public Error: string,
        public AuthToken: string) {}
}