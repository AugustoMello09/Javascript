function Pessoa() {
  this.idade = 1000

  const self = this
  setInterval(function () {
    self.idade--
    console.log(self.idade)
  }.bind(self), 0)
}

new Pessoa