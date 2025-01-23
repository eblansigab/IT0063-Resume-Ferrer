function changeBackgroundColor() {
    const container = document.getElementById('resume-container');
    const currentColor = container.style.backgroundColor;

    if (currentColor === 'rgb(173, 216, 230)' || currentColor === '#add8e6') {
        container.style.backgroundColor = '#e7bcbc'; 
    } else {
        container.style.backgroundColor = '#add8e6'; 
    }
}