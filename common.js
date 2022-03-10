// 初期化
window.addEventListener('DOMContentLoaded', function(){
  let orderTable = document.getElementById("order-table");
    generateTableHead(orderTable, headData);
    generateTable(orderTable, orderData);
});
// テーブルヘッダー
let headData = new Array("商品名","受注日","金額");
// 初期内容
let orderData = [
    { goodsName: "商品名1", orderDate: new Date(2021, 1, 10), money: 1000 },
    { goodsName: "商品名2", orderDate: new Date(2022, 3, 10), money: 2000 },
    { goodsName: "商品名3", orderDate: new Date(2020, 2, 10), money: 3000 }
  ];
// テーブルヘッダー追加
function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
}
// テーブル内容追加
function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text;
        key == 'orderDate' ? text = document.createTextNode(element[key].toJSON().slice(0,10)) : text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
}
// 受注データ追加処理
function addData() {
    let orderTable = document.getElementById("order-table");
    // 入力値取得
    var goodsName = document.getElementById("goodsName").value;
    var orderDate = new Date(document.getElementById("orderDate").value);
    var money = +document.getElementById("money").value;
    // 受注データに追加
    orderData.push({goodsName, orderDate, money});
    // テーブルに追加
    let addData = orderData.pop(); 
    let row = orderTable.insertRow();
    for (key in addData) {
      let cell = row.insertCell();
      let text;
      key == 'orderDate' ? text = document.createTextNode(addData[key].toJSON().slice(0,10)) : text = document.createTextNode(addData[key]);
      cell.appendChild(text);
    }
}