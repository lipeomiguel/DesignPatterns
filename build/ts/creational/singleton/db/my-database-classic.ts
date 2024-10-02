interface User{
    name: string;
    age: number;
}
export class MyDataBaseClassic{
    private static instance: MyDataBaseClassic | null = null;
    private Users: User[] = [];
    private constructor(){
        
    }
    public static getInstance(): MyDataBaseClassic{
        if(this.instance === null){
            this.instance = new MyDataBaseClassic();
        }
        return this.instance;
    }
    public Add(user: User):void{
        this.Users.push(user);
    }
    public Remove():void{
        this.Users.pop();
    }
    public show():void{
        for (const user of this.Users){
            console.log(user);
        }
    }
}
