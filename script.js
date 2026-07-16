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

const logs = [

"Starting application...",
"Checking local resources...",
"Loading interface...",
"Initializing modules...",
"Preparing graphics...",
"Loading assets...",
"Verifying configuration...",
"Connecting components...",
"Applying preferences...",
"Optimizing performance...",
"Rendering interface...",
"Finalizing startup...",
"Application ready."

];

function startLoading(){

    let index = 0;

    const timer = setInterval(()=>{

        terminalOutput.innerHTML += logs[index] + "\\n";

        terminalOutput.scrollTop = terminalOutput.scrollHeight;

        index++;

        if(index >= logs.length){

            clearInterval(timer);

            setTimeout(()=>{

                finishButton.classList.remove("hidden");

            },1000);

        }

    },1200);

}

/* ===========================
        BACK
=========================== */

finishButton.onclick = () => {

    loadingPage.classList.add("hidden");

    mainPage.classList.remove("hidden");

};