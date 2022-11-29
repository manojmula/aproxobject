/***
 * @param {Object} sentObject is an object that contains keys and values.
 * If the object is empty , it will return null rather than throwing error
 * 
 * @param {String} key is the key of the object that you want to get the value of
 * it might be part of key or complete key
 *
 */
const getCloselyRelatedKey = (sentObject, key) => {

    const listOfKeys = Object.keys(sentObject) || []
    
    if(listOfKeys.length === 0)
    {
        return null
    }
    
    for(let i = 0 ; i < listOfKeys.length; i++)
    {
        listOfKeys[i] = listOfKeys[i] + ''
        if(listOfKeys[i].includes(key))
        {
            return sentObject[listOfKeys[i]]
        }

    }
}

/**
 * This is group by for an array of Objects using a key or combination 
 * of keys and valueField is the field that matters , it will be selected
 * in array of objects
 * @param {Object} array 
 * @param {String} keysList 
 * @param {String} valueField
 * @returns {null | Object}
 */

const groupArrayOfObjects = ({array, keysList, valueField}) => 
{
    if(!Array.isArray(array) || array.length === 0)
    {
        throw new Error("Array is empty. Cannot convert to object")
    }
    
    else if(!Array.isArray(keysList) || keysList.length === 0)
    {
        throw new Error('keys cannot be empty. Please provide keys')
    }
    const object = {}

    const listOfKeys = []

    for(let i = 0 ; i < array.length; i++)
    {
        for(const j = 0 ; j < keysList.length; k++)
        {
            if(!listOfKeys[i])
            {
                listOfKeys[i] = ""
            }
            listOfKeys[i] += array[i][keysList[j]]
        }
    }
    
    for(let i = 0; i < array.length; i++)
    {
        object[listOfKeys[i]] = array[i][valueField]
    }
    return object
}

const groupByObjectsAndAdd = (objectOne, key, returnType) => {
        if(Object.keys(objectOne).length === 0)
        {
            throw new Error('object passed is empty.')
        }
        else if(key === null || key === undefined || objectOne[key] == null)
        {
            throw new Error('Key mentioned is either null or does not exist in passed object.')
        }

        let newObject = {}
        let defaultValue
        if(returnType == "number")
        {
            defaultValue = 0
        }
        else if(returnType == "string")
        {
            defaultValue = ""
        }
        else
        {
            throw new Error('Please provide valid default value')
        }

        for(let i = 0 ;  i < Object.keys(objectOne).length; i++)
        {
            if(newObject[key] == null || newObject[key] == undefined)
            {
                newObject[key] = defaultValue
            }
            newObject[key] += objectOne[i][key] == null ? objectOne[i][key] : defaultValue
        }

        return newObject        
   
}



module.exports = {getCloselyRelatedKey, convertArrayToObject}