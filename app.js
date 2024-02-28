document.addEventListener("DOMContentLoaded", (e) => {
// function for create table 
    function buildTable(items) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        const headTr = document.createElement("tr");
        const idTh = document.createElement("th");
        const titleTh = document.createElement("th");
        const priceTh = document.createElement("th");
        const categoryTh = document.createElement("th");
       
        idTh.textContent = "ID";
        titleTh.textContent = "TItle";
        priceTh.textContent = "Price";
        categoryTh.textContent = "Category";

        headTr.append(idTh);
        headTr.append(titleTh);
        headTr.append(priceTh);
        headTr.append(categoryTh);
        thead.append(headTr);
        table.append(thead);
      
        items.forEach((item) => {
          const bodyTr = document.createElement("tr");
          const id = document.createElement("td");
          const title = document.createElement("td");
          const price = document.createElement("td");
          const category = document.createElement("td");
          

          id.textContent = item.id;  
          title.textContent = item.title;
          price.textContent = item.price;  
          category.textContent = item.category;

          bodyTr.append(id);
          bodyTr.append(title);
          bodyTr.append(price);
          bodyTr.append(category);
          tbody.append(bodyTr);
        });
      
        table.append(tbody);
      
        document.body.append(table);
      }
// function for create table 
      async function GetdataFunciton() {
        try {
          let response = await fetch("https://fakestoreapi.com/products");
          let items = await response.json();
          buildTable(items);
        } catch (err) {
          console.log   (err);
        }
      }
      GetdataFunciton();
})
