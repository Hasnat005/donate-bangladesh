let currentBalance = document.getElementById("current-balance").innerText;

function validation(donatedMoney) {
    if (donatedMoney === "" || donatedMoney === null) return false;
    if (isNaN(donatedMoney)) return false;
    if (parseFloat(donatedMoney) <= 0) return false;
    if (parseFloat(currentBalance) < parseFloat(donatedMoney)) return false;
    return true;
}


function updateCurrentBalance(donatedMoney) {
    currentBalance = document.getElementById("current-balance").innerText;
    currentBalance = parseFloat(currentBalance) - donatedMoney;
    document.getElementById("current-balance").innerText = currentBalance;
}

function updateHistorySection(donatedMoney, donationTask) {
    const currentTime = new Date();
    document.getElementById('history-section').innerHTML += `
        <div class="border-2 rounded-lg p-10 space-y-5">
            <p class="font-bold text-xl">${donatedMoney} Taka is donated for ${donationTask}, Bangladesh</p>
            <p class="text-stone-500">Date: ${currentTime}</p>
        </div>
    `
}

document.getElementById('donate-btn-noakhali')
    .addEventListener('click', function(){
        let donatedMoney = document.getElementById("input-noakhali").value;
        console.log(donatedMoney);
        if(validation(donatedMoney) === false) {
            alert("Please give valid amount!!!!");
        } else {
            donatedMoney = parseFloat(donatedMoney);
            my_modal_1.showModal();
            updateCurrentBalance(donatedMoney);
            updateHistorySection(donatedMoney, "Flood at Noakhali")
            let noakhaliBalance = document.getElementById("noakhali-balance").innerText;
            noakhaliBalance = parseFloat(noakhaliBalance) + donatedMoney;
            document.getElementById("noakhali-balance").innerText = noakhaliBalance;
            document.getElementById("input-noakhali").value = '';
        }
    })

document.getElementById('donate-btn-feni')
    .addEventListener('click', function(){
        let donatedMoney = document.getElementById("input-feni").value;
        if(validation(donatedMoney) === false) {
            alert("Please give valid amount!!!!");
        } else {
            donatedMoney = parseFloat(donatedMoney);
            my_modal_2.showModal();
            updateCurrentBalance(donatedMoney);
            updateHistorySection(donatedMoney, "Flood Relief in Feni")
            let feniBalance = document.getElementById("feni-balance").innerText;
            feniBalance = parseFloat(feniBalance) + donatedMoney;
            document.getElementById("feni-balance").innerText = feniBalance;
        }
        document.getElementById("input-feni").value = '';
    })

    document.getElementById('donate-btn-movement')
    .addEventListener('click', function(){
        let donatedMoney = document.getElementById("input-movement").value;
        if(validation(donatedMoney) === false) {
            alert("Please give valid amount!!!!");
        } else {
            donatedMoney = parseFloat(donatedMoney);
            my_modal_3.showModal();
            updateCurrentBalance(donatedMoney);
            updateHistorySection(donatedMoney, "Aid for Injured in the Quota Movement")
            let movementBalance = document.getElementById("movement-balance").innerText;
            movementBalance = parseFloat(movementBalance) + donatedMoney;
            document.getElementById("movement-balance").innerText = movementBalance;
        }
        document.getElementById("input-movement").value = '';
    })