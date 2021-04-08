export class signUpForm {
    constructor(
        public username: string,
        public password: string,
        public firstName: string,
        public lastName: string,
        public birthDay: number,
        public birthMonth: number,
        public birthYear: number,
        public gender: boolean,
        public city: string,
        public address: string,
        public email: string,
        public role: string
        // ,
        // public alterEgo?: string
      ) {  }
}