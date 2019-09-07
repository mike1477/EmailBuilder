import { PropertyCondition } from './propertyCondition';

export class PropertyManger<T>{
    defaultValue: any;
    conditions: Array<PropertyCondition<T>>;

}