const toCurrency = function(value, unit='USD', dir='right') {
    if (dir==='right') {
        return value + ' ' + unit;
    } else {
        return unit + ' ' + value;
    }
}

// 1.Kiểm tra string ép về int có hợp nệ hay không
// 2.Kiểm tra quantity có lớn >= 1 hay không
const validateQuantity = function(quantity) {
    let num = parseInt(quantity);
    if (num == quantity && !isNaN(num)) {
        return num >= 1;
    }
    return false;
}

export {
    toCurrency,
    validateQuantity
}