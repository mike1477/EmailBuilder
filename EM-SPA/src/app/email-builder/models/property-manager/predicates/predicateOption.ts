
export interface IPredicateOption<T>{
    name:string;
    label:string;
    evaluator: (left:T, right:T)=> boolean
}