let array=[10000,6,-6,9,3,2,6,1,4,8,5];
function partition(arr,start, end) {

    let pivotValue=arr[end];
    let pivotIndex=start;
    for(let i=start;i<end;i++){
        if(arr[i]<pivotValue){
            swap(arr,i,pivotIndex);
            pivotIndex++;
        }
    }
    swap(arr,pivotIndex,end);
    return pivotIndex;
  }

  function quickSort(left, right) {
    if(left<right){
     const pivot=partition(array,left,right);
     quickSort(left,pivot-1);
     quickSort(pivot+1,right);
    }
   }
 
  function swap(arr,a,b){
    let temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
  }
  quickSort(0,array.length-1);
  console.log(array)

