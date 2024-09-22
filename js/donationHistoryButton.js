document.getElementById('history-section').classList.add('hidden')
document.getElementById('donation-btn')
    .addEventListener('click', function () {
        document.getElementById('history-section').classList.add('hidden')
        document.getElementById('donation-section').classList.remove('hidden')
        document.getElementById('history-btn').innerHTML = `
            <a class="btn btn-ghost text-xl  border-stone-500 text-stone-500">History</a>
        `
        document.getElementById('donation-btn').innerHTML = `
            <a class="btn btn-ghost text-xl bg-[#ABEF5F] px-5">Donation</a>
        `
    })

document.getElementById('history-btn')
    .addEventListener('click', function () {
        document.getElementById('donation-section').classList.add('hidden')
        document.getElementById('history-section').classList.remove('hidden') 
        document.getElementById('donation-btn').innerHTML = `
            <a class="btn btn-ghost text-xl  border-stone-500 text-stone-500">Donation</a>
        `
        document.getElementById('history-btn').innerHTML = `
            <a class="btn btn-ghost text-xl bg-[#ABEF5F] px-5">History</a>
        `
    })