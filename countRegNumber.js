function countRegNumber(regNo) {
  if (regNo === "") {
    return 0
  } else {
    var erray = regNo.split(",")
   // console.log(erray)

    var errayLength = erray.length
    //console.log(errayLength)

    return errayLength
  }


}
export default countRegNumber