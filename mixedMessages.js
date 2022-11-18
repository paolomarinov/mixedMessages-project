// first thing we need the parts of the message. Need to figure out what parts they will be.

const starters = [
  "Always remember;",
  "A message for your soul;",
  "Never give up;",
  "Nothing is written;",
  "Be you,",
  "Set your own limits;",
  "",
  "Nothing is ever final;",
  "Choose to be you;",
  "You have the strength you need;",
  "",
  "The sun will rise again;",
  "You sparkle with greatness;",
  "",
  "Nothing can stop you;",
  "You always come first;",
];

const middleSentences = [
  "Life is an architectural masterpiece designed by you, and you can bend it to your will.",
  "Your smile can change the world.",
  "You have the freedom to choose your own path.",
  "You can always endure and succeed.",
  "Whatever you can imagine is within your reach.",
  "You already have the wings you need.",
  "You are the master of your life.",
  "Be the beacon of happiness.",
  "The best version you can be is always within your reach.",
  "Every day is an opportunity to be who you want to be.",
  "You can get anywhere with will and determination.",
  "You are the master of your growth.",
  "Every morning is another chance to pursue your dreams.",
  "There is potential for opportunity in every day.",
  "Chaos is always the place where order is born.",
  "You are the author of this life, write your own story.",
  "You are the architecht of your life",
  "You are the architecht of your own growth.",
  "Never be too hard on yourself, for you are only doing your best.",
  "The pain and struggle you have faced is the foundations for the better you.",
  "Dreams are made every day, and every day they can be made real.",
  "Choice and action are the pen and paper of your own story.",
];

const enders = [
  "Do not be afraid of risks.",
  "Failure is part of the way.",
  "Be your own master.",
  "Life is meaningful.",
  "Live, for every day can be the last.",
  "Everything meaningful is difficult.",
  "",
  "Better to act than wonder the outcome",
  "Failure is never final.",
  "Change yourself to change the world",
  "",
  "",
];

function phraseGen(arr1, arr2, arr3) {
  return (
    arr1[Math.floor(Math.random() * arr1.length)] +
    " " +
    arr2[Math.floor(Math.random() * arr2.length)] +
    " " +
    arr3[Math.floor(Math.random() * arr3.length)]
  );
}

function display() {
  document.getElementById("genPhrase").innerHTML = phraseGen(
    starters,
    middleSentences,
    enders
  );
}
