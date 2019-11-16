
<template>
  <div
    @click.stop="sendKind('content')"
    @mouseover.stop="isHovering = true"
    @mouseout="isHovering = false"
    :class="{'s-component': isHovering}"
    :style="styleObject.gridPage"
  >
    <div v-for="(row, index) in rows" :key="(row.name + index)" :style="styleObject.flexRow">
      <div>{{row.name}}</div>
    </div>
    <div @click="addRow">addRow</div>
  </div>
</template>

<script>
import { componentSelectorMixin } from "@/mixin/componentSelectorMixin";
export default {
  mixins: [componentSelectorMixin],
  data() {
    return {
      rows: [{ name: "content - 1" }, { name: "content - 2" }],
      styleObject: {
        gridPage: {
          display: "grid",
          "grid-template-columns": "repeat(12, 1fr)",
          "grid-template-rows": "40px 200px 40px"
        },
        flexRow: {
          display: "flex",
          "flex-direction": "column"
        }
      }
    };
  },

  methods: {
    addRow() {
      this.rows.push({ name: "content" + (this.rows.length + 1) });
    }
  }
};
</script>