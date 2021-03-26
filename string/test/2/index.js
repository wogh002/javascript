function checkSpam(str) {
    //첫번쨰로 전부 다 소문자로 변경.
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}
alert(checkSpam('buy ViAgRA now')) //== true
alert(checkSpam('free xxxxx')) //== true
alert(checkSpam("innocent rabbit")) //== false

