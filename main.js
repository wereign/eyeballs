var speed = 0.1;
var Eye = /** @class */ (function () {
    function Eye(x, y, eye_radius, pupil_radius) {
        this.eye_radius = eye_radius;
        this.pupil_radius = pupil_radius;
        this.element = document.createElement('div');
        this.element.classList.add('Eye');
        this.element.style.left = "".concat(x, "px");
        this.element.style.top = "".concat(y, "px");
        this.element.style.width = "".concat(this.eye_radius * 2, "px");
        this.element.style.height = "".concat(this.eye_radius * 2, "px");
        this.pupil = document.createElement('div');
        this.element.append(this.pupil);
        this.pupil.classList.add('pupil');
        this.pupil.style.width = "".concat(this.pupil_radius * 2, "px");
        this.pupil.style.height = "".concat(this.pupil_radius * 2, "px");
        document.body.append(this.element);
    }
    Eye.prototype.render = function (mouse_x, mouse_y) {
        var eye_x = this.element.getBoundingClientRect().left;
        var eye_y = this.element.getBoundingClientRect().top;
        var x = mouse_x - (eye_x + this.eye_radius);
        var y = mouse_y - (eye_y + this.eye_radius);
        x *= speed;
        y *= speed;
        var distance = Math.sqrt(x * x + y * y);
        if (distance > this.eye_radius) {
            x *= this.eye_radius / distance;
            y *= this.eye_radius / distance;
        }
        x += this.eye_radius - this.pupil_radius;
        y += this.eye_radius - this.pupil_radius;
        this.pupil.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
    };
    return Eye;
}());
function init() {
    var eyes = [
        new Eye(230, 212, 22, 2),
        new Eye(290, 200, 22, 2),
        new Eye(362, 79, 25, 2),
        new Eye(422, 78, 23, 2),
    ];
    document.addEventListener('mousemove', function (event) {
        for (var _i = 0, eyes_1 = eyes; _i < eyes_1.length; _i++) {
            var eye = eyes_1[_i];
            eye.render(event.clientX, event.clientY);
        }
    });
}
init();
