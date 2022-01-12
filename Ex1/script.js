function payment(transactions, total){
    var transactions = parseInt(prompt("Number of transactions"));
    var total = parseInt(prompt("Total cost of payments"));
    alert("The final payment is: " + ((transactions*3)+total)*1.01);
}
payment();