<template>
  <div
    class="particles-js"
    :id="id"
    :color="color"
    :particleOpacity="particleOpacity"
    :linesColor="linesColor"
    :particlesNumber="particlesNumber"
    :shapeType="shapeType"
    :particleSize="particleSize"
    :linesWidth="linesWidth"
    :lineLinked="lineLinked"
    :lineOpacity="lineOpacity"
    :linesDistance="linesDistance"
    :moveSpeed="moveSpeed"
    :hoverEffect="hoverEffect"
    :hoverMode="hoverMode"
    :clickEffect="clickEffect"
    :clickMode="clickMode"
  ></div>
</template>
<script>
  /* eslint-disable */
  export default {
    name: 'vue-particles',
    data: function () {
      return {
        id: 'particles-instance-' + Math.floor(Math.random() * 5000)
      }
    },
    props: {
      color: {
        type: String,
        default: '#dedede'
      },
      particleOpacity: {
        type: Number,
        default: 0.7
      },
      particlesNumber: {
        type: Number,
        default: 80
      },
      shapeType: {
        type: String,
        default: 'circle'
      },
      particleSize: {
        type: Number,
        default: 4
      },
      linesColor: {
        type: String,
        default: '#dedede'
      },
      linesWidth: {
        type: Number,
        default: 1
      },
      lineLinked: {
        type: Boolean,
        default: true
      },
      lineOpacity: {
        type: Number,
        default: 0.4
      },
      linesDistance: {
        type: Number,
        default: 150
      },
      moveSpeed: {
        type: Number,
        default: 3
      },
      hoverEffect: {
        type: Boolean,
        default: true
      },
      hoverMode: {
        type: String,
        default: 'grab'
      },
      clickEffect: {
        type: Boolean,
        default: true
      },
      clickMode: {
        type: String,
        default: 'push'
      }
    },
    mounted () {
      // import tsParticles only on client-side
      require('tsparticles');
      this.$nextTick(() => {
        this.initTsParticles(
          this.color,
          this.particleOpacity,
          this.particlesNumber,
          this.shapeType,
          this.particleSize,
          this.linesColor,
          this.linesWidth,
          this.lineLinked,
          this.lineOpacity,
          this.linesDistance,
          this.moveSpeed,
          this.hoverEffect,
          this.hoverMode,
          this.clickEffect,
          this.clickMode
        )
      })
    },
    methods: {
      initParticleJS (
        color,
        particleOpacity,
        particlesNumber,
        shapeType,
        particleSize,
        linesColor,
        linesWidth,
        lineLinked,
        lineOpacity,
        linesDistance,
        moveSpeed,
        hoverEffect,
        hoverMode,
        clickEffect,
        clickMode
      ) {
        this.initTsParticles(
          color,
          particleOpacity,
          particlesNumber,
          shapeType,
          particleSize,
          linesColor,
          linesWidth,
          lineLinked,
          lineOpacity,
          linesDistance,
          moveSpeed,
          hoverEffect,
          hoverMode,
          clickEffect,
          clickMode
        );
      },
      initTsParticles: function (
        color,
        particleOpacity,
        particlesNumber,
        shapeType,
        particleSize,
        linesColor,
        linesWidth,
        lineLinked,
        lineOpacity,
        linesDistance,
        moveSpeed,
        hoverEffect,
        hoverMode,
        clickEffect,
        clickMode
      ) {
        tsParticles.load(this.id, {
            fps_limit: 60,
            interactivity: {
              detect_on: 'canvas',
              events: {
                onclick: {
                  enable: clickEffect,
                  mode: clickMode,
                },
                onhover: {
                  enable: hoverEffect,
                  mode: hoverMode,
                  parallax: {
                    enable: false,
                    force: 2,
                    smooth: 10,
                  },
                },
                resize: true,
              },
              modes: {
                bubble: {
                  distance: 200,
                  duration: 0.4,
                  opacity: 1,
                  size: 80,
                },
                grab: {
                  distance: 100,
                  line_linked: {
                    opacity: 1,
                  },
                },
                push: {
                  particles_nb: 4,
                },
                remove: {
                  particles_nb: 2,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: color,
              },
              line_linked: {
                enable: lineLinked,
                distance: linesDistance,
                color: linesColor,
                opacity: lineOpacity,
                width: linesWidth
              },
              move: {
                attract: {
                  enable: false,
                  rotateX: 3000,
                  rotateY: 3000,
                },
                bounce: false,
                direction: 'none',
                enable: true,
                out_mode: 'out',
                random: false,
                speed: moveSpeed,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  value_area: 800,
                },
                value: particlesNumber,
              },
              opacity: {
                anim: {
                  enable: false,
                  opacity_min: 0.1,
                  speed: 1,
                  sync: false,
                },
                random: false,
                value: particleOpacity,
              },
              shape: {
                character: {
                  fill: false,
                  font: "Verdana",
                  style: "",
                  value: "*",
                  weight: "400",
                },
                image: {
                  height: 100,
                  replace_color: true,
                  src: "",
                  width: 100,
                },
                polygon: {
                  nb_sides: 5,
                },
                stroke: {
                  color: "#ff0000",
                  width: 0,
                },
                type: shapeType,
              },
              size: {
                anim: {
                  enable: false,
                  size_min: 0.1,
                  speed: 40,
                  sync: false,
                },
                random: true,
                value: particleSize,
              },
            },
            retina_detect: false,
          }
        );
      }

    }
  }
  /* eslint-disable */
</script>
