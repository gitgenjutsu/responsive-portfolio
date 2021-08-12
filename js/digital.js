window.onload = setInterval(() => {
    let hour = document.querySelector('#hours');
    let minutes = document.querySelector('#minutes');
    let seconds = document.querySelector('#seconds');
    let ampm = document.querySelector('#ampm');

    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let am = "AM";

    //12 Hours format
    if (h > 12) {
        h = h - 12;
    }
    //adding 0 before single digit
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    //AM PM changing
    am = (h > 12) ? "AM" : "PM"

    hour.innerHTML = h + " :&nbsp;";
    minutes.innerHTML = m + " :&nbsp;";
    seconds.innerHTML = s + "&nbsp;";
    ampm.innerHTML = am;
})