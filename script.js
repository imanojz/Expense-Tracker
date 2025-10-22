
let totalDollar = 0.00;
const AddItemBTN = document.getElementById("AddItemButton");
const contentInp = document.getElementById("content");
const amountInp = document.getElementById("amount");
const totalMoney = document.getElementById("totalMoney");


AddItemBTN.addEventListener("click", function(){
    let inpVal1 = contentInp.value.trim();
    let inpVal2 = amountInp.value;
    let trimVal2 = inpVal2.trim();
    let floteVal2 = parseFloat(trimVal2).toFixed(2);
    let finalVal2 = Number(floteVal2);

    if(!inpVal1 || inpVal1 === "" || isNaN(finalVal2)){
        alert("Fill Your Bill.");
        return false;
    }else{
        contentInp.value = "";
        amountInp.value = "";
        totalDollar = totalDollar + finalVal2;
        const p = document.createElement("p");
        const aa = document.createElement("aa");
        aa.setAttribute("doller", finalVal2);
        aa.textContent = `${inpVal1 + ": ₹" + finalVal2}`;
        const bb = document.createElement("bb");
        bb.classList.add("delBTN");
        const delImg = document.createElement("img");
        delImg.setAttribute("src", "images/Delete.png");
        bb.append(delImg);
        p.appendChild(aa);
        p.appendChild(bb);

        const box2 = document.querySelector(".box2");
        box2.appendChild(p);

        totalMoney.textContent = totalDollar;

        let delBTN = document.querySelectorAll(".delBTN");
        bb.addEventListener("click", function(){
            // console.log("Delete Button Working SuccessFully.");
            let price = this.previousElementSibling;
            let lossPrice = parseFloat(price.getAttribute("doller"));
            totalDollar = totalDollar - lossPrice;
            totalMoney.textContent = totalDollar;
            this.parentElement.remove();
        });
    }
});
                
