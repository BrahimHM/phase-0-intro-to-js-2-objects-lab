let employee={person1:{name:'brahim',streetAddress:'alger'}
,person2:{name:'mohammed',streetAddress:'rouiba'},person3:{name:'Manel',streetAddress:'setif'}};

const updateEmployeeWithKeyAndValue=(employee,key,value)=>{
   return {...employee,[key]: value};
};


const destructivelyUpdateEmployeeWithKeyAndValue=(employee,key,value)=>{
    employee[key] = value;
    return employee;
 };

const deleteFromEmployeeByKey=(employee,key)=>{
    let result= {...employee}
    result[key]=undefined
    return result
 };

const destructivelyDeleteFromEmployeeByKey=(employee,key)=>{
    employee[key] = undefined;
    return employee;
 };
//  console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee,'game','football'))