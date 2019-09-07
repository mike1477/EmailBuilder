import { IPredicateOption } from './predicates/predicateOption';

export class PropertyCondition<T>{
    value: any;
    when: IPredicateOption<T>;
    left: T;
    right: T;
}