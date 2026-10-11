async function copyCryptoAddr(elementId, button) {
    const address = document.getElementById(elementId);
    if (!address) {
        console.error(`Cannot copy crypto address: element "${elementId}" not found.`);
        return;
    }

    const originalButtonText = button.textContent;
    const originalBackgroundColor = address.style.backgroundColor;
    const originalBorderColor = address.style.borderColor;

    try {
        await navigator.clipboard.writeText(address.textContent.trim());
        button.textContent = 'Copied address!';
        address.style.backgroundColor = '#f0fdf4';
        address.style.borderColor = '#bbf7d0';
    } catch (error) {
        console.error('Failed to copy crypto address to clipboard.', error);
        button.textContent = 'Copy failed';
    }

    window.setTimeout(() => {
        button.textContent = originalButtonText;
        address.style.backgroundColor = originalBackgroundColor;
        address.style.borderColor = originalBorderColor;
    }, 2000);
}
