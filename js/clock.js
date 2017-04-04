var initialCount = 60*20

var clockNumber = 0

var counters = document.getElementById('counters')
for (var i = 0; i < 3; i++) {
    counters.appendChild(counter())
}

function counter(){

    function build(){

        clockNumber++

        var div = document.createElement('div')
        div.className = 'span4'

        var h2 = document.createElement('h2')
        h2.innerText = 'Clock ' + clockNumber
        div.appendChild(h2)

        var h3 = document.createElement('h3')
        div.appendChild(h3)

        var p = document.createElement('p')
        div.appendChild(p)

        var stopButton = document.createElement('button')
        stopButton.className = 'btn btn-danger'
        stopButton.innerText = 'Stop'
        stopButton.addEventListener('click', stop)
        p.appendChild(stopButton)

        var startButton = document.createElement('button')
        startButton.className = 'btn btn-success'
        startButton.innerText = 'Start'
        startButton.addEventListener('click', start)
        p.appendChild(startButton)

        var resetButton = document.createElement('button')
        resetButton.className = 'btn btn-inverse'
        resetButton.innerText = 'Reset'
        resetButton.addEventListener('click', reset)
        p.appendChild(resetButton)

        displayElement = h3

        reset()

        return div

    }

    var t, count, displayElement;

    return build()

    function start() {
        t = setInterval(tic, 1000);
    }

    function tic() {
        if (count === 0) {
            stop()
        } else {
            count--;
            display()
        }
    }

    function display() {
        var mins = ~~(count / 60);
        var secs = count % 60;
        displayElement.innerHTML = pad(mins) + ":" + pad(secs) 
    }

    function pad(time) {
        if (time < 10) {
            return "0" + time
        } 
        return time
    }

    function stop() {
        clearTimeout(t);
    }

    function reset() {
        stop();
        count = initialCount;
        display();
    }

}