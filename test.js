var Dumpling = function() {
  this.params = {
    left: 0,
    top: 0,
    currentX: 0,
    currentY: 0,
    flag: false
  };
};
Dumpling.prototype.getCss = function(key) {
  return this.$el.css(key);
};
Dumpling.prototype.mousedown = function() {
  var _self = this;
  this.params.left = getCss("left");
  this.params.top = getCss("top");
  this.$el.on("mousedown", function() {
    _self.params.flag = true;
    _self.params.currentX = e.clientX;
    _self.params.currentY = e.clientY;
  });
};
Dumpling.prototype.mouseup = function() {
  var _self = this;
  document.onmouseup = function() {
    if (_self.params) {
      _self.params.flag = false;
      _self.params.left = getCss("left");
      _self.params.top = getCss("top");
    }
  };
};
Dumpling.prototype.mousemove = function() {
  var _self = this;
  document.onmousemove = function(event) {
    var e = event ? event : window.event;
    if (_self.params && _self.params.flag) {
      e.preventDefault && e.preventDefault();
      var nowX = e.clientX,
        nowY = e.clientY;
      var disX = nowX - params.currentX,
        disY = nowY - params.currentY;
      _self.$el.css({
        left: parseInt(params.left) + disX + "px",
        top: parseInt(params.top) + disY + "px"
      });
    }
  };
};
