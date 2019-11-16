// export const sqrt = Math.sqrt;
// export function square(x) {
//     return x * x;
// }
// export function diag(x, y) {
//     return sqrt(square(x) + square(y));
// }

export const componentSelectorMixin = {
  inject: ["selectedComponentType"],

  data() {
    return {
      isHovering: false
    };
  },
  methods: {
    sendKind(kind) {
      console.log("sendKind");
      this.selectedComponentType(kind);
    },
    showBorder(ev) {
      console.log("ev :", ev.target);
    }
  }
};
