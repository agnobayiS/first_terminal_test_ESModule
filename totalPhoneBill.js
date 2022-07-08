function totalPhoneBill(total) {
    let callList = total.split(',')
    //console.log(callList)
    const str = 'R'
    var call = []
    var sms = []

    for (var i = 0; i < callList.length; i++) {
        let newCallList = callList[i].trim();

        if (newCallList.includes('sms')) { sms.push(newCallList) } else if
            (newCallList.includes("call")) {
                call.push(newCallList)
        }
    }
    let totalCall = call.length;
    let totalSms = sms.length;
    const a = totalCall * 2.75
    const b = totalSms * 0.65
    const c = a + b
    //const d = str + c
    //console.log(d)
    return str + c.toFixed(2)
}
export default totalPhoneBill