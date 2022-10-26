const form = document.getElementById("generate-form");
const qr = document.getElementById("qrcode");

const onGenerateSubmit = (e) => {
    e.preventDefault();

    clearUI();

    const url = document.getElementById("url").value;
    const size = document.getElementById("size").value;

    if (url === "") {
        alert("Please Enter a URL!");
    } else {
        showSpinner();

        setTimeout(() => {
            hideSpinner();
            generateQRCode(url, size);

            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
    }
};

const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
        text: url,
        width: size,
        height: size
    });
}

const showSpinner = () => {
    const spinner = (document.getElementById("spinner").style.display = "block");
};
const hideSpinner = () => {
    const spinner = (document.getElementById("spinner").style.display = "none");
};
const clearUI = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('save-link')
    if (saveBtn)
        saveBtn.remove()

}

const createSaveBtn = (saveUrl) => {
    const link = document.createElement('a')
    link.id = 'save-link'
    link.classList = 'bg-cyan-800 hover:bg-cyan-500 py-2 my-5 w-1/3 text-white font-bold rounded m-auto md:w-1/3'
    link.href = saveUrl
    link.download = 'qrcode'
    link.innerHTML = 'Save Image'
    document.getElementById('generated').appendChild(link);
}

hideSpinner();

form.addEventListener("submit", onGenerateSubmit);