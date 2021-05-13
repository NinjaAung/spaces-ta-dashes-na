// index.js
const convSpace = (string) => {
    dashedString = ''
    for (var i = 0; i < string.length; i++ ) {
        if ( string.charAt(i) == " " ) {
            mutatedString += "-"
            continue
        } 
        dashedString += string.charAt(i)
    }
    return dashedString

}

const convDash = (string) => {
    spacedString = ''
    for (var i = 0; i < string.length; i++ ) {
        if ( string.charAt(i) == " " ) {
            mutatedString += " "
            continue
        } 
        dashedString += string.charAt(i)
    }
    return spacedString

}


module.export = {
    convDash,
    convSpace
}