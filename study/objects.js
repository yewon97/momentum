const player = {
  // inside object
  name: 'yewon', // property : value;
  points: 10,
  fat: true,
};
console.log(player);
console.log(player.name);
console.log(player['points']);

// constant는 수정 불가능 object 안은 수정가능
player.fat = false;
console.log(player);

// object 추가, 수정
player.points = 20;
player.lastName = "potato";
console.log(player);
player['hair-color'] = "black";
console.log(player);


// 연산가능
player.points = player.points + 7;
console.log(player.points);

var color = "red";
console.log(color);
player.hair = "curl"
console.log(player);

console.log(player.hair-color);