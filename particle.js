function Particle(r, g, b, x, y, sw) {
  this.xpos = x;
  this.ypos = y;
  this.pos = createVector(this.xpos, this.ypos);
  this.vel = createVector(0, -10);
  this.acc = createVector(0, 0);
  this.swh = sw;
  this.maxspeed = 6;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;

    stroke(r, g, b, 80);
    strokeWeight(0.1);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    line(
      windowWidth - this.pos.x,
      this.pos.y,
      windowWidth - this.prevPos.x,
      this.prevPos.y
    );
    // line(
    //   windowWidth - this.pos.x,
    //   this.pos.y,
    //   windowWidth - this.prevPos.x,
    //   this.prevPos.yxs
    // );
    // point(this.pos.x, this.pos.y);
    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > windowWidth - 30) {
      this.pos.x = 40;
      this.updatePrev();
    }
    if (this.pos.x < 30) {
      this.pos.x = windowWidth - 40;
      this.updatePrev();
    }
    if (this.pos.y > windowHeight - 30) {
      this.pos.y = 40;
      this.updatePrev();
    }
    if (this.pos.y < 30) {
      this.pos.y = windowHeight - 40;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * rows;
    var force = vectors[index];
    this.applyForce(force);
  };
}

function Particle2(r, g, b, x, y, sw) {
  this.xpos = x;
  this.ypos = y;
  this.pos = createVector(this.xpos, this.ypos);
  this.swh = sw;
  //this.pos = createVector(random(windowWidth), random(windowHeight));
  this.vel = createVector(0, -10);
  this.acc = createVector(0, 0);
  this.maxspeed = 2.2;
  this.prevPos = this.pos.copy();

  this.update = function () {
    this.vel.add(this.acc);
    this.vel.limit(this.maxspeed);
    this.pos.add(this.vel);
    this.acc.mult(0);
  };

  this.applyForce = function (force) {
    this.acc.add(force);
  };

  this.show = function () {
    this.red = r;
    this.green = g;
    this.blue = b;

    stroke(this.red, this.green, this.blue, 100);
    strokeWeight(0.1);
    //ellipse(this.pos.x, this.pos.y, this.prevPos.x / 3, this.prevPos.y / 13);
    line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
    line(
      windowWidth - this.pos.x,
      this.pos.y,
      windowWidth - this.prevPos.x,
      this.prevPos.y
    );

    this.updatePrev();
  };
  this.updatePrev = function () {
    this.prevPos.x = this.pos.x;
    this.prevPos.y = this.pos.y;
  };
  this.edges = function () {
    if (this.pos.x > windowWidth - 30) {
      this.pos.x = 30;
      this.updatePrev();
    }
    if (this.pos.x < 30) {
      this.pos.x = windowWidth - 30;
      this.updatePrev();
    }
    if (this.pos.y > windowHeight - 30) {
      this.pos.y = 30;
      this.updatePrev();
    }
    if (this.pos.y < 30) {
      this.pos.y = windowHeight - 30;
      this.updatePrev();
    }
  };
  this.follow = function (vectors) {
    var x = floor(this.pos.x / scl);
    var y = floor(this.pos.y / scl);
    var index = x + y * rows;
    var force = vectors[index];
    this.applyForce(force);
  };
}
