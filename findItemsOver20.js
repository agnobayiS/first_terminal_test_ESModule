

function findItemsOver20(list) {
  let over20 = []

  for (var i = 0; i < list.length; i++) {
    let newlist = list[i]
    if (newlist.qty > 20) {
      over20.push(newlist)
    }
    //console.log(newlist.qty)
  } return over20

}
export default findItemsOver20

