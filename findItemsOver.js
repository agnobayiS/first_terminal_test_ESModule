
function findItemsOver(list, threshold) {
  var overThreshold = []

  for (var i = 0; i < list.length; i++) {
    let newlist = list[i]
    if (newlist.qty > threshold) {
      overThreshold.push(newlist)
    }
  }//     console.log(overThreshold)
  return overThreshold

}
export default findItemsOver
