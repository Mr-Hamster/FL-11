const reverseNumber = (number) => {
    let extraVal,size;
      if(number < 0){
        size = 1;
        extraVal = -1;
      }else{
        size = 0;
        extraVal = 1;
      }
      let numberStr = number + '';
      let result = '';
      for(let i = numberStr.length - 1; i >= size; i--){
          result += numberStr[i];
      }
      return extraVal*result;
  }

reverseNumber(456);