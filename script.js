/* ===========================
        ThienPremiumIos
=========================== */

const PERMANENT_KEY = "THIEN-3667-CONCAC";

const loginPage = document.getElementById("loginPage");
const mainPage = document.getElementById("mainPage");
const loadingPage = document.getElementById("loadingPage");

const keyInput = document.getElementById("keyInput");
const loginBtn = document.getElementById("loginBtn");
const loginStatus = document.getElementById("loginStatus");

const fpsSlider = document.getElementById("fpsSlider");
const fpsValue = document.getElementById("fpsValue");

const startButton = document.getElementById("startButton");

const terminalOutput = document.getElementById("terminalOutput");

const finishButton = document.getElementById("finishButton");

const loadingFill = document.getElementById("loadingFill");
const loadingPercent = document.getElementById("loadingPercent");
/* ===========================
        AUTO LOGIN
=========================== */

if(localStorage.getItem("THIEN_LOGIN") === "true"){

    loginPage.classList.add("hidden");

    mainPage.classList.remove("hidden");

}

/* ===========================
        LOGIN
=========================== */

loginBtn.onclick = () => {

    const key = keyInput.value.trim();

    if(key === PERMANENT_KEY){

        localStorage.setItem("THIEN_LOGIN","true");

        loginPage.classList.add("hidden");

        mainPage.classList.remove("hidden");

    }else{

        loginStatus.innerHTML = "❌ Key không chính xác.";

    }

};

/* ===========================
        FPS
=========================== */

fpsSlider.oninput = () => {

    fpsValue.innerHTML = fpsSlider.value;

};

/* ===========================
        START
=========================== */

startButton.onclick = () => {

    mainPage.classList.add("hidden");

    loadingPage.classList.remove("hidden");

    terminalOutput.innerHTML = "";

    finishButton.classList.add("hidden");

    startLoading();

};

/* ===========================
        LOADING
=========================== */

const logs = [];

for(let i=1;i<=120;i++){

    const list=[

        "[INFO] Loading Premium Modules...",
        "[INFO] Initializing Interface...",
        "[INFO] Checking Resources...",
        "[INFO] Loading UI Components...",
        "[INFO] Applying Theme...",
        "[INFO] Optimizing Memory...",
        "[INFO] Optimizing Performance...",
        "[INFO] Building Dashboard...",
        "[INFO] Rendering Effects...",
        "[INFO] Loading Animations...",
        "[INFO] Synchronizing Components...",
        "[INFO] Verifying Files...",
        "[INFO] Preparing Runtime...",
        "[INFO] Starting Services...",
        "[INFO] Final Optimization..."

    ];

    logs.push(list[Math.floor(Math.random()*list.length)]+"  #"+i);

}

logs.push("[SUCCESS] Premium Interface Ready.");
logs.push("[SUCCESS] Welcome To ThienPremiumIos.");

function startLoading(){

    terminalOutput.textContent="";

    loadingFill.style.width="0%";

    loadingPercent.textContent="0%";

    finishButton.classList.add("hidden");

    let index=0;

    const total=logs.length;

    const timer=setInterval(()=>{

        terminalOutput.textContent+=logs[index]+"\n";

        terminalOutput.scrollTop=terminalOutput.scrollHeight;

        index++;

        const percent=Math.floor(index/total*100);

        loadingFill.style.width=percent+"%";

        loadingPercent.textContent=percent+"%";

        if(index>=total){

            clearInterval(timer);

            loadingFill.style.width="100%";

            loadingPercent.textContent="100%";

            terminalOutput.textContent+="\n";

            terminalOutput.textContent+="====================================\n";

            terminalOutput.textContent+=" Premium Interface Loaded\n";

            terminalOutput.textContent+="====================================\n";

            finishButton.classList.remove("hidden");

        }

    },240);

}

/* ===========================
        BACK
=========================== */

finishButton.onclick = () => {

    loadingPage.classList.add("hidden");

    mainPage.classList.remove("hidden");

};
/* ===========================
        Sakura Effect
=========================== */

const petals = document.getElementById("petals");

function createPetal(){

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random()*100 + "%";

    petal.style.animationDuration =
    (6 + Math.random()*6) + "s";

    petal.style.opacity =
    .5 + Math.random()*.5;

    petal.style.transform =
    `scale(${0.6+Math.random()})`;

    petals.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },12000);

}

setInterval(createPetal,800);
