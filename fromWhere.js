function fromWhere(regNo) {
    var one = 'Bellville'
    var two = 'Paarl'
    var three = 'Cape Town'
    var four = 'Some other place!'

    if (regNo.startsWith("CY")) { return one } else if
        (regNo.startsWith("CJ")) { return two } else if
        (regNo.startsWith("CA")) { return three } else {
        return four
    }

}
export default fromWhere