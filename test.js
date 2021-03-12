let text = "Zisled has invited you to join their party!"

if (text.includes("]")) {
    console.log(text.substring(text.indexOf("]") + 2, text.indexOf("has") - 1))
} else {
    console.log(text.substring(0, text.indexOf("has") - 1))
}