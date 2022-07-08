function countAllFromTown(str, town) {
  var list = str.split(',')
  var newList = []

  for (var i = 0; i < list.length; i++) {
    let paarlList = list[i].trim();
    if (paarlList.startsWith(town)) {
      newList.push(paarlList);
      //console.log(newList)

    }
  } return newList.length
}

export default countAllFromTown
