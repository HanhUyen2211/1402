const canvas = document.getElementById('firework')
if (!canvas) throw new Error('Canvas not found')
const ctx = canvas.getContext('2d')

function resizeCanvas() {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
}
resizeCanvas()
window.addEventListener('resize', resizeCanvas)

function random(min, max) {
  return Math.random() * (max - min) + min
}

/* =========================
   Meteor (Shooting Star)
========================= */
class Meteor {
  constructor() {
    // Always start off-screen on the LEFT
    this.x = random(-250, 50)
    this.y = random(canvas.height * 0.05, canvas.height * 0.45)

    // Natural shooting star speed (not slow)
    this.vx = random(13, 17)
    this.vy = random(6, 8)

    // Longer trail
    this.length = random(120, 220)
    // Soft visibility
    this.alpha = random(0.55, 0.75)
    this.life = 0
    this.maxLife = 100
  }

  update() {
    this.x += this.vx
    this.y += this.vy
    this.life++
    this.alpha *= 0.985
  }

  draw() {
    ctx.save()
    ctx.globalAlpha = this.alpha

    const grad = ctx.createLinearGradient(
      this.x,
      this.y,
      this.x - this.vx * 8,
      this.y - this.vy * 8
    )
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.4, 'rgba(200,220,255,0.9)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')

    ctx.strokeStyle = grad
    ctx.lineWidth = 2.2
    ctx.lineCap = 'round'
    ctx.beginPath()
    ctx.moveTo(this.x, this.y)
    ctx.lineTo(
      this.x - this.vx * this.length,
      this.y - this.vy * this.length
    )
    ctx.stroke()

    ctx.restore()
  }
}

/* =========================
   Rocket
========================= */
class Rocket {
  constructor(x) {
    this.x = x
    this.y = canvas.height + 20
    // Normal rocket ascent speed
    this.vy = random(9, 12)
    this.exploded = false
  }

  update() {
    this.y -= this.vy
    if (this.y < random(80, canvas.height * 0.38)) {
      this.exploded = true
      explode(this.x, this.y)
    }
  }

  draw() {
    ctx.save()
    ctx.fillStyle = '#ffffff'
    ctx.shadowBlur = 8
    ctx.shadowColor = '#ffffff'
    ctx.fillRect(this.x - 1.5, this.y, 3, 14)
    ctx.restore()
  }
}

/* =========================
   Particle
========================= */
class Particle {
  constructor(x, y, color) {
    this.x = x
    this.y = y
    // Thinner spark (smaller core)
    this.radius = random(0.9, 1.8)
    this.color = color
    // Faster burst speed
    this.speed = random(9.5, 16)
    // Perfect radial explosion (no directional bias)
    this.angle = Math.random() * Math.PI * 2
    this.vx = Math.cos(this.angle) * this.speed
    this.vy = Math.sin(this.angle) * this.speed
    this.alpha = 1
    // Realistic gravity & air drag
    this.gravity = random(0.06, 0.085)
    // Less air resistance -> faster motion
    this.friction = random(0.975, 0.99)
    this.spin = random(-0.02, 0.02)
  }

  update() {
    this.x += this.vx
    this.y += this.vy

    this.vy += this.gravity
    this.vx *= this.friction
    this.vy *= this.friction

    // Faster fade to avoid slow-motion feel
    this.alpha -= 0.035
  }

  draw() {
    if (this.alpha <= 0) return
    ctx.save()
    ctx.globalAlpha = this.alpha
    // Glow slightly larger than spark itself
    ctx.shadowBlur = 18
    ctx.shadowColor = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.fill()
    ctx.restore()
  }
}

const colorPalettes = [
  ['#CE2029', '#FFFCAF', '#FFE17C', '#FF664B'],
  ['#0E08B8', '#2C3CEB', '#8DCCF0', '#FDFFFC'],
  ['#EB279B', '#FAD844', '#F23448', '#3F34C8'],
  ['#3340DB', '#DE5BF8', '#A76BFE', '#EFE8FF'],
  ['#E040FB', '#D500F9', '#AA00FF', '#EA80FC'],
  ['#C65E65', '#D38A66', '#DAB982', '#DAC7B4'],
  ['#18FFFF', '#00E5FF', '#00B8D4', '#84FFFF']
]

let rockets = []
let particles = []
let meteors = []
let meteorCooldown = 0
let isRunning = false
let phase = 0
let explosionCount = 0
let showText = false
let textAlpha = 0

function explode(x, y) {
  explosionCount++

  const palette =
    colorPalettes[Math.floor(random(0, colorPalettes.length))]

  // Larger explosion area with thin sparks
  const layers = [
    { count: 180, speedMul: 1.55 }, // outer ring – very fast
    { count: 220, speedMul: 1.15 }, // mid ring
    { count: 140, speedMul: 0.9 }   // inner core
  ]

  layers.forEach(layer => {
    for (let i = 0; i < layer.count; i++) {
      const color = palette[Math.floor(random(0, palette.length))]
      const p = new Particle(x, y, color)
      p.speed *= layer.speedMul
      p.vx = Math.cos(p.angle) * p.speed
      p.vy = Math.sin(p.angle) * p.speed
      particles.push(p)
    }
  })
}

function launchRocket() {
  rockets.push(new Rocket(random(140, canvas.width - 140)))
}

function animate() {
  if (!isRunning) return

  // Clear faster to remove trailing slow effect
  ctx.fillStyle = 'rgba(0, 0, 0, 0.28)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Meteor spawn (controlled frequency)
  meteorCooldown--
  if (meteorCooldown <= 0) {
    const count = Math.floor(random(3, 8)) // 4–6 sao băng mỗi lần
    for (let i = 0; i < count; i++) {
      meteors.push(new Meteor())
    }
    meteorCooldown = random(180, 360) // tần suất vừa, không quá dày
  }

  rockets.forEach((r, i) => {
    r.update()
    r.draw()
    if (r.exploded) rockets.splice(i, 1)
  })

  meteors = meteors.filter(
    m => m.life < m.maxLife && m.x < canvas.width + 500 && m.alpha > 0.04
  )
  meteors.forEach(m => {
    m.update()
    m.draw()
  })

  particles = particles.filter(p => p.alpha > 0)
  particles.forEach(p => {
    p.update()
    p.draw()
  })

  if (showText) {
    textAlpha = Math.min(textAlpha + 0.01, 1)
    ctx.save()
    ctx.globalAlpha = textAlpha
    ctx.font = 'bold 56px sans-serif'
    ctx.fillStyle = '#ffffff'
    ctx.textAlign = 'center'
    ctx.fillText('năm mới vui vẻ~', canvas.width / 2, canvas.height * 0.42)
    ctx.restore()
  }

  requestAnimationFrame(animate)
}

/* =========================
   Controls & Sequence
========================= */
const startBtn = document.getElementById('startBtn')
const backBtn = document.getElementById('backBtn')

if (backBtn) {
  backBtn.onclick = () => {
    window.location.href = 'index.html'
  }
}

if (startBtn) {
  startBtn.onclick = () => {
    if (isRunning) return
    isRunning = true
    animate()

    let launched = 0

    const singleInterval = setInterval(() => {
      if (launched >= 8) {
        clearInterval(singleInterval)

        // Phase 2: 11 fireworks almost simultaneously
        setTimeout(() => {
          for (let i = 0; i < 11; i++) {
            setTimeout(() => launchRocket(), i * 120)
          }

          // Phase 3: fade-in text
          setTimeout(() => {
            showText = true
          }, 2200)

          // Auto redirect
          setTimeout(() => {
            window.location.href = 'lockscreen.html'
          }, 6000)
        }, 1000)

        return
      }

      launchRocket()
      launched++
    }, 750)
  }
}