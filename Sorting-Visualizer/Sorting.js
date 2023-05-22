// import  './NewArray';
var array=[];
let bubble=document.getElementById('bubble');
let selection=document.getElementById('selection');
let insertion=document.getElementById('insertion');
let merged=document.getElementById('merge');
let quick=document.getElementById('quick');
let newarray=document.getElementById('newarray');
async function bubbleSort(){
 buttonDisable(true);
  bubble.style.backgroundColor='green';
  for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length-i-1;j++){
        let e=document.getElementById("elem"+(j+1));
        let colj=e.style.backgroundColor;
        e.style.backgroundColor='orange';
        let e1=document.getElementById("elem"+(j));
        let colj1=e1.style.backgroundColor;
        e1.style.backgroundColor='orange';
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        },100)
      );
        if(array[j]>array[j+1]){
           swap(j,j+1,array);
        }
        e.style.backgroundColor=colj1;
        e1.style.backgroundColor=colj;
  }
  let e=document.getElementById("elem"+(array.length-i-1));
  e.style.backgroundColor='rgb(8, 175, 8)';
}
buttonDisable(false);
  bubble.style.backgroundColor='aquamarine';
}

async function insertionSort(){
  buttonDisable(true);
 
  insertion.style.backgroundColor='green';
    //Start from the second element.
    for(let i = 1; i < array.length;i++){
        //Go through the elements behind it.
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        },500)
      );
        for(let j = i - 1; j > -1; j--){
          if(array[j]<=array[j+1]) {
            let inserted= document.getElementById('elem'+(j+1));
            inserted.style.backgroundColor='rgb(42, 159, 165)';
            break;}
          let e=document.getElementById("elem"+(j+1));
          let colj=e.style.backgroundColor;
          e.style.backgroundColor='orange';
          let e1=document.getElementById("elem"+(j));
          let colj1=e1.style.backgroundColor;
          e1.style.backgroundColor='orange';
          await new Promise((resolve) =>
          setTimeout(() => {
            resolve();
          },1000)
        );
          if(array[j]>array[j+1]){
             swap(j,j+1,array);
          }
          e.style.backgroundColor=colj1;
          e1.style.backgroundColor=colj;
         

        }
        for(let k=0;k<=i;k++){
          let inserted= document.getElementById('elem'+k);
            inserted.style.backgroundColor='rgb(42, 159, 165)';
        }

    }  
    buttonDisable(false);
    insertion.style.backgroundColor='aquamarine';
  }

   async function selectionSort() {
    buttonDisable(true);
      selection.style.backgroundColor='green';
      let min;
      for (let i = 0; i < array.length; i++) {
          // Assume a minimum value 
          let e1=document.getElementById("elem"+(i));
          let colj1=e1.style.backgroundColor;
          e1.style.backgroundColor='orange';
          min = i;
          for (let j = i + 1; j < array.length; j++) {
            let e=document.getElementById("elem"+(j));
            let colj=e.style.backgroundColor;
            e.style.backgroundColor='orange';
              if (array[j] < array[min]) {
                  min = j;
              }
              await new Promise((resolve) =>
              setTimeout(() => {
                resolve();
              }, 700)
            );
            e.style.backgroundColor='black';
          }
          if (min !== i) {
            e1.style.backgroundColor='black';
           swap(i,min,array);
          }
          e1.style.backgroundColor='green';
      }
      selection.style.backgroundColor='aquamarine';
      buttonDisable(false);
    }

 //New Array generation 

function newArray(){
 array=[]
for(let i=0;i<=19;i++)
{ let x=document.getElementById("elem"+i);
if(x!=null)
x.remove();
}
    for(let i=1;i<=20;i++) array.push(Math.floor(Math.random() * 99 +1));
let parent=document.getElementsByClassName("bars");
for(let i=0;i<array.length;i++){
    let child=document.createElement("div");
   
    child.style.backgroundColor='black';
    child.style.height=(array[i]*4+'px')
    child.style.margin='10px';
    child.innerHTML=array[i];
    child.style.color='white';
    child.style.padding='12px';
    //child.style.border='solid 3px red'
    child.setAttribute('id','elem'+i);
    parent[0].appendChild(child);
}
}

// Swap function to array elements 

function swap(i,j,array){
    let a='elem'+i;
    let b='elem'+(j);
    console.log(i," ",j);
    let e=document.getElementById(a);
    let e1=document.getElementById(b);
let colj=e.style.backgroundColor;
let colj1=e1.style.backgroundColor;
e.style.backgroundColor=colj1;
e1.style.backgroundColor=colj;
    let va=array[i];
    array[i]=array[j];
    array[j]=va;
    e.style.height=(array[i]*4+'px');
    e1.style.height=(array[j]*4+'px')
    e.innerHTML=array[i];
    e1.innerHTML=array[j];
}

// Random color assigning

function getColor(){
let color='#';
letters='123456789ABCEDEF';
for(let i=0;i<6;i++){
    color+=letters[Math.floor(Math.random()*16)];
}
return color;
}

  async function partition(arr,start, end) {

  let pivotValue=arr[end];
  let pivotIndex=start;
  for(let i=start;i<end;i++){
    let a='elem'+i;
    let b='elem'+(pivotIndex);
    //console.log(i," ",j);
    let e=document.getElementById(a);
    let e1=document.getElementById(b);
let colj=e.style.backgroundColor;
let colj1=e1.style.backgroundColor;
e.style.backgroundColor='orange';
e1.style.backgroundColor='orange';
      if(arr[i]<pivotValue){
        await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 1700)
      );
         if(i!=pivotIndex)
          swap(i,pivotIndex,arr);
          pivotIndex++;
          
      }
      e.style.backgroundColor=colj1;
          e1.style.backgroundColor=colj;
  }

  await new Promise((resolve) =>
  setTimeout(() => {
    resolve();
  }, 1700)
);
  swap(pivotIndex,end,arr);
  return pivotIndex;
}

 async function quickSort(left, right) {
  if(left<right){
   const pivot= await partition(array,left,right);
   let e1=document.getElementById('elem'+pivot);
   e1.style.backgroundColor='rgb(14, 222, 62)';
 await quickSort(left,pivot-1);
   await quickSort(pivot+1,right);
  }
 }



async function quicksort(){
  buttonDisable(true);
quick.style.backgroundColor='green';
await quickSort(0,array.length-1);
buttonDisable(false);
  quick.style.backgroundColor='aquamarine';
}

 function buttonDisable(value){
  bubble.disabled=value;
  insertion.disabled=value;
  selection.disabled=value;
  quick.disabled=value;
  merged.disabled=value;
  newarray.disabled=value;
 }

newArray();
