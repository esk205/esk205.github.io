function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showPopup("Email copied to clipboard!");
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
}

function showPopup(message) {
    let popup = document.createElement("div");
    popup.innerText = message;
    popup.className = "popup-message";
    document.body.appendChild(popup);

    setTimeout(() => {
        popup.classList.add("fade-out");
        setTimeout(() => popup.remove(), 500);
    }, 1500);
}
