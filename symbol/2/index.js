const hello = Symbol('hello');
const bye = Symbol('hello');
//심볼형 키를 사용하면 프로퍼티가 우연히라도 사용되거나 덮어씌워 지는 걸 예방할 수 있습니다.
//value 가 아닌 단지 description 일뿐. (hello);
const superBig = {
    [Symbol('nico')]: {
        age: 12
    }
};
superBig['nico'].age = 30;
//nico프로퍼티는 유니크하지 않다.
//유니크 하지 않다는 것? 언제 어디서나 수정 추가 삭제 할 수 있다는 것.
//폴더 3을 확인하자.