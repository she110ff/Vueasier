<template>
  <!-- <div id="app">
    <PageContainer/>
  </div>-->
  <component :is="layout">
    <div>test</div>
    <router-view :layout.sync="layout"/>
  </component>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import PageContainer from "@/components/PageContainer.vue";

export default {
  name: "app",
  components: {
    //HelloWorld,
    PageContainer
  },
  data() {
    return {
      layout: "div"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.scomponent {
  border: 2px solid #d00fe7;
}
</style>
