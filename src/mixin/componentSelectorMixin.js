// export const sqrt = Math.sqrt;
// export function square(x) {
//     return x * x;
// }
// export function diag(x, y) {
//     return sqrt(square(x) + square(y));
// }

export const componentSelectorMixin = {
  inject: ["selectedComponentType"],
  methods: {
    sendKind(kind) {
      console.log("sendKind");
      this.selectedComponentType(kind);
    }
  }
};
