
let T1 = document.getElementById('T1')
let costDiv1 = document.getElementById('costDiv1')
let Cost1 = document.getElementById('Cost1')
let ulT1 = document.getElementById('ulT1')
let Start1 = document.getElementById('Start1')
let End1 = document.getElementById('End1')
let Duration1 = document.getElementById('Duration1')
let A1 = document.getElementById('A1')
let C1 = document.getElementById('C1')
// define objects below===============
let Table1 = new PoolGame(1)
let Table2 = new PoolGame(2)
let Table3 = new PoolGame(3)
let Table4 = new PoolGame(4)
let Table5 = new PoolGame(5)
let Table6 = new PoolGame(6)
let Table7 = new PoolGame(7)
let Table8 = new PoolGame(8)
let Table9 = new PoolGame(9)
let Table10 = new PoolGame(10)
let Table11 = new PoolGame(11)
let Table12 = new PoolGame(12)

function PoolGame(number){
  this.number = number
  this.startTime = 0
  this.endTime = 0
  this.duration = 0
  this.cost = 0
// ========== startGame function starts here ================
  this.startGame = function() {


    if(this.startTime != 0 && this.endTime == 0) {
      alert("Please choose an available TABLE")
    }
    else{
      this.startTime = 0
      this.endTime = 0
    let now = new Date() // .toLocaleString()
    this.startTime = now


    if(this.number == 1){
      Cost1.innerHTML= "Cost :$"
      Duration1.innerHTML = "<b>Duration</b>"
      Start1.innerHTML = ""
      Start1.innerHTML = this.startTime.toLocaleString()}

    else if(this.number == 2){
      Cost2.innerHTML= "Cost :$"
      Duration2.innerHTML = "<b>Duration</b>"
      Start2.innerHTML = ""
      Start2.innerHTML = this.startTime.toLocaleString() }

    else if(this.number == 3){
      Start3.innerHTML = ""
      Start3.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 4){
      Start4.innerHTML = ""
      Start4.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 5){
      Start5.innerHTML = ""
      Start5.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 6){
      Start6.innerHTML = ""
      Start6.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 7){
      Start7.innerHTML = ""
      Start7.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 8){
      Start8.innerHTML = ""
      Start8.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 9){
      Start9.innerHTML = ""
      Start9.innerHTML = this.startTime.toLocaleString() }

    else if(this.number == 10){
      Start10.innerHTML = ""
      Start10.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 11){
      Start11.innerHTML = ""
      Start11.innerHTML = this.startTime.toLocaleString()  }

    else if(this.number == 12){
      Start12.innerHTML = ""
      Start12.innerHTML = this.startTime.toLocaleString()  }

  }   // else closing
}   //startGame function closing

// ================ endGame Function starts here =================

  this.endGame = function() {
     if(this.endTime != 0 && this.startTime != 0 || this.startTime == 0 && this.endTime == 0) {
       alert("This table is already closed!") }

     else{

          this.endTime = new Date()
          let timeDifference = this.endTime - this.startTime
          let durationInSeconds = timeDifference/1000
          let durationInMinutes = durationInSeconds/60
          let durationInHours = durationInMinutes/60
          let duration = Math.floor(durationInHours) + "h" + ": " + Math.floor(durationInMinutes) + "m" + ": " + Math.floor(durationInSeconds) + "s"
          this.duration = duration
          let cost = durationInSeconds * 0.00833
          this.cost = cost


      if(this.number == 1){
        this.End1 = ""
        Cost1.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration1.innerHTML = "<b>Duration</b>   " + this.duration
        End1.innerHTML = this.endTime.toLocaleString() }

      else if(this.number == 2){
        this.End2 = ""
        Cost2.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration2.innerHTML = "<b>Duration</b>   " + this.duration
        End2.innerHTML = this.endTime.toLocaleString() }

      else if(this.number == 3){
        this.End3 = ""
        Cost3.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration3.innerHTML = "<b>Duration</b>   " + this.duration
        End3.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 4){
        this.End4 = ""
        Cost4.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration4.innerHTML = "<b>Duration</b>   " + this.duration
        End4.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 5){
        this.End5 = ""
        Cost5.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration5.innerHTML = "<b>Duration</b>  " + this.duration
        End5.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 6){
        this.End6 = ""
        Cost6.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration6.innerHTML = "<b>Duration</b>   " + this.duration
        End6.innerHTL = this.endTime.toLocaleString()  }

      else if(this.number == 7){
        this.End7 = ""
        Cost7.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration7.innerHTML = "<b>Duration</b>  " + this.duration
        End7.innerHTL = this.endTime.toLocaleString()  }

      else if(this.number == 8){
        this.End8 = ""
        Cost8.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration8.innerHTML = "<b>Duration</b>  " + this.duration
        End8.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 9){
        this.End9 = ""
        Cost9.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration9.innerHTML = "<b>Duration</b>  " + this.duration
        End9.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 10){
        this.End10 = ""
        Cost10.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration10.innerHTML = "<b>Duration</b>  " + this.duration
        End10.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 11){
        this.End11 = ""
        Cost11.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration11.innerHTML = "<b>Duration</b>  " + this.duration
        End11.innerHTML = this.endTime.toLocaleString()  }

      else if(this.number == 12){
        this.End12 = ""
        Cost12.innerHTML = "Cost : " + "$" + this.cost.toFixed(2)
        Duration12.innerHTML = "<b>Duration</b>  " + this.duration
        End12.innerHTML = this.endTime.toLocaleString()  }


} // else closing
}   // endGame function's else closing
}   // PoolGame class closing

A1.addEventListener('click', function () {
     End1.innerHTML = ""
     Table1.startGame()   })

A2.addEventListener('click', function () {
    End2.innerHTML = ""
    Table2.startGame()   })

A3.addEventListener('click', function () {
   End3.innerHTML = ""
   Table3.startGame()   })

A4.addEventListener('click', function () {
    End4.innerHTML = ""
    Table4.startGame()   })

A5.addEventListener('click', function () {
   End5.innerHTML = ""
   Table5.startGame()   })

A6.addEventListener('click', function () {
    End6.innerHTML = ""
    Table6.startGame()   })

A7.addEventListener('click', function () {
     End7.innerHTML = ""
     Table7.startGame()   })

A8.addEventListener('click', function () {
    End8.innerHTML = ""
    Table8.startGame()   })

A9.addEventListener('click', function () {
     End9.innerHTML = ""
     Table9.startGame()   })

A10.addEventListener('click', function () {
    End10.innerHTML = ""
    Table10.startGame()   })

A11.addEventListener('click', function () {
     End11.innerHTML = ""
     Table11.startGame()   })

A12.addEventListener('click', function () {
    End12.innerHTML = ""
    Table12.startGame()   })


// ============ Close Button functions starts below ============


C1.addEventListener('click', function() {
  Table1.endGame()     })

C2.addEventListener('click', function() {
  Table2.endGame()     })

C3.addEventListener('click', function() {
  Table3.endGame()     })

C4.addEventListener('click', function() {
  Table4.endGame()     })

C5.addEventListener('click', function() {
  Table5.endGame()     })

C6.addEventListener('click', function() {
  Table6.endGame()     })

C7.addEventListener('click', function() {
  Table7.endGame()     })

C8.addEventListener('click', function() {
  Table8.endGame()     })

C9.addEventListener('click', function() {
  Table9.endGame()     })

C10.addEventListener('click', function() {
  Table10.endGame()     })

C11.addEventListener('click', function() {
  Table11.endGame()     })

C12.addEventListener('click', function() {
  Table12.endGame()     })
