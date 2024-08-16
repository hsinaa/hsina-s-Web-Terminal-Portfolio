document.addEventListener('DOMContentLoaded', function() {
    const userInput = document.getElementById('user-input');
    const output = document.getElementById('output');

    userInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            const command = userInput.innerText.trim();
            handleCommand(command);
            userInput.innerText = '';
        }
    });

    function handleCommand(command) {
        let response = '';
        switch (command) {
            case 'all':
                response = "</br>Available commands: </br> - about: provides brief introduction about me </br> - contact: shows how you can contact me </br> - resume: opens my resume in a new tab </br> - clear: clears the terminal </br>";
                break;
            case 'about':
                response = "</br>Hello! My name's AMANSAG Hasnae, a cybersecurity & embedded telecommunications systems engineering student at the National School of Applied Sciences of Marrakech. I'm deeply passionate about my career path, and I'm particularly fascinated by cryptography, forensics, and data analysis at the moment.. I'm eager to contribute to securing digital infrastructures and exploring innovative solutions in this dynamic field. </br>";
                break;
            case 'contact':
                response = "</br>My contact information: </br></br> \
Email : <a href='mailto:amansag.hasnae@gmail.com'>amansag.hasnae@gmail.com</a></br> \
LinkedIn : <a href='https://www.linkedin.com/in/hasnae-amansag-b7ba81214' target='_blank'>www.linkedin.com/in/hasnae-amansag-b7ba81214</a></br> \
GitHub : <a href='https://github.com/hsinaa' target='_blank'>https://github.com/hsinaa</a></br> \
TryHackMe : <a href='https://tryhackme.com/p/hsina' target='_blank'>https://tryhackme.com/p/hsina</a></br> \
RootMe : <a href='https://www.root-me.org/hsina?lang=fr#19caccc7be256309e3111d5ab530efe9' target='_blank'>https://www.root-me.org/hsina?lang=fr#19caccc7be256309e3111d5ab530efe9</a></br>";

            case 'resume':
                window.open('resume.pdf', '_blank');
                response = "</br>Opening resume... </br>";
                break;
            case 'clear':
                output.innerHTML = '' + "</br>" ;
                return;
            default:
                response = "</br>Invalid command</br>";
        }
        output.innerHTML += `&gt;root@hsina: ~$ ${command}<br>${response}<br>`;
    }
});
