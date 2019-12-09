let productList=[];
function drawTableFromList(productList){
    tableString="<table id='productTable' border='1' width='30%'>";
    tableString+="<caption>Danh sach san pham</caption>";
    for(let i=0;i<productList.length;i++){
        tableString+="<tr>";
        tableString+="<td>"+productList[i]+"</td>";
        tableString+="<td><input type='button' value='Edit'></td>";
        tableString+="<td><input type='button' value='Delete'/></td>";
        tableString+="</tr>";
    }
    tableString+="</table>";
    document.getElementById("table").innerHTML=tableString;
}
function addProduct(productList){
    nameProduct=document.getElementById('nameProduct').value;
    productList.push(nameProduct);
    drawTableFromList(productList);

}
function deleteProduct(productList,i){
    if(confirm("Ban co chac xoa khong?")){
        for(let j=i;j<productList.length;j++)
            productList[j]=productList[j+1];
        drawTableFromList(productList);
    }
}
function editProduct(productList,i) {

}