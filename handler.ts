import { Handler, Context, Callback } from 'aws-lambda';
import { doesNotReject } from 'assert';

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

export const main = async (event:any, context: Context, callback: Callback) => {
  /*
  const longestOne = longestWord(event);
  const maximalSquareResult = maximalSquareMain(event);
  console.log( recursiveTest(5));
  */
  
  insertSort(event);
  selectionSort(event);
  
  return callback(null, 'success');
};


export const insertSort = (arr:Array<number>) => {
  for(let i=1;i<arr.length;i++){
    
    let tmpVal ;
    for(let k=i;k>0;k--){
      if(arr[k] < arr[k-1]){
        tmpVal = arr[k];
        arr[k] = arr[k-1];
        arr[k-1] = tmpVal;
      }
    }

  }

  console.log('insertSort Result ' + arr.join(', '));
};

export const selectionSort = (arr:Array<number>) => {
 // 최소값 탐색 후 i 위치와 바꾸기 
  for(let i=0;i<arr.length;i++){
    let mValIdx = i;
    let mVal = arr[i];
    let tmpVal = arr[i];
    for(let k=i;k<arr.length;k++){
      if(mVal > arr[k]){
        mVal = arr[k];
        mValIdx = k;
      }
    }
    arr[i] = arr[mValIdx];
    arr[mValIdx] = tmpVal;
  }
  console.log('selectionSort Result: ', arr.join(', '));

};



export const recursiveTest = (input: number):number => {
   if(input == 1){
     return 1;
   } else {
     return (input * 5 - 5) + recursiveTest(input-1);
   }
};

export const longestWord = async (sentence:string) => {
  let sen ='';
  let longestIdx = 0;
  sentence.split(/\s+/g).forEach(element => {
    let word = element.replace(/[^a-zA-Z]/g,'');
    if(word.length>longestIdx){
      sen = word;
    }
  });
  return sen;
};

export const calc = (squareArray:Array<Array<number>>, startX:number, startY: number, len:number):number => {
  let result = 0;
  for(let i=startX;i<len+startX;i++){
    for(let j=startY;j<len+startY;j++){
      // console.log("( " +i +", " + j + ") => " +squareArray[i][j]);
      result = result + Number(squareArray[i][j]);
    }
  }
  return result;
};

export const maximalSquareMain = (squareArray:Array<Array<number>>) => {
  const row = squareArray.length;
  const col = squareArray[0].length;
  
  let tMaximalValuesArray = new Array();
  for(var i=0;i<row;i++){
    for(var j=0;j<col;j++){
      if(squareArray[i][j]>0){
        tMaximalValuesArray.push(maximalSquareValueByStartPoint(squareArray,i,j));
        // console.log(maximalSquareValueByStartPoint(squareArray,i,j));
      }
    }
  }

  //console.log(tMaximalValuesArray);
  return extractMaximalValue(tMaximalValuesArray);
};

export const extractMaximalValue = (target: Array<number>) => {
  let idx = target[0];
  for(let i=0;i<target.length;i++){
    if(target[i]>idx){
      idx = target[i];
    }
  }
  return idx;
};

export const maximalSquareValueByStartPoint = (squareArray:Array<Array<number>>, startX:number, startY:number):number => {
  const endX = squareArray.length;
  const endY = squareArray[0].length;

  let maxlenX = endX - startX;
  let maxlenY = endY - startY;

  let maxLen = maxlenX > maxlenY ? maxlenY : maxlenX;
  let retVal = squareArray[startX][startY]; //최초값


  for(let i=maxLen;i>0;i--){
    let asumptionVal = i*i;
    let resultVal = calc(squareArray,startX,startY,i);
    
    if(asumptionVal == resultVal){
      retVal = resultVal;
      break; // 큰 정사각형부터 체크하기 때문에 값을 만나면 더이상의 값을 체크하는것은 무의미함.
    }
  }
  return retVal;
}









