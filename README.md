<p align="center">
   <a href="https://github.com/Arquisoft/lomap_es3a/actions/workflows/master_lomapes3a.yml">
      <img alt="CI for LOMAP ES3A" src="https://github.com/Arquisoft/lomap_es3a/actions/workflows/master_lomapes3a.yml/badge.svg">
   </a>
   <a href="https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es3a">
      <img alt="Quality Gate Status" src="https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es3a&metric=alert_status">
   </a>
   <a href="https://sonarcloud.io/summary/new_code?id=Arquisoft_lomap_es3a">
      <img alt="Coverage" src="https://sonarcloud.io/api/project_badges/measure?project=Arquisoft_lomap_es3a&metric=coverage">
   </a>
</p>

<h1 align="center"><img src="https://user-images.githubusercontent.com/91057639/218590043-d4243147-e5c0-4f7b-8fed-12ed8d290490.png" width="1024" height="512"></h1>

<p align="center">
   <a href="https://github.com/Arquisoft/lomap_es3a/wiki/Video-Promocional">
      Promotional video
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/wiki/Video-Demo">
      Demo video
   </a>
   ·
   <a href="https://arquisoft.github.io/lomap_es3a/">
      Docs
   </a>
   ·
   <a href="https://lomapes3a.azurewebsites.net">
      Web Access
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/discussions">
      Discussions
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/wiki">
      Wiki
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/issues/new?assignees=&labels=&template=bug_report.md&title=">
      Report a bug
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/issues/new?assignees=&labels=&template=feature_request.md&title=">
      Request a new feature
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/projects?query=is%3Aopen">
      Projects
   </a>
   ·
   <a href="https://github.com/Arquisoft/lomap_es3a/tree/master/usability_tests">
      Usability Tests
   </a>   
</p>

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#🖥️-project-developers">
         Project developers.
      </a>
    </li>
    <li>
      <a href="#🗺️-project-description">
         Project description.
      </a>
      <ol>
         <li>
            <a href="#🛠-tech-stack">
               Tech stack.
            </a>
         </li>
      </ol>
    </li>
    <li>
      <a href="#📑-deployment-instructions">
         Deployment instructions.
      </a>
      <ol>
         <li>
            <a href="#native-deployment-(node)">
               Native deployment (Node).
            </a>
         </li>
      </ol>
    </li>
  </ol>
</details>

## 🖥️ Project developers:
<img align="right" width="200" height="200" src="designs/measuring_oil.gif">

|       Developers        |        UOs         |                                                       GitHub Profiles                                                       |
|:----------------------------:|:------------------:|:------------------------------------------------------------------------------------------------------------------------------:|
|    Carlos Diez Fernández     | UO284373@uniovi.es |  <a href="https://github.com/uo284373"><img alt="Carlos" src="https://img.shields.io/badge/UO284373-Carlos Diez-success"></a>  |
|    Raúl Fernández España     | UO278036@uniovi.es |   <a href="https://github.com/UO278036"><img alt="Raúl" src="https://img.shields.io/badge/UO278036-Raúl Fernández-blue"></a>   |
|    Omar Teixeira González    | UO281847@uniovi.es |    <a href="https://github.com/Omitg24"><img alt="Omar" src="https://img.shields.io/badge/UO281847-Omar Teixeira-red"></a>     |
| David Leszek Warzynski Abril | UO278968@uniovi.es | <a href="https://github.com/UO278968"><img alt="David" src="https://img.shields.io/badge/UO278968-David Warzynski-purple"></a> |


## 🗺️ Project description:

<p align="justify">
This project has been developed jointly by the previously mentioned developers as an assignment given by the professors <em>Jose Emilio Labra Gayo</em>, <em>Pablo González</em>, <em>Irene Cid Rico</em>, and <em>Cristian Augusto Alonso</em> for the subject of <strong>Software Architecture</strong> (ASW) at the University of Oviedo.
</p>
<p align="justify">
In GOMap!®, users can log in and interact with the world around them. In this way, any user can view markers created by other users, or create their own, on the places located in the searched location. These places can range from shops to bars, restaurants, landscapes, monuments, and more.
</p>
<p align="justify">
These markers can have different features added to them, such as images or a description of the location, but it doesn't end there. The real interaction comes when users can add reviews or opinions about a marker created by another user.
</p>

### 🛠 Tech stack:
<p align="justify">
The complete list of technologies used, along with their architectural decisions (ADR), can be found in the following <a href="https://github.com/Arquisoft/lomap_es3a/wiki/Decisiones-Arquitectonicas">link</a>.
</p>
<img align="right" width="200" height="200" src="designs/code.gif">
<ul>
   <li><a href="https://legacy.reactjs.org/">React</a>.</li>
   <li><a href="https://nodejs.org/en">NodeJS</a>.</li>
   <li><a href="https://www.typescriptlang.org/">TypeScript</a>.</li>
   <li><a href="https://solidproject.org/">SOLID</a>.</li>
   <li><a href="https://www.openstreetmap.org/">OpenStreetMap</a>.</li>
</ul>

## 📑 Deployment instructions:
<p align="justify">
   To execute the project, it will be necessary to first clone it, so you will need to have Git installed (access through the following <a href="https://git-scm.com/downloads">link</a>), and then clone this repository into a local directory, either by downloading the repository in <em>.zip</em> format or by using the following command:
</p>
<img align="right" width="150" height="150" src="designs/customer-service.gif">
<ol>
   <li>Go to the local directory where you want to clone the repository.</li>
   <li>Open the console or command prompt.</li>
   <li>Enter the following code:</li>
</ol>

```shell
   git clone https://github.com/Arquisoft/lomap_es3a.git
```
<p align="justify">
   Once this is done, the application can be launched in the following way.
</p>

### Native deployment (Node)
#### Requirements using node
<p align="justify">
   Firstly, you need to install <a href="https://nodejs.org/en">Node</a>. In case it is already installed, you should make sure that you have the latest version of it.
</p>

```shell
# Launch the webapp
cd webapp
npm install
npm start
```
<p align="justify">
   To access the web app (once the previous process has been completed), simply go to the following <a href="http://localhost:3000">link</a>.
</p>

<footer>
   <p>
        <a href="https://arquisoft.github.io/">©Arquisoft - UNIOVI</a> <img align="center" width="100" height="100" src="designs/binocularsV2.gif">
   </p>
  <img src="designs/footer.svg">
</footer>
