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
                response = "</br>Hello! My name's AMANSAG Hasnae, a cybersecurity & embedded telecommunications systems engineering student at the National School of Applied Sciences of Marrakech. I'm deeply passionate about this career path, particularly fascinated by cryptography at the moment. I'm eager to contribute to securing digital infrastructures and exploring innovative solutions in this dynamic field. </br>";
                break;
            case 'contact':
                response = "</br>My contact information: </br></br> Email : amansag.hasnae@gmail.com  </br> Linkedin : www.linkedin.com/in/hasnae-amansag-b7ba81214  </br> GitHub  : https://github.com/hsinaa </br> TryHackMe : https://tryhackme.com/p/hsina  </br>  RootMe : https://www.root-me.org/hsina?lang=fr#19caccc7be256309e3111d5ab530efe9              </br>  ";
                break;
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
