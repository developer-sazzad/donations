

// Donation Button Functions 
document.getElementById('donation-btn').addEventListener('click', function () {
    showElementById('donation-content');
    addPrimaryBg('donation-btn');
    removePrimaryBg('history-btn');
    hideElementById('history-content');
});

// History Button Functions 
document.getElementById('history-btn').addEventListener('click', function () {
    hideElementById('donation-content');
    addPrimaryBg('history-btn');
    removePrimaryBg('donation-btn');
    showElementById('history-content');

});


function donationInputElementById1() {
    const time = new Date();
    const donationInput1 = getInputValueById('donation-input1');
    const myTotalBalance = getTextElementById('my-total-balance');
    if (donationInput1 == 'Number' || donationInput1 > 0) {
        const donateTotal = getTextElementById('donation-price1');
        const donateTotalCount = donationInput1 + donateTotal;
        const remainingTotal = myTotalBalance - donationInput1;
        if (remainingTotal < 0) {
            swal("Sorry", "Your Account Balance is low !", "warning");
            return;
        } else {
            document.getElementById('my-total-balance').innerText = remainingTotal;
            document.getElementById('donation-price1').innerText = donateTotalCount;

            const donateTitle1 = document.getElementById('donation-title1').innerText;
            const donateDiscription1 = document.getElementById('donation-discription').innerText;
            const historyElement = document.getElementById('history-content');
            historyElement.innerHTML += `
            <div class="flex flex-col lg:flex-row gap-10 justify-between items-center border p-10 bg-white rounded-xl">
                <div class="space-y-4">
                    <p class="text-lg md:text-xl lg:text-3xl font-bold "> 
                    <span>${donationInput1}</span> Taka is
                    ${donateTitle1}
                    </p>
                    <p class="text-base lg:text-xl">${time.toString()}</p>
                </div>
                <div>
                    <button class="btn" onclick="my_modal_1.showModal()">View</button>
                    <dialog id="my_modal_1" class="modal">
                    <div class="modal-box">
                        <p class="text-lg md:text-xl font-medium mb-4"> 
                        <span>${donationInput1}</span> Taka is ${donateTitle1}</p>
                        <p class="text-base">${donateDiscription1}</p>
                        <div class="modal-action">
                        <form method="dialog">
                            <button class="btn">Close</button>
                        </form>
                        </div>
                    </div>
                    </dialog>
                </div>
            </div>`;
            document.getElementById('donation-input1').value = '';
        }
    } else {
        swal("Oops", "Something went wrong! Please Put your Donation Amount.", "error");
        return;
    }

    // 

    // const donationPrice1 = document.getElementById('donation-price1');
    // const donationPriceValue1 = donationPrice1.innerText;
    // const donationPriceNumber = parseInt(donationPriceValue1);


    // const donationInputField1 = getInputValueById('donation-input1');
    // donationPrice1.innerText = donationPriceNumber + donationInputField1;


    // const myTotalBalance = document.getElementById('my-total-balance');
    // const totalBalanceText = myTotalBalance.innerText;
    // const totalBalanceNumber = parseInt(totalBalanceText);

    // myTotalBalance.innerText = totalBalanceNumber - donationInputField1;

    // if(totalBalanceNumber < 0){
    //     swal ( "Oops" ,  "Something went wrong!" ,  "error" );
    // }
}