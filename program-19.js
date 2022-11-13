var n = parseInt(prompt('Enter the size of array'))
arr = []
for(var i=0;i<n;i++){
    arr[i] = parseInt(prompt('enter the elements'));
}
console.log(arr);
arrnew = []
index = []
for(var j=0;j<n;j++){
    for(var k=j+1;k<n;k++){
        if(arr[j]==arr[k]){
            index[k] = -1;
        }
    }
}
j = -1
for(var i=0;i<n;i++){
    if(index[i]!=-1){
        j++;
        arrnew[j]=arr[i];
    }
}
console.log(arrnew);