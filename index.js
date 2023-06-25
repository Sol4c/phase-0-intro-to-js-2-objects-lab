const employee = {
    name: "value",
    streetAddress: "2D"
    
}
function updateEmployeeWithKeyAndValue(object, key, value){
    const copyOfObject = {...object}
    copyOfObject[key] = value
    return copyOfObject
    


}

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    object[key] = value
    return object
}

function deleteFromEmployeeByKey(object, key, value){
    const newObj = {...object}
    newObj[key] = value
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(object, key, value){
    object[key] = value
    return object
}