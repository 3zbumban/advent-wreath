const kranz = document.getElementsByTagName("img")[0];
const swith = document.getElementsByTagName("input")[0];
const body = document.getElementsByTagName("body")[0];
const bis = document.getElementById("bis");

const firstAdvent = {
    2019: new Date(2019, 11, 1),
    2020: new Date(2020, 10, 29),
    2021: new Date(2021, 10, 28),
    2022: new Date(2022, 10, 27),
    2023: new Date(2023, 11, 23),
}

// const test0 = new Date("October 6, 2016 11:13:00")
// const test0 = new Date("December 1, 2019 11:13:00")
// const test0 = new Date("December 7, 2019 00:01:00")
// const test0 = new Date("December 8, 2019 00:01:00")
// const test0 = new Date("December 14, 2019 00:01:00")
// const test0 = new Date("December 15, 2019 00:01:00")
// const test0 = new Date("December 21, 2019 00:01:00")
// const test0 = new Date("December 8, 2019 00:01:00")
// const test0 = new Date("December 8, 2019 00:01:00")


swith.addEventListener("change", function() {
    if(this.checked) {
        body.style.backgroundColor = "black";
        bis.style.color = "white";
    } else {
        body.style.backgroundColor = "white";
        bis.style.color = "black";
        // bis.style.color = "white"

    }
});

setKranz(0);

function setKranz(adv) {
    kranz.src = `./static/${adv}advent.gif`;
}

function adv(date) {
    const first = firstAdvent[date.getFullYear()];
    if (date.getMonth() == 11) {
        if (date > first) {
            setKranz(1);
            if (date > new Date(date.getFullYear(), date.getMonth(), date.getDay() + 7)) {
                setKranz(2);
            }
            if (date > new Date(date.getFullYear(), date.getMonth(), date.getDay() + 14)) {
                setKranz(3);
            }
            if (date > new Date(date.getFullYear(), date.getMonth(), date.getDay() + 14 + 7)) {
                setKranz(4);
            }
        }
    } else {
        setKranz(0);
    }
}

function getRemaining() {
    let today = new Date();
      /* We've written in next Christmas.  You can substitute
         whatever you wish.  The turn of the century, maybe? */
    let targetdate = new Date(`December 24, ${today.getFullYear()}`); 
    targetdate.setYear(today.getFullYear()); 
      /* Set a variable with number of milliseconds per day
         Hours times minutes times seconds times a thousand */ 
    let milliseconds = (24 * 60 * 60 * 1000);
    let remaining = ((targetdate.getTime() - today.getTime()) / milliseconds); 
    remaining = Math.round(remaining);
    return remaining;
}

// adv(test0);

function bisWhn() {
    bis.innerHTML = `Noch <u>${getRemaining()} Tage</u> bis Weihnachten!🎁`
}

// loop
adv(new Date());
bisWhn();
setInterval(() => {
    adv(new Date());
    bisWhn();
}, 30000)
// }, 3000)

