function Player(num, {health, defense, attack }) {
  this.num = num;
  this.health = health;
  this.initialHealth = health;
  this.defense = defense;
  this.attack = attack;
  this.canAttack = true;
  this.canSuperAttack = true;
}

Player.prototype.decreaseHealth = function(value) {
  this.health = ((this.health - value) > 0) ? (this.health - value) : 0;
};

export default Player;
