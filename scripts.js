const form=document.getElementById("expense-form");
const list=document.getElementById("expense-list");
const totalEl=document.getElementById("total");

let expenses =JSON.parse(localStorage.getItem("expenses"))||[];

function renderExpenses(){
    list.innerHTML="";
    let total=0;

    expenses.forEach((exp,index)=>{
        total+=exp.amount;

        const li=document.createElement("li");
        li.innerHTML=`
        ${exp.title} - ₹${exp.amount} (${exp.category})
        <button onclick="deleteExpense(${index})">Delete</button>
        `;
        list.appendChild(li);
    });

    totalEl.textContent=total;
    localStorage.setItem("expenses",JSON.stringify(expenses));
}
    form.addEventListener("submit",(e)=>{
        e.preventDefault();
        const title=document.getElementById("title").value;
        const amount=parseFloat(document.getElementById("amount").value);
        const category=document.getElementById("category").value;

        expenses.push({title,amount,category});
        renderExpenses();
        form.reset();
    });
    function deleteExpense(index){
        expenses.splice(index,1);
        renderExpenses();
    }

    renderExpenses();
