<template>
  <div class="v-header" :class="bgColor">
    <div class="v-header__row">
      <div class="left">
        <template v-if="isBack">
          <button type="button" @click="goBackCheck">
            <svg width="11" height="18" viewBox="0 0 11 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 1L2 9L10 17" stroke="#333333" stroke-width="2"/>
            </svg>
          </button>
        </template>
        <slot v-else name="left" />
      </div>
      <div class="center">
        <template v-if="title || subTitle">
          <div v-if="title" :class="subTitle ? 'txt-cation1' : 'txt-subtitle1'">{{ title }}</div>
          <div v-if="subTitle" class="txt-overline2">{{ subTitle }}</div>
        </template>
        <template v-else>
          <slot name="center" />
        </template>
      </div>
      <div class="right">
        <slot name="right" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'V-Header',

  data: () => ({
    isOpenedInApp: false
  }),

  props: {
    /**
     * center 영역에 들어가는 제목과 부제목
     */
    title: {
      type: String,
      default: "",
    },
    subTitle: {
      type: String,
      default: "",
    },

    /**
     * 백그라운드 배경 색상
     */
    bgColor: {
      type: String,
      default: "bg-color-white"
    },

    /**
     * left 영역에 들어가는 뒤로가기 버튼 유무
     */
    isBack: {
      type: Boolean,
      default: true,
    },

    iconBackColor: {
      type: String,
      default: "#333"
    },

    /**
     * 뒤로가기 버튼 클릭시 콜백함수가 필요한 경우 true
     */
    isCall: {
      type: Boolean,
      default: false,
    },

    /**
     * 백버튼 클릭시 히스토리를 체크할 경우 true
     */
    isHistory: {
      type: Boolean,
      default: false,
    },
  },

  mounted() {
    try {
      if (this.isBack && window.ReactNativeWebView) {
        this.isOpenedInApp = true // 앱으로 접속한 경우에만 백버튼 노출

        // ios
        window.addEventListener("message", this.messageEventBack);
        // and
        document.addEventListener("message", this.messageEventBack);

        this.$deviceBack(); // 앱에서 디바이스 back 이벤트 받기
      }
    } catch (error) {
      console.error(error);
    }
  },

  beforeDestroy() {
    if (this.isBack && window.ReactNativeWebView) {
      // ios
      window.removeEventListener("message", this.messageEventBack);
      // and
      document.removeEventListener("message", this.messageEventBack);
    }
  },

  methods: {
    /**
     * 콜백 함수 실행여부 체크
     */
    goBackCheck() {
      if (this.isCall) {
        this.$emit("fn_callBack");
      } else {
        this.goBack();
      }
    },

    /**
     * 뒤로가기 처리
     */
    goBack() {
      if (this.isHistory && history.length > 1) {
        history.back();
      } else {
        this.$closeWebView();
      }
    },

    /**
     * 디바이스 back 버튼 클릭 이벤트
     * @param e
     */
    messageEventBack(e) {
      if (e.data) {
        const receive = JSON.parse(e.data);

        if (receive.type === "pressBackBtn") {
          this.goBackCheck()

        } else {
          console.error(`Receive unknown mesage ::: ${e}`);
        }
      }
    }

  },
};
</script>

<style lang="scss" scoped>
.v-header {
  z-index: 100;
  width: 100%;
  //padding: 2px 0 8px 0;

  &__row {
    display: flex;
    align-items: center;
    height: 42px;
    padding: 0 24px;

    div {
      flex: 1 1 0;
    }

    .left {
      text-align: left;
    }
    .center {
      flex: 0 1 auto;
      text-align: center;
    }
    .right {
      text-align: right;
    }
  }

  img {
    vertical-align: middle;
  }
}

</style>
