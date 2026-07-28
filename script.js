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
                response = "</br>Available commands: </br> - about: provides brief introduction about me </br> - experience: my professional experience </br> - projects: selected projects </br> - skills: technical skills </br> - education: my academic background </br> - certifications: certs & learning paths </br> - languages: languages I speak </br> - extracurricular: clubs & activities </br> - contact: shows how you can contact me </br> - resume: opens my resume in a new tab </br> - clear: clears the terminal </br>";
                break;
            case 'about':
                response = "</br>Hello! My name's AMANSAG Hasnae, a DevSecOps and Cloud engineer with a cybersecurity background. I'm passionate about cloud security, DevSecOps, and SIEM/threat detection, and I've built projects ranging from a self-healing honeypot on AWS to an AI-enhanced Wazuh SIEM platform with real-time UEBA. I'm currently looking for my first full-time role in cybersecurity/cloud engineering. </br>";
                break;
            case 'experience':
                response = "</br>Experience: </br></br> \
[Mar - Aug 2026] Cybersecurity Intern @ Atlas Cloud Services</br> \
&nbsp;&nbsp;Design and Implementation of a Wazuh SIEM for Log Centralization and Analysis: deployed an AI-enhanced Wazuh SIEM to centralize EXGARDE physical access control logs, built a real-time UEBA engine (Isolation Forest) for behavioral anomaly detection, and implemented SQL Server high availability with automated dashboards & email alerting.</br></br> \
[Jul - Aug 2025] Cybersecurity Intern @ Atlas Cloud Services</br> \
&nbsp;&nbsp;Implementation of a Data Loss Prevention (DLP) solution: containerized OpenDLP and integrated AI-based data classification for sensitive data detection.</br>";
                break;
            case 'projects':
                response = "</br>Projects (type 'resume' for the full CV): </br></br> \
- Cloud-Native Microservices Platform for Sporting Events - Kubernetes, Helm, ArgoCD, Jenkins DevSecOps pipeline</br> \
- Automation Platform for a Secure Kubernetes Infrastructure - Terraform, Ansible, Helm, ArgoCD, Falco</br> \
- Cloud-Native SIEM Pipeline with Threat Intel on AWS - GuardDuty, EventBridge, Lambda, TheHive, Cortex, MISP</br> \
- VMware ESXi 7.0 & vCenter Deployment</br> \
- Automated AWS Application Deployment - Packer, Ansible, Terraform</br> \
- Self-Healing Honeypot on AWS - Cowrie, boto3, Auto Scaling</br> \
- Private Cloud with OpenStack - IaaS platform on Ubuntu/DevStack (Nova, Neutron, Glance)</br> \
- SecureOps Lab - personal home lab for AD administration, exploitation & SIEM practice</br> \
- HardenedHost - Linux OS hardening scripts following ANSSI best practices</br>";
                break;
            case 'skills':
                response = "</br>Skills: </br></br> \
Cloud & Virtualization: AWS, OpenStack, VMware ESXi/vCenter, Proxmox</br> \
Containers & Orchestration: Docker/Docker Compose, Kubernetes, Helm</br> \
IaC & CaC: Terraform, Ansible, Packer</br> \
DevOps & GitOps: Jenkins, ArgoCD, Git, SonarQube, Trivy, OWASP DC, GitLeaks, Falco</br> \
Observability: Prometheus, Grafana, Loki, Kibana/ElasticSearch</br> \
SIEM / Threat Intel: Wazuh, Splunk, TheHive, Cortex, MISP</br> \
Scripting & Programming: Python (boto3), Bash, Java JEE</br> \
Systems & Network Administration: Linux, Windows, Active Directory, Networking</br> \
Compliance & Governance: PCA/PRA, ISO 27001, EBIOS RM</br>";
                break;
            case 'education':
                response = "</br>Education: </br></br> \
National School of Applied Sciences, Marrakech (ENSA) - 2021-2026</br> \
Cyber Defense & Embedded Telecommunications Systems Engineering</br></br> \
Groupe Scolaire la Résidence - 2018-2021</br> \
Baccalaureate, Mathematical Sciences</br>";
                break;
            case 'certifications':
                response = "</br>Certifications: </br></br> \
- (ISC)² Certified in Cybersecurity (CC) - Candidate</br> \
- TryHackMe SOC Level 1 Learning Path</br> \
- Nutanix Hybrid Cloud Fundamentals - Certified</br>";
                break;
            case 'languages':
                response = "</br>Languages: </br></br> \
English : Advanced</br> \
French : Advanced</br> \
Standard Arabic : Advanced</br>";
                break;
            case 'extracurricular':
                response = "</br>Extracurricular Activities: </br></br> \
- JLM - Jeunes Leaders Marocains : Member, Projects, Social Actions & Design unit</br> \
- SelfDev : Member, Communication & Design unit</br> \
- GCDSTE Secure Tech, ENSA Marrakech : Head of the Communication unit, Member of the Training unit</br>";
                break;
            case 'contact':
                response = "</br>My contact information: </br></br> \
Phone : +212 (0) 694 234 813</br> \
Email : <a href='mailto:amansag.hasnae@gmail.com'>amansag.hasnae@gmail.com</a></br> \
LinkedIn : <a href='https://www.linkedin.com/in/hasnae-amansag-b7ba81214' target='_blank'>www.linkedin.com/in/hasnae-amansag-b7ba81214</a></br> \
GitHub : <a href='https://github.com/hsinaa' target='_blank'>https://github.com/hsinaa</a></br> \
TryHackMe : <a href='https://tryhackme.com/p/hsina' target='_blank'>https://tryhackme.com/p/hsina</a></br> \
RootMe : <a href='https://www.root-me.org/hsina?lang=fr#19caccc7be256309e3111d5ab530efe9' target='_blank'>https://www.root-me.org/hsina?lang=fr#19caccc7be256309e3111d5ab530efe9</a></br>";
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
