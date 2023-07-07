export interface  Student {
    id:number
    classId:[IClass]
    name:String
    roll:number
    father:String
    address:String
    dob:Date
}
export interface IClass {
    id?: any,
    name: string,
    head: string,
    floor: string
}
