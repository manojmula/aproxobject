/***
 * @sentObject is an object that contains keys and values.
 * If the object is empty , it will return null rather than throwing error
 * 
 * @key is the key of the object that you want to get the value of
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
 * 
 * @param {Object} array 
 * @param {String} keys 
 * @returns {null | Object}
 */

const convertArrayToObject = (array, string, keys) => 
{
    if(!Array.isArray(array) || array.length === 0)
    {
        throw new Error("Array is empty. Cannot convert to object")
    }
    
    else if(!Array.isArray(keys) || keys.length === 0)
    {
        throw new Error('keys cannot be empty. Please provide keys')
    }
    const object = {}
    
    for(let i = 0; i < array.length; i++)
    {
        object[fields] = array[i]
    }
    return object
}


module.export = {getCloselyRelatedKey, convertArrayToObject}