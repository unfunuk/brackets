module.exports = function check(str, bracketsConfig) {
    let brackets = str;
    let halfLength = Math.floor(brackets.length / 2);
    for (let i = 0; i < halfLength; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {

            brackets = brackets.replace(bracketsConfig[j].join(''), '');
        }
    }
    return brackets.length === 0;
}