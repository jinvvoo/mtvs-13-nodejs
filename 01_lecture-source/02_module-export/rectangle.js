exports.area = (w, h) => w * h;     // 넓이
exports.perimeter = (w, h) => (w + h) * 2;  // 둘레

// 만들고 다른 곳에서 사용하고 싶다면 exports에 require문법을 이용하면 꺼내쓸 수 있다.