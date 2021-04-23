'use strict';
//3. private , public
class Experiment {
    publicField = 2;
    #privateField = 0; //클래스 내부에서만 사용가능 private. #사용
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//4.static
class Article {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }
    static printPublisher() {
        console.log(Article.publisher);
    }
}
