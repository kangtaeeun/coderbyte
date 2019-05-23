import { Handler, Context, Callback } from 'aws-lambda';

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

*/

export const main = async (event:any, context: Context, callback: Callback) => {
  /*
  const longestOne = longestWord(event);
  console.log(longestOne);
  */
  // const maximalSquareResult = maximalSquareMain(event);
  console.log(maximalSquareValueByStartPoint(event, 1,2));
  return callback(null, 'success');
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

export const maximalSquareMain = async (squareArray:Array<Array<number>>) => {
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

  console.log(tMaximalValuesArray);
};

export const maximalSquareValueByStartPoint = (squareArray:Array<Array<number>>, startX:number, startY:number):number => {
  const endX = squareArray.length;
  const endY = squareArray[0].length;

  let maxlenX = endX - startX;
  let maxlenY = endY - startY;

  let maxLen = maxlenX > maxlenY ? maxlenY : maxlenX;
  let retVal = squareArray[startX][startY]; //최초값

  //여기부터 시작하자 .. 
  for(let i=maxLen;i>startY;i--){
    let asumptionVal = i*i;
    let resultVal = calc(squareArray,startX,startY,i);
    console.log('assumption: ' + asumptionVal + ' resultVal: ' + resultVal);

    if(asumptionVal == resultVal){
      console.log('here? ')
      retVal = resultVal;
      break; // 큰 정사각형부터 체크하기 때문에 값을 만나면 더이상의 값을 체크하는것은 무의미함.
    }
  }
  return retVal;
}






export const test = async () => {
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      console.log(">>>> " + i+", "+ j);
      if(i ==5 && j==5){
        console.log("break!!!!!!!! ");
        break;
      }      
    }//end for 
  }// end for 
  console.log("####### end test ");
}











