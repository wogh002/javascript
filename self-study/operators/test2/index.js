"" + 1 + 0 //10
"" - 1 + 0 //-1
true + false //1
6 / "3" //2
"2" * "3" //6
4 + 5 + "px" //'9px' 
"$" + 4 + 5 //'$45'
"4" - 2 //2
"4px" - 2 // NaN
7 / 0 //Infinity
"  -9  " + 5 //'  -95  '
"  -9  " - 5 //-14
null + 1 // 숫자형으로 변환시 null 의 값은 0 이된다 고로, 1
undefined + 1 //NaN
" \t \n" - 2 //-2
//문자열이 숫자형으로 변할 땐 문자열 앞뒤의 공백이 삭제됩니다.
//뺄셈 연산자 앞의 피연산자는 공백을 만드는 문자 \t와 \n, 그 사이의 “일반적인” 공백으로 구성됩니다. 
// 따라서 " \t \n"는 숫자형으로 변환 시 길이가 0인 문자열로 취급되어 숫자 0이 됩니다.