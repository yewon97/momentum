const quotes = [
  {
    quote: "삶을 사는 데는 단 두가지 방법이 있다.\n 하나는 기적이 전혀 없다고 여기는 것이고 또 다른 하나는 모든 것이 기적이라고 여기는 방식이다.",
    author: "알베르트 아인슈타인",
  },
  {
    quote: "불을 대하듯 사람을 대하라.\n 타지 않을 정도로 다가가고 얼지 않을 정도로 떨어져라",
    author: "존 F케네디",
  },
  {
    quote: "행복하게 여행하려면 가볍게 여행해야 한다.",
    author: "생텍쥐페리",
  },
  {
    quote: "겸손이란 자기 자신을 낮추는 것이 아니라 자신을 덜 생각하고 남을 더 생각하는 것이다.\n 겸손 없이 다른 사람들을 이끌고 격려하는 것은 불가능하다.", 
    author: "릭 워렌",
  },
  {
    quote: "사람들을 따라하지 말고 당신만의 길을 찾아라",
    author: "피터 드러커",
  },
  {
    quote: "상대를 좋은 사람이라고 생각하고 그렇게 믿어라 그러면 그 사람은 반드시 좋은 사람이 된다.\n 우리가 돌려받는 것은 우리 마음을 투사한 것에 대한 반사임을 잊지 말라",
    author: "맥스웰 몰츠",
  },
  {
    quote: "행복의 문이 하나 닫히면 다른 문이 열린다.\n 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다.",
    author: "헬렌켈러",
  },
  {
    quote: "절대 어제를 후회하지 마라.\n 인생은 오늘의  내 안에 있고 내일은 스스로 만드는 것이다.",
    author: "L론허바드",
  },
  {
    quote: "우리는 단 한 번의 인생을 산다.\n 하지만 제대로 산다면, 한 번으로 충분하다.",
    author: "Mae West",
  },
  {
    quote: "성공으로 가는 엘리베이터는 고장입니다.\n 당신은 계단을 이용해야만 합니다. 한계단 한계단씩",
    author: "조 지라드",
  }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;