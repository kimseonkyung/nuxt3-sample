<template>
  <button ref="m-button" class="m-button" :class="[`m-button__${size}`, `m-button__${type}`]" :style="`background: ${buttonStyle.bgColor}; border-color: ${buttonStyle.borderColor}; border-radius: ${radius}px;`" :disabled="disabled">
    <div class="button-body">
<!--      <div class="m-button__icon" v-if="icon">-->
<!--        <m-icon-base-->
<!--          :stroke="iconStrokeColor"-->
<!--          :icon-name="icon"-->
<!--        >-->
<!--          <common-icon-thumbs-up v-if="icon === 'thumbsUp'" />-->
<!--          <common-icon-thumbs-down v-else-if="icon === 'thumbsDown'" />-->
<!--        </m-icon-base>-->
<!--      </div>-->
      <div class="m-button__content" :class="fontSize" :style="`color: ${buttonStyle.color};`">
        <slot />
      </div>
    </div>
  </button>
</template>

<script>
export default {
  name: 'Button',

  data: () => ({
    isHover: false
  }),

  props: {
    size: {
      type: String,
      default: "lg",
    },
    type: {
      type: String,
      default: "primary",
    },
    disabled: {
      type: Boolean,
      default: false
    },
    font: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    radius: {
      type: String,
      default: "8"
    }
  },

  computed: {
    fontSize() {
      if(this.font) {
        return this.font
      } else {
        if(this.size === 'sm-2') {
          return 'txt-body2'
        } else if(this.size === 'sm') {
          return 'txt-button3'
        } else if(this.size === 'ssm') {
          return 'txt-button3 txt-weight-500'
        } else if(this.size === 'md') {
          return 'txt-button2'
        } else {
          return 'txt-button1'
        }
      }
    },

    color() {
      return this.$store.state.colors.styles
    },

    /**
     *  hover color change : stroke (icon)
     */
    iconStrokeColor() {
      if(this.icon === 'thumbsUp' || this.icon === 'thumbsDown') {
        if (this.type === "normal__darken1") {
          return this.isHover ? this.color.colorGray500 : this.color.colorWhite
        } else if (this.type === "outLine") {
          return this.isHover ? this.color.colorGray800 : this.color.colorGray900
        }
      } else {
        return 'none'
      }
    },

    buttonStyle() {
      const $this = this
      let color = ''
      let bgColor = ''
      let borderColor = ''

      if($this.type === 'primary') {
        // 기본 컬러
        color = $this.color.colorWhite
        bgColor = $this.color.colorRed600

        if($this.disabled) {
          bgColor = $this.color.colorRed200
        } else if($this.isHover) {
          color = $this.color.colorRed400
          bgColor = $this.color.colorRed600
        }

      } else if ($this.type === 'normal__light1') {
        color = $this.color.colorGray900
        // bgColor = $this.color.colorWhite

        if($this.disabled) {
          color = $this.color.colorGray400
        } else if($this.isHover) {
          bgColor = $this.color.colorGray50
        }

      } else if ($this.type === 'normal__light2') {
        color = $this.color.colorGray900
        bgColor = $this.color.colorGray100

        if($this.disabled) {
          color = $this.color.colorWhite
          bgColor = $this.color.colorGray200
        } else if($this.isHover) {
          color = $this.color.colorGray400
        }

      } else if ($this.type === 'normal__light3') {
        color = $this.color.colorRed600
        bgColor = $this.color.colorRed100

        if($this.disabled) {
          color = $this.color.colorWhite
          bgColor = $this.color.colorGray200
        } else if($this.isHover) {
          bgColor = $this.color.colorRed200
        }

      } else if ($this.type === 'normal__light4') {
        color = $this.color.colorGray500
        bgColor = $this.color.colorGray100

        if ($this.isHover) {
          color = $this.color.colorGray500
          bgColor = $this.color.colorGray100
        }

      } else if ($this.type === 'normal__darken1') {
        color = $this.color.colorWhite
        bgColor = $this.color.colorGray950

        if($this.disabled) {
          color = $this.color.colorWhite
          bgColor = $this.color.colorGray200
        } else if($this.isHover) {
          color = $this.color.colorGray500
          bgColor = $this.color.colorGray900
        }

      } else if ($this.type === 'normal__darken2') {
        color = $this.color.colorGray150
        bgColor = $this.color.colorGray800

        if ($this.isHover) {
          color = $this.color.colorGray150
          bgColor = $this.color.colorGray800
        }

      } else if ($this.type === 'brown') {
        color = $this.color.colorWhite
        bgColor = '#603B20'

        if($this.disabled) {
          color = $this.color.colorWhite
          bgColor = $this.color.colorGray200
        }

      } else if ($this.type === 'purple') {
        color = $this.color.colorWhite
        bgColor = '#6D3DCD'

        if($this.disabled) {
          color = $this.color.colorWhite
          bgColor = $this.color.colorGray200
        }

      } else if ($this.type === 'green') {
        color = $this.color.colorWhite
        bgColor = '#00A99D'

        if($this.disabled) {
          color = $this.color.colorWhite
          bgColor = $this.color.colorGray200
        }

      } else if($this.type === 'outLine') {
        color = $this.color.colorGray900
        borderColor = $this.color.colorGray150

        if($this.disabled) {
          color = $this.color.colorGray400
          bgColor = $this.color.colorWhite
        } else if($this.isHover) {
          color = $this.color.colorGray800
          borderColor = $this.color.colorWhite
        }

      } else if($this.type === 'outLine2') {
        color = $this.color.colorGray900
        bgColor = $this.color.colorWhite
        borderColor = $this.color.colorGray400

        if($this.disabled) {
          color = $this.color.colorGray400
          bgColor = $this.color.colorWhite
        } else if($this.isHover) {
          color = $this.color.colorGray900
          bgColor = $this.color.colorWhite
          borderColor = $this.color.colorGray400
        }

      } else if ($this.type === 'outLine3') {
        color = $this.color.colorGray150
        bgColor = $this.color.colorGray800
        borderColor = $this.color.colorGray800

        if ($this.isHover) {
          color = $this.color.colorGray150
          bgColor = $this.color.colorGray800
          borderColor = $this.color.colorGray800
        }

      }

      return {
        'bgColor': bgColor,
        'color': color,
        'borderColor': borderColor,
      }
    },

  },

  mounted() {
    if(!this.disabled) {
      const $button = this.$refs["m-button"]

      // mobile touch event add
      $button.addEventListener("touchstart", () => {this.isHover = true}, false)
      $button.addEventListener("touchend", () => {this.isHover = false}, false)
    }
  },

  beforeDestroy() {
    if(!this.disabled) {
      const $button = this.$refs["m-button"]

      // mobile touch event remove
      $button.removeEventListener("touchstart", () => {}, false)
      $button.removeEventListener("touchend", () => {}, false)
    }
  },

};
</script>

<style lang="scss" scoped>
.m-button {
  width: 100%;
  border: none;
  outline: none;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;

  .button-body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-content: center;
    white-space: nowrap;
  }

  &__icon {
    display: flex;
    align-self: center;
    padding-right: 4px;
  }

  &__content {
    display: flex;
    align-self: center;
  }

  &__outLine, &__outLine2, &__outLine3 {
    border: 1px solid;
  }

  &__ssm {
    height: 28px;
    padding: 8px 12px;
  }

  &__sm {
    height: 32px;
  }

  &__sm-2 {
    height: 36px;
    padding: 8px 12px;
  }

  &__md {
    height: 40px;
  }

  &__lg {
    height: 48px;
  }

}
</style>
