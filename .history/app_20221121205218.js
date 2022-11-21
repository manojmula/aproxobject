
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