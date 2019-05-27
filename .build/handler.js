"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
/*
#### Challenge - 5/21
Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
If there are two or more words that are the same length, return the first word from the string with that length.
Ignore punctuation and assume sen will not be empty.

#### Sample Test Cases
Input:"fun&!! time"
Output:"time"
-----
Input:"I love dogs"
Output:"love"

- 1. 구현
- 2. 성능 측정
*/
/*
Challenge - 5/23
Have the function MaximalSquare(strArr) take the strArr parameter being passed which will be a 2D matrix of 0 and 1's, and determine the area of the largest square submatrix that contains all 1's.
A square submatrix is one of equal width and height, and your program should return the area of the largest submatrix that contains only 1's.
For example: if strArr is ["10100", "10111", "11111", "10010"] then this looks like the following matrix:

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

For the input above, you can see the bolded 1's create the largest square submatrix of size 2x2, so your program should return the area which is 4.
You can assume the input will not be empty.
Hard challenges are worth 15 points and you are not timed for them.

정렬 알고리즘 시간 복잡도 보기 Challenge = 5/27
소팅 알고리즘 성능 측정 ?
- 측정 툴
- Insertion, selection, bubble , Quick , Merge, shell, change

-input range: 10단위로

*/
exports.main = function (event, context, callback) { return __awaiter(_this, void 0, void 0, function () {
    return __generator(this, function (_a) {
        /*
        const longestOne = longestWord(event);
        const maximalSquareResult = maximalSquareMain(event);
        console.log( recursiveTest(5));
        */
        exports.insertSort(event);
        exports.selectionSort(event);
        return [2 /*return*/, callback(null, 'success')];
    });
}); };
exports.insertSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var tmpVal = void 0;
        for (var k = i; k > 0; k--) {
            if (arr[k] < arr[k - 1]) {
                tmpVal = arr[k];
                arr[k] = arr[k - 1];
                arr[k - 1] = tmpVal;
            }
        }
    }
    console.log('insertSort Result ' + arr.join(', '));
};
exports.selectionSort = function (arr) {
    // 최소값 탐색 후 i 위치와 바꾸기 
    for (var i = 0; i < arr.length; i++) {
        var mValIdx = i;
        var mVal = arr[i];
        var tmpVal = arr[i];
        for (var k = i; k < arr.length; k++) {
            if (mVal > arr[k]) {
                mVal = arr[k];
                mValIdx = k;
            }
        }
        arr[i] = arr[mValIdx];
        arr[mValIdx] = tmpVal;
    }
    console.log('selectionSort Result: ', arr.join(', '));
};
exports.recursiveTest = function (input) {
    if (input == 1) {
        return 1;
    }
    else {
        return (input * 5 - 5) + exports.recursiveTest(input - 1);
    }
};
exports.longestWord = function (sentence) { return __awaiter(_this, void 0, void 0, function () {
    var sen, longestIdx;
    return __generator(this, function (_a) {
        sen = '';
        longestIdx = 0;
        sentence.split(/\s+/g).forEach(function (element) {
            var word = element.replace(/[^a-zA-Z]/g, '');
            if (word.length > longestIdx) {
                sen = word;
            }
        });
        return [2 /*return*/, sen];
    });
}); };
exports.calc = function (squareArray, startX, startY, len) {
    var result = 0;
    for (var i = startX; i < len + startX; i++) {
        for (var j = startY; j < len + startY; j++) {
            // console.log("( " +i +", " + j + ") => " +squareArray[i][j]);
            result = result + Number(squareArray[i][j]);
        }
    }
    return result;
};
exports.maximalSquareMain = function (squareArray) {
    var row = squareArray.length;
    var col = squareArray[0].length;
    var tMaximalValuesArray = new Array();
    for (var i = 0; i < row; i++) {
        for (var j = 0; j < col; j++) {
            if (squareArray[i][j] > 0) {
                tMaximalValuesArray.push(exports.maximalSquareValueByStartPoint(squareArray, i, j));
                // console.log(maximalSquareValueByStartPoint(squareArray,i,j));
            }
        }
    }
    //console.log(tMaximalValuesArray);
    return exports.extractMaximalValue(tMaximalValuesArray);
};
exports.extractMaximalValue = function (target) {
    var idx = target[0];
    for (var i = 0; i < target.length; i++) {
        if (target[i] > idx) {
            idx = target[i];
        }
    }
    return idx;
};
exports.maximalSquareValueByStartPoint = function (squareArray, startX, startY) {
    var endX = squareArray.length;
    var endY = squareArray[0].length;
    var maxlenX = endX - startX;
    var maxlenY = endY - startY;
    var maxLen = maxlenX > maxlenY ? maxlenY : maxlenX;
    var retVal = squareArray[startX][startY]; //최초값
    for (var i = maxLen; i > 0; i--) {
        var asumptionVal = i * i;
        var resultVal = exports.calc(squareArray, startX, startY, i);
        if (asumptionVal == resultVal) {
            retVal = resultVal;
            break; // 큰 정사각형부터 체크하기 때문에 값을 만나면 더이상의 값을 체크하는것은 무의미함.
        }
    }
    return retVal;
};
