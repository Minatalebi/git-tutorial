const data = [
  "+989393676765",
  "+989393456123",
  "+989393455465",
  "+98393456722",
  "+989393456765",
];

const length = data.length;
const middleIndex = Math.floor(length / 2);
const middleItem = data[middleIndex];
const converterNumber = middleItem.replace("+98", "0");
console.log(converterNumber);

const email = "milad.azami@gmail.com";
const result = email.split("@");
console.log(result[0]);

console.log("mina tlb");
