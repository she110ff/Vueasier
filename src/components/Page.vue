<template>
  <div @click="sendKind('page')">
    <custom-styles>{{styleObject.ddd.value}}</custom-styles>
    <div class="test" :style="styleObject.gridPage">
      <div :class="nameObject.d123" :style="styleObject.flexboxHeader">
        <div :style="styleObject.childObject">HOME</div>
        <div :style="styleObject.childObject2">SEARCH</div>
        <div :style="styleObject.childObject3 ">LOGOUT</div>
      </div>
      <div :class="none" :style="styleObject.menu">MENU</div>
      <Content :style="styleObject.content"/>
      <div :style="styleObject.footer">FOOTER</div>
    </div>
    <div @click="changeColor()">change</div>
    <div class="custom-single-row"></div>
  </div>
</template>

<script>
import Content from "@/components/Content.vue";
import CustomStyles from "@/components/CustomStyles.vue";
import { componentSelectorMixin } from "@/mixin/componentSelectorMixin";
export default {
  mixins: [componentSelectorMixin],
  components: {
    Content,
    CustomStyles
  },
  data() {
    return {
      none: "none",
      nameObject: {
        d123: "header"
      },
      styleObject: {
        childObject: {
          //   color: "#ff0000",
          //   "align-items": "center",
          //   padding: "0px 20px"
        },
        childObject2: {
          //   color: "#eeffee",
          //   "align-items": "center",
          //   padding: "0px 20px"
        },
        childObject3: {
          //   "margin-left": "auto"
        },
        gridPage: {
          display: "grid",
          "grid-template-columns": "repeat(12, 1fr)",
          "grid-template-rows": "40px minmax(200px, auto) 40px"
        },
        flexboxHeader: {
          display: "flex",
          "background-color": "#96ceb4",
          color: "#ffeead",
          "align-items": "center",
          padding: "0px 20px",
          "grid-column": "1 / -1"
        },
        menu: {
          "background-color": "#ff6f69",
          display: "flex",
          "align-items": "center",
          padding: "0px 20px",
          "grid-column": "1 / 2"
        },
        content: {
          "background-color": "#ffcc5c",
          display: "flex",
          "align-items": "center",
          padding: "0px 20px",
          "grid-column": "2 / -1",
          "flex-direction": "column"
          //https://gridbyexample.com/examples/code/example21.html
        },
        footer: {
          "background-color": "#88d8b0",
          display: "flex",
          "align-items": "center",
          padding: "0px 20px",
          "grid-column": "1 / -1"
        },
        ddd: {
          value: `
            .custom-single-row {
                display: flex;
                justify-content: space-between;
                background: #eee;
                margin-bottom: 1rem;
                padding: 1rem;
                border-radius: .5rem;
                overflow: hidden;
            }
            
            .header > div:nth-child(3) {
                margin-left: auto;
            }
        `
        }
      }
    };
  },
  methods: {
    changeColor() {
      this.styleObject.menu["background-color"] = "#ffffff";
      this.styleObject.menu["font-size"] = "50px";
      return;
    }
  }
};
</script>

<style>
html,
body {
  background-color: #ffeead;
  margin: 10px;
  font-size: 20px;
}
</style>