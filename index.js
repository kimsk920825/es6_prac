/*
주석 사용 방법
*
    :목차
    :코드
    :설명
//이름//
    :목차1 이름
//->
    :목차2 
//
    :서브 목차 이름
//->
    :설명
//<-->//
*/

/*
인덱스
Functions
1. 화살표 함수
2.'this' in Arrow Functions
3.forEach vs map
Strings
4. 백틱
5.HTML Fragments
ㄴemplate Literal String
6. Styled Componenets
Array
7.findindex
DESTRUCTURING
8.Object Destructuring

*/

//보통 함수 선언//
/*
const names = ["동수", "미나", "수지", "강이"];
const hearts = names.map(function (item) {
  return item + "love";
});
console.log(hearts);
*/

//화살표 함수//
/*
화살표 함수 사용 방법
1. 화살표 함수에서 화살표 의미란 function 표기
2. function(매개변수)는 매개변수 =>로 대체될 수 있음.
3. 파이썬의 람다 함수 사용 방법과 유사
4.중괄호를 지워줄 의향이 있다면 2가지를 같이 지워줘야함.
ㄴ세미콜론,return
*/

//->일반함수 패턴1
/*
function addheart(item) {
  return item + "love";
}
const heart1 = names.map(addheart);
*/

//->일반함수 패턴2
/*
const heart2 = names.map(function (item) {
  return item + "love";
});
*/

//->화살표함수 패턴1
/*
const heart3 = names.map((item) => {
  return item + "love"; 
});
console.log(heart3);
*/

//->화살표함수 패턴2
/*
const heart3 = names.map((item) => item + "love");
*/

/*
//'this' in Arrow Functions //
1. 첫 번째 예시의 일반함수 안에 선언된 this는 button을 가르킨다.
2. 두 번째 예시의 화살표함수 안에 선언된 this는 button이 아닌 window를 가르킨다.
ㄴ 그렇게 때문에 Arrow Functions안에 this는 선언하지 않는다.
 */

//->일반 함수
/* 
const button = document.querySelector("button");
button.addEventListener("click", function () {
  this;
  console.log("been clicked");
});
*/

//->화살표 함수
/*
const button = document.querySelector("button");
button.addEventListener("click", () => {
  console.log(this);
});
*/

//->객체 안에서 일반함수 선언 후 함수 호출
/*
const profile = {
  name: "Sean",
  age: 24,
  address: "5235 cote-st-luc APT#10",
  age_sister: function () {
    this.name;
  },
};
console.log(profile);
console.log(profile.age_sister());
console.log(profile);
테스트 결과: undefiend
*/

//->객체 안에서 화살표함수 선언 후 함수 호출
/*
const profile = {
  name: "Sean",
  age: 24,
  address: "5235 cote-st-luc APT#10",
  age_sister: () => {
    console.log(this);
  },
};
console.log(profile);
console.log(profile.age_sister());
console.log(profile);
테스트 결과: window
*/

//->객체 안에서 특정 변수를 지칭할 때
/*
const profile = {
  name: "Sean",
  age: 24,
  address: "5235 cote-st-luc APT#10",
  age_sister: this.name,
};
console.log(profile);
테스트 결과: 공란
*/

/*
//forEach vs map//
1. forEach는 하나씩 뱉는다. 파이썬의 for문과 같다.
ㄴ 하나씩 값을 뱉기때문에 매번 변수에 담는 값이 달라지므로 const대신 let을 써줘야한다.
2. map은 리스트 객체를 만들어서 뱉어준다.
*/

/*
email = [
  "kimseungkyubestiedu@gmail.com",
  "kimseungkyubestiedu@naver.com",
  "space650@naver.com",
];
//->forEach
let cleaned_1 = email.forEach((item) => console.log(item.split("@")[0]));
console.log(cleaned_1);
//->map
const cleaned_2 = email.map((item) => item.split("@")[0]);
console.log(cleaned_2);
*/

//백틱//

//->백틱 안에서는 어떤 변수든 받아줄 수 있다.
//-> ㄴ함수 또한 가능하다.
//->함수를 백틱 안에서 호출

/*
const add = (a, b) => a + b;
console.log(`I like number ${add(3, 4)}`);
*/

//HTML Fragments//

/*
1.함수로 HTML 태그를 추가할 수 있다.
ㄴ Elemenet 만든 후, innerText, append로 추가할 수 있다.
ㄴ Template Literal String로 추가할 수 있다.
*/

//->Elemenet 만든 후, innerText, append로 추가할 수 있다.
/*
const wrapper = document.querySelector(".wrapper");
const addWelcome = () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Hello";
  wrapper.append(h1);
};
setTimeout(addWelcome, 5000);
*/

//->Template Literal String로 추가할 수 있다.

//예1
/*
const wrapper = document.querySelector(".wrapper");
const addWelcome = () => {
  const h1 = `
        <h1 class="title">Hello</h1>
    `;
  wrapper.innerHTML = h1;
};
setTimeout(addWelcome, 2000);
*/

//예2
/*const wrapper = document.querySelector(".wrapper");
const friends_list = ["석봉이", "동수", "경순", "광수"];
const ul_tag = () => {
  const list = `
    <h1>People I love</h1>
    <ul>
        ${friends_list.map((friend) => `<li>${friend}</li>`).join(" ")}
    </ul>
    `;
  wrapper.innerHTML = list;
};
setTimeout(ul_tag, 2000);
*/

//Styled Components//

//->입력한 태그를 만드는 함수를 만들어라.
//->리턴할때 또 다른 호출문을 만들어라.
//->태그에 css를 적용하라

/*
const createTagCss = (aElement) => {
  const el = document.createElement(aElement);
  el.innerHTML = "Hello";
  return (css) => {
    const styles = css[0];
    el.style = styles;
    return el;
  };
};
const title = createTagCss("h1")`
    color:red;
    `;
const wrapper = document.querySelector(".wrapper");
wrapper.append(title);
*/

//include//

/*
const isEmail = (email) => email.includes("@");
console.log(isEmail("kimseungkyu@naver.com"));
*/
/*
const CC_Number = "6060";
const displayNumber = `${"*".repeat(10)}${CC_Number}`;
console.log(displayNumber);
*/

//findIndex//

/*
email = [
  "kimseungkyubestiedu@gmail.com",
  "kimseungkyubestiedu@naver.com",
  "space650@never.com",
];

const check = () => email.findIndex((email) => email.includes("never"));

let target_idx = check();

if (target_idx !== -1) {
  console.log(target_idx);
  const username = email[target_idx].split("@")[0];
  const email_fixed = "naver.com";
  email[target_idx] = `${username}@${email_fixed}`;
  target_idx = check();
}
console.log(target_idx);
*/

//fill//

/*
if (target_idx !== -1) {
  email.fill("*".repeat(5), target_idx);
}
console.log(email);
*/

//Object Destructuring//

/*
const settings = {
  notification: {
    alarm: true,
    unfollow: true,
  },
  theme: "red",
};

const { notification: { follow = false } = {} } = settings;

console.log(follow);
*/
//->마지막 최종 중괄호 변수 값을 호출할 수 있다.

//Array Destructuring//

//->array 버전
/*
const daily = ["Mon", "Tue", "Wed", "Thurs", "Fri"];
const [mon, tue, wed, thurs, fri, sat = "Saturday"] = daily;
console.log(mon, tue, wed, sat);*/
//->함수버전
/*
const dailyFunc = () => ["Mon", "Tue", "Wed", "Thurs", "Fri"];
const [mon, tue, wed, thurs, fri, sat = "Saturday"] = dailyFunc();
console.log(mon, tue, wed, sat);
*/
//Renaming Object Element Key value //
/*
const settings = {
  notification: {
    alarm_bool: true,
    unfollow: true,
  },
};

const {
  notification: { alarm_bool: alramBool = false },
} = settings;

console.log(alramBool);
*/

//Function Destructuring//
/*
//->Dsestructuring(x)
function saveSettings(settings) {
  return console.log(settings);
}
*/
//->Destructuring(o)
function saveSettings({ notification = {}, color = "blue" }) {
  console.log(notification, color);
}

saveSettings({
  notification: {
    alaram: true,
    follow: true,
    mkt: true,
  },
  color: "black",
});
