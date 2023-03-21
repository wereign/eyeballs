const speed = 0.1

class Eye {
  eye_radius: number
  pupil_radius: number
  element: HTMLDivElement
  pupil: HTMLDivElement

  constructor(x: number, y: number, eye_radius: number, pupil_radius: number) {
    this.eye_radius = eye_radius
    this.pupil_radius = pupil_radius
    this.element = document.createElement('div')
    this.element.classList.add('Eye')
    this.element.style.left = `${x}px`
    this.element.style.top = `${y}px`
    this.element.style.width = `${this.eye_radius * 2}px`
    this.element.style.height = `${this.eye_radius * 2}px`
    this.pupil = document.createElement('div')
    this.element.append(this.pupil)
    this.pupil.classList.add('pupil')
    this.pupil.style.width = `${this.pupil_radius * 2}px`
    this.pupil.style.height = `${this.pupil_radius * 2}px`
    document.body.append(this.element)
  }

  render(mouse_x: number, mouse_y: number) {
    let eye_x = this.element.getBoundingClientRect().left
    let eye_y = this.element.getBoundingClientRect().top
    let x = mouse_x - (eye_x + this.eye_radius)
    let y = mouse_y - (eye_y + this.eye_radius)
    x *= speed
    y *= speed
    const distance = Math.sqrt(x * x + y * y)
    if (distance > this.eye_radius) {
      x *= this.eye_radius / distance
      y *= this.eye_radius / distance
    }
    x += this.eye_radius - this.pupil_radius
    y += this.eye_radius - this.pupil_radius
    this.pupil.style.transform = `translate(${x}px, ${y}px)`
  }
}

function init() {
  const eyes: Eye[] = [
    new Eye(230, 212, 22, 2),
    new Eye(290, 200, 22, 2),
    new Eye(362, 79, 25, 2),
    new Eye(422, 78, 23, 2),
  ]
  document.addEventListener('mousemove', (event) => {
    for (const eye of eyes) {
      eye.render(event.clientX, event.clientY)
    }
  })
}

init()
