const advise = document.getElementById('card__advice')
const adviseNum = document.querySelector('#card__num')
const adviseBtn = document.getElementById('adviseBtn')


adviseBtn.addEventListener('click', generateAdvise)

async function generateAdvise() {
    try {
        const result = await fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => data.slip);
    
        // adviseNum.innerHTML = `<span>${result.id}</span>`;
        adviseNum.innerHTML = `<span>${result.idsk}</span>`;
        advise.innerHTML = `<div>${result.advice}</div>`;
    } catch (error) {
        throw new Error (`Something went wrong`)
    }
}
generateAdvise()




