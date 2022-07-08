function transportFee(shift) {
    var shift1 = 'morning'
    var shift2 = 'afternoon'
    var shift3 = 'nightshift'

    const morningPrice = 'R20'
    const afternoonPrice = 'R10'
    const nightshiftPrice = 'free'

    if (shift1 === shift) { return morningPrice } else if
        (shift2 === shift) { return afternoonPrice } else if
        (shift3) {
            return nightshiftPrice
    }
}
export default transportFee