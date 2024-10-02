import { MyDataBaseClassic } from "./db/my-database-classic.js";
const RunMyDataBaseClassic =  MyDataBaseClassic.getInstance();
RunMyDataBaseClassic.Add({name: "John Doe", age: 30});
RunMyDataBaseClassic.Add({name: "Jane Doe", age: 28});
RunMyDataBaseClassic.Add({name: "Visual Code", age: 18});
RunMyDataBaseClassic.Add({name: "Futebol Code", age: 18});
RunMyDataBaseClassic.show();
RunMyDataBaseClassic.Remove();
console.log(`Apos de nos remover o elementos do Array!`)
RunMyDataBaseClassic.show();
