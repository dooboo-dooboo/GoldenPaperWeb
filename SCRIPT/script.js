var editorLinks = document.querySelectorAll('.EditorLink');
var projects = document.querySelectorAll('.Projects');
var currentEditor;
var currentProjects;
var nowEditorNum = -1;

function clickEditorHandler() {
    if (currentEditor && currentProjects) {
        currentEditor.classList.remove('Clicked');
        currentEditor.classList.add('DisClicked');
        currentProjects.classList.remove('Show');
        currentProjects.classList.add('Hide');
    }
    this.classList.remove('DisClicked');
    this.classList.add('Clicked');
    currentEditor = this;
    nowEditorNum = Number(currentEditor.dataset.eindex);
    console.log(nowEditorNum);
    currentProjects = projects[nowEditorNum];
    currentProjects.classList.remove('Hide');
    currentProjects.classList.add('Show');
}

for (var i = 0; i < editorLinks.length; i++) {
    editorLinks[i].addEventListener('click', clickEditorHandler);
}