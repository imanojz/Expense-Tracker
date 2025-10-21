

const AddItemBTN = document.getElementById("AddItemButton");
const contentInp = document.getElementById("content");
const amountInp = document.getElementById("amount");

AddItemBTN.addEventListener("click", function(){
    let inpVal1 = contentInp.value;
    let inpVal2 = parseFloat(amountInp.value);

    if(!inpVal1 && !inpVal2){
        alert("Fill Your Bill.");
        return false;
    }else{
        const p = document.createElement("p");
        const aa = document.createElement("aa");
        aa.textContent = `${inpVal1 + ": $" + inpVal2.toFixed(2)}`;
        const bb = document.createElement("bb");
        bb.textContent = "DELETE";
        p.appendChild(aa);
        p.appendChild(bb);
        console.log(p);
    }
});


				let total = 0;
				$(".btn").click(function(){
					
					let a = $("#content").val();
					let b = parseFloat($("#amount").val());
					
					if(a === "" || isNaN(b)){
						return false;
					}
					$(".box2").prepend(`<p><aa>${a + ": $" + b.toFixed(2)}</aa><bb>Delete</bb></p>`);
					total += b;
                    $(".span1").text(total.toFixed(2));
					$("#content, #amount").val("");
					$("#content").focus();
					
					
				});
				
				$(".box2").on("click", "bb", function() {
				let amountText = $(this).siblings('aa').text(); 
                let amountValue = parseFloat(amountText.split('$')[1]); 

              
                total -= amountValue;
                $(".span1").text(total.toFixed(2)); 

					$(this).closest("p").remove();
                });
                
