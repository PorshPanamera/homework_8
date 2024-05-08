let numOrStr = prompt("input number or string");
console.log(numOrStr);

switch (true) {
  case numOrStr === null:
    console.log("Вы отменили ввод");
    break;
  case numOrStr.trim() === "":
    console.log("Пустая строка");
    break;
  case isNaN(+numOrStr):
    console.log("Введено не число");
    break;
  default:
    console.log("OK!");
    break;
}
