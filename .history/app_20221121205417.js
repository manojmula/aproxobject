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

module.export = {getCloselyRelatedKey}