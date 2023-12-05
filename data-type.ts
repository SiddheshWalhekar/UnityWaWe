export interface SignUp{
    name:String,
    email:String
    password:String
    Phone:number
}

export interface Login{
    email:String;
    password:String;
}

export interface userLogin{
    email:String;
    password:String;  

}
export interface userSignUp{
    name:String,
    email:String
    password:String
}

export interface Stationary{
    name:String;
    description:String;
    quantity:number;
    image:String;
    s_count:number;
    id:number;
}

export interface Clothes{
    name:String;
    gender:String;
    description:String;
    quantity:number;
    image:String;
    id:number;
}