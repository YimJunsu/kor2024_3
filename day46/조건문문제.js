/*JS과제2 (day46) : 조건문 10개 풀이하기.
- 입력조건 : prompt() 함수 사용.
- 출력조건 : console.log() 함수 사용.
- 일반조건 : for반복문 사용금지 , chatGPT 사용금지

[지문1] 3개의 점수를 각 입력받아 총점 계산 하여 총점이 90 이상이면 '성공' 아니면 '실패' 를 console.log() 함수로 출력하시오.

[지문2] 2개의 정수를 각 입력받아 더 큰수 를 console.log() 함수로 출력하시오.(단] 동일한수 제외)

[지문3] 3개의 정수를 각 입력받아 가장 큰수 를 console.log() 함수로 출력하시오.  (단] 동일한수 제외)

[지문4] 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 console.log() 함수로 출력하시오.  (단] 동일한수 제외) 

[지문5] 1개의 점수를 입력받아 90점 이상이면 'A등급' 80점이상이면 'B등급' 70점이상 'C등급' 그외 '재시험' 를 console.log() 함수로 출력하시오.

[지문6] 아이디와 비밀번호 입력받아 아이디가 'admin' 이고 비밀번호가 '1234' 이면 '로그인 성공' 아니면 '로그인실패' 를 console.log() 함수로 출력하시오.

[지문7] 아래와 같이 과일 배열 선언하고 새로운 과일명을 입력받아 fruitList 에 존재하는 과일이면 
'이미 존재하는 과일입니다' 출력  아니면 배열에 입력받은 과일명 저장 하고 현재 배열을 console.log() 함수로 출력하시오.
let fruitList = [ '바나나' , '사과' ]let nus = [nu1, nu2, nu3];

[지문8] 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 를 console.log() 함수로 출력하시오.


[지문9] 가위바위보 게임 
조건1 : 가위 0 , 바위 1 , 보 2 입니다.
조건2 : 플레이어 2 명 입니다.
실행조건 : 각 플레이어가 가위,바위,보 중에 한번씩 입력받기 
출력조건 : 
플레이어1 이겼을때 '플레이어1 승리' 출력 하시오.
플레이어2 이겼을때 '플레이어2 승리' 출력 하시오.
비겼을경우 '무승부' 를 console.log() 함수로 출력하시오.

[지문10] 아래와 같이 좌석 3개의 상태를 가지는 배열 선언하고 하나의 좌석 순서번호(인덱스) 를 입력받아 
빈좌석 이면 '예약성공' 아니면 '예약불가' 출력하시오. 예약상태 구분 방법] 빈좌석 : 'X'  사용중인좌석 : 'O' 
 let sheetList = [ 'O' , 'X' , 'O' ]

[지문11]주차장 차량 검색대
조건1(차량번호) : let carArray = [ '250어7142' , '142가7415' ] 
조건2(주차위치) : let locationArray = [ 'A1' , 'B3' ]              
조건3 : carArray, locationArray 배열내 인덱스가 같으면 같은 차량의 정보
조건4 : 차량번호 입력받아 내 차량 위치 찾기 를 반환해주세요.
실행 예] 만일 배열내 존재하면 차량번호를 입력했으면 주차위치를 출력 하고 존재하지 않으면 '존재하지 않습니다' 를 console.log() 함수로 출력하시오.
*/

// [1]
alert("1번 지문시작");
let s1 = Number(prompt("1번 숫자 입력")); let s2 = Number(prompt("2번 숫자 입력"));
let s3 = Number(prompt("3번 숫자 입력")); let sum = s1 + s2 + s3;
if(sum >= 90) {console.log("[1번지문]성공")} else {console.log("[1번지문]실패")}

//[2]               
//순서 : **입력 -> 처리 -> 출력**
alert("2번 지문시작");
let num1 = Number(prompt("1번 숫자 입력")); let num2 = Number(prompt("2번 숫자 입력"));
if(num1 > num2) {console.log(num1 + "[= 1번이 더크다],[2번지문종료]")} else {console.log(num2 + "[= 2번이 더크다],[2번지문종료]")};

//[3] 
alert("3번 지문시작");
let n1 = Number(prompt("1번 숫자 입력")); let n2 = Number(prompt("2번 숫자 입력"));
let n3 = Number(prompt("3번 숫자 입력"));
if(n1>n2>n3){console.log(n1 + "[이 제일크다]")}
else if(n2>n3>n1){console.log(n2 + "[이 제일크다")} else{console.log(n3 + "[이 제일크다]")};

//[4]
/*
    4. 3개의 정수를 각 입력받아 오름차순 또는 내림차순 하여 정렬해서 출력하시오.  (단] 동일한수 제외) 
        A   B   C
        7   5   10 --> 오름차순 : 5 7 10  , 내림차순 : 10 7 5
        [ 1.정렬/비교 ]                                                    A      B       C
            ( 오름차순 )                                                   10     7       9
            1. A와 B 비교 해서 B가 더 작으면 B를 A와B 값 교체 A<--->B        7      10      9  교환O
                if( a < b ){ } 
            2. A와 C 비교 해서 C가 더 작으면 C를 A와C 값 교체 A<--->C        7      10      9  교환X
                if( a < c ){  }
            3. B와 C 비교 해서 C가 더 작으면 C를 B와C 값 교제 B<--->C        7      9       10 교환O
                if( b < c ) { }
            ( 내림차순 ) : 부등호 반대 , 더 크면 
        [ 2.변수 값 교환/swap ]
            - 한번에 2개 연산을 동시에 처리할수 없다. 무조건 연산은 1개씩 처리한다.
            - 변수는 *무조건* 데이터/자료 1개만 저장 ....
            - 주의할점  A = B ; A변수에 B 값 를 대입하면 기존의 A값은 사라진다.
                        A = B; B = A; // - 컴퓨터 순차처리 이므로 A값은 이미 사라졌다.  
            - swap 방법 
                임시변수 temp 활용
                let temp = A; A = B; B = temp;
*/
/*
let 정수1 = Number( prompt( '[3] 정수1 : ') )
let 정수2 = Number( prompt( '[3] 정수2 : ') )
let 정수3 = Number( prompt( '[3] 정수3 : ') )
if( 정수1 > 정수2 ){    // > : 오름차순  , < : 내림차순 
    // 만약에 뒤에있는 값이 더 작으면 스왑/교체
    let temp = 정수1;// A값을 temp 대입 
    정수1 = 정수2; // B값을 A에 대입 
    정수2 = temp; // temp값을 B에 대입 
    // A 와 B 변수간의 값은 교체 되었다.
}
if( 정수1 > 정수3 ){  let temp = 정수1; 정수1 = 정수3;  정수3 = temp; }
if( 정수2 > 정수3 ){  let temp = 정수2; 정수2 = 정수3;  정수3 = temp; }
console.log( `[4] 결과 : ${ 정수1 } ${정수2 } ${ 정수3}`)
*/

//[5]
alert("5번 지문시작");
let score = Number(prompt("점수를 입력하세요."));
if(score >= 90){
    console.log("A등급 [5번지문끝]")
}else if(score>=80){
    console.log("B등급 [5번지문끝]")
}else if(score>=70){
    console.log("C등급 [5번지문끝]")
}else{console.log("재시험 [5번지문끝]")};

//[6]
alert("6번 지문시작");
let id = prompt("아이디를 입력하세요."); let pw = prompt("비밀번호를 입력하세요.");
if (id == "admin" && pw == "1234") {console.log("로그인 성공")} else {console.log("로그인 실패")};

//[7]
let fruitList = [ '바나나' , '사과' ];
let newfruit = prompt("과일을 입력하시오.");
if(fruitList.includes(newfruit)){
    console.log("이미 존재하는 과일입니다.");
    } else {fruitList.push(newfruit); console.log(fruitList);}

//[8]
/*  8. 주민등록번호를 입력받아서 성별이 남자이면 색상변수에 'blue' 을 여자이면 'red' 을 대입 하고 색상변수 출력하시오. */
/*
let 주민등록번호 = prompt('[8] 주민등록번호 : ')
let 색상변수 = 'black';
// 만약에 입력받은 데이터의 ( 800420-1234567 ) 성별의 자릿수 : 8번째 자리 , 인덱스 자릿수 : 7번재 자리 
// - 문자열은 " ", ' ' , ` ` 으로 감싼 자료 , 'a'=문자 'abc'=문자열 : 컴퓨터는 문자 여러개를 어떻게 구조화??
// - 문자를 여러개 저장하면 문자배열 ---> 문자열 , C언어은 문자열을 배열로 만들기 
// - 문자 = [ 'a' , 'b' , 'c' ] , 문자 = ['유' , '재' , '석' ]
// * JS는 문자열을 배열로 취급하기 때문에 배열 함수/인덱스 를 사용할수 있다.
console.log( 주민등록번호[7] ) // 800420-1234567 -> [0]8 [1]0 [2]0 [3]4 [4]2 [5]0 [6]- [7]1 [8]2 [9]3 [10]4 [11]5 [12]6 [13]7
if( 주민등록번호[7] == 1 || 주민등록번호[7] == 3 ){
    // 만약에 주민등록번호의 8번재자리(7인덱스) 값이 1 또는 3 이면 남자
    색상변수 = 'blue'
}else{ // 아니면 
    색상변수 = 'red'
}
console.log( `[8] 결과 : ${ 색상변수 }`)
// * 응용 *
let outHTML = `<h3 style = 'color : ${ 색상변수 } ' > ${ 주민등록번호 } </h3>`
document.write( outHTML )
*/


//[9]
let player1 = Number(prompt("1번 선수 : 가위(0), 바위(1), 보(2) 중에 고르시오."));
let player2 = Number(prompt("2번 선수 : 가위(0), 바위(1), 보(2) 중에 고르시오."));

if(player1===player2){
    console.log("무승부") 
} else if ((player1 === 0 && player2 === 2)||(player1 === 1 && player2 === 0)||(player1 === 2 && player2 === 1)) {
    console.log("플레이어 1 승리")
} else {console.log("플레이어 2 승리")}

//[10]
let sheetList = [ 'O' , 'X' , 'O' ] // 1번자리(인덱스:0 / 데이터:'O') , 2번자리(인덱스:1/데이터:'X') , 3번자리(인덱스:2/데이터:'O')
let 예약좌석번호 = Number( prompt( '[10] 좌석 : 1, 2, 3 : ') )
// 만약에 배열내 입력받은 인덱스(좌석번호)에 'O'(대문자 o) 이면 
if( sheetList[ 예약좌석번호 - 1 ] == 'O' ){ // -1 를 하는 이유 ? 배열 길이(데이터수)는 1부터~3 , 인덱스는 0~2
    console.log('[10] 예약 불가')
}else{
    console.log('[10] 예약성공');
    sheetList[ 예약좌석번호 - 1 ] = 'O'; // 예약성공시 입력받은 좌석에 값 'O' 변경 
}

//[11]
let carArray = [ '250어7142' , '142가7415' , '25하1234' ]
let locationArray = [ 'A1' , 'B3' , 'A2' ]
let 차량번호 = prompt('[11] 차량번호 : ') // 검색할 차량번호 입력받기 
let 찾은인덱스 = carArray.indexOf( 차량번호 ) // .indexOf( 찾을데이터 ) : 존재하면 인덱스반환 , 없으면 -1
if( 찾은인덱스 == -1 ){ // -1 이면 검색된 차량번호가 없다 
    console.log( '입력한 차량번호는 주차 내역이 없습니다. '); // 메시지 
}else{ // -1 이 아니면 차량번호가 존재한다.
    console.log( `입력한 차량번호의 주차 위치 : ${ locationArray[찾은인덱스] } `)
}




