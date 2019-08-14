const formTeamName = document.getElementById('formTeamName');
const formAgentName = document.getElementById('formAgentName');
const formEpph1 = document.querySelector('.formEpph1');
const formEpph2 = document.querySelector('.formEpph2');
const formEpph3 = document.querySelector('.formEpph3');
const formQc1 = document.querySelector('.formQc1');
const formQc2 = document.querySelector('.formQc2');
const formQc3 = document.querySelector('.formQc3');
const formCsat = document.querySelector('.formCsat');

const reset = document.querySelector('.reset');
reset.addEventListener('click', (e)=>{
    e.preventDefault;
})

const teamName = document.querySelector('.teamName');
const agentName = document.querySelector('.agentName');
const epph1 = document.querySelector('.epph1');
const epph2 = document.querySelector('.epph2');
const epph3 = document.querySelector('.epph3');
const qc1 = document.querySelector('.qc1')
const qc2 = document.querySelector('.qc2')
const qc3 = document.querySelector('.qc3')
const csat = document.querySelector('.csat')

formTeamName.addEventListener('change', (e)=>{
    console.log(e.target.value)
    teamName.textContent = e.target.value;
})

formAgentName.addEventListener('change', (e)=>{
    console.log(e.target.value)
    agentName.textContent = e.target.value;
})

formEpph1.addEventListener('change', (e)=>{
    epph1.textContent = `${e.target.value}/h`;
})

formEpph2.addEventListener('change', (e)=>{
    epph2.textContent = `${e.target.value}/h`;
})

formEpph3.addEventListener('change', (e)=>{
    epph3.textContent = `${e.target.value}/h`;
})

formQc1.addEventListener('change', (e)=>{
    qc1.textContent = e.target.value;
})

formQc2.addEventListener('change', (e)=>{
    qc2.textContent = e.target.value;
})

formQc3.addEventListener('change', (e)=>{
    qc3.textContent = e.target.value;
})

formCsat.addEventListener('change', (e)=>{
    csat.textContent = e.target.value;
})