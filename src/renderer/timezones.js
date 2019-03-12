const version =  require('../package.json').version;
const root = 'http://localhost:5000';

function ajax(method, url, callback) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === xhr.DONE) {

            var response = JSON.parse(xhr.response);
            callback(response);
        }
    };

    xhr.open(method, url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send();
}

function getLocalizedTime() {
    const dropDownList = document.getElementById("timezones");
    const span = document.getElementById("regionalTime");

    ajax("GET",
        root + "/api/time/" + dropDownList.value,
        regionalTime => {
            span.innerText = regionalTime;
        });
}

function getTimezones() {
    const dropDownList = document.getElementById("timezones");

    ajax("GET", root + "/api/time", timezones => {
        for (let i = 0; i < timezones.length; i++) {
            const option = document.createElement("OPTION");
            option.innerHTML = timezones[i];
            option.value = timezones[i];
            dropDownList.options.add(option);
        }
    });
}

(function displayVersion() {
    const versionSpan = document.getElementById("version");
    versionSpan.innerText = version;
})();