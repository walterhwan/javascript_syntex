/**
 * @param {string} IP
 * @return {string}
 */
const validIPAddress = function(ip) {
  let arr = ip.split(".");

  let isIPv4 = arr.every(val => {
    let num = parseInt(val);
    // console.log("num = %s", num);
    if (
      (num != 0 && val[0] === "0") ||
      (num === 0 && val.length > 1) ||
      num > 255 ||
      num < 0 ||
      Object.is(num, NaN)
    ) {
      return false;
    }
    return true;
  });

  if (isIPv4 && ip.search(/[a-zA-Z]/) < 0 && arr.length == 4) {
    return "IPv4";
  }

  arr = ip.split(":");
  let isIPv6 = arr.every(val => {
    let num = parseInt(val, 16);
    // console.log("num = %s", num);
    if (num > 65535 || num < 0 || val.length > 4 || Object.is(num, NaN)) {
      return false;
    }
    return true;
  });

  if (isIPv6 && arr.length == 8 && ip.search(/[g-zG-Z\-]/) < 0) {
    return "IPv6";
  }

  return "Neither";
};

// console.log(validIPAddress("172.16.254.1"));
// console.log(validIPAddress("172.-1.255.1"));
// console.log(validIPAddress("172.0.256.1"));
// console.log(validIPAddress("1e1.4.5.6"));
// console.log(validIPAddress("1.0.1."));
// console.log(validIPAddress("00.0.0.0"));
console.log(validIPAddress("2001:0db8:85a3:0000:0000:8a2e:0370:7334"));
console.log(validIPAddress("2001:db8:85a3:0:0:8A2E:0370:7334"));
console.log(validIPAddress("2001:0db8:85a3::8A2E:0370:7334")); // invalid
console.log(validIPAddress("02001:0db8:85a3:0000:0000:8a2e:0370:7334")); // invalid
console.log(validIPAddress("20EE:FGb8:85a3:0:0:8A2E:0370:7334")); // invalid
console.log(validIPAddress("20EE:FGb8:85a3:0:-0:8A2E:0370:7334")); // invalid

// console.log(parseInt("FFFF", 16));
// console.log(parseInt("FGb8", 16));
