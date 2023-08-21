module.exports = (w, h) => {

    return{
        area: () => w * h /2,   //삼각형 넓이
        perimeter: () => Math.sqrt( w * w + h * h) + w + h      // 삼각형 둘레
    }
}

// 딱 하나의 함수만 작성할 수 있다. 파일당 딱 하나 사용할 수 있다.