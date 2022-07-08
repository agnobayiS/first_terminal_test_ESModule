

function mostProfitableDepartment(data) {
    //console.log(data)
    const map = {}


    for (var i = 0; i < data.length; i++) {
        const newData = data[i]
        map[newData.department] = 0

    }//console.log(map)
    for (var i = 0; i < data.length; i++) {
        const newData = data[i]
        var totelDepartment = map[newData.department]

        totelDepartment += newData.sales
        map[newData.department] = totelDepartment


    }//console.log(map)
    var currentDepertsales = 0
    var currentDepert = ''

    for (const depart in map) {
        const crrentDepert = map[depart]
        // console.log(depart)
        // console.log(map[depart])
        if (crrentDepert > currentDepertsales) {
            currentDepertsales = crrentDepert
            currentDepert = depart
        }
       // console.log(currentDepert)
       // console.log(currentDepertsales)


    } return currentDepert

}
export default mostProfitableDepartment