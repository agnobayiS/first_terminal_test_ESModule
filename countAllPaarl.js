function countAllPaarl(str){
    var list = str.split(',')
    var newList = []
    let resulst = newList.length
    //console.log(list)
    
    for (var i=0;i<list.length ;i++){
      let paarlList =list[i].trim();
      if(paarlList.startsWith("CJ")){newList.push(paarlList);
    //console.log(newList)
                                     
  }
    }return newList.length
  }
  export default countAllPaarl