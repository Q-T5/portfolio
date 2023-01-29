<script>
export default {
  name: "App",
  setup: function() {
    return {
      
    }
  }
}
</script>

<template>
  <div class="w-full h-screen">
    <nav class="h-[11%] shadow-md flex flex-col px-2 items-center">
      <h1 class="text-3xl font-dancing">Bikathi Martin</h1>
      <div class="w-[40%] flex justify-center space-x-4">
        <router-link :to="{ name: 'Home' }" class="main-routes">Home</router-link> &nbsp;
        <router-link :to="{ name: 'Projects' }" class="main-routes">Projects</router-link> &nbsp;
        <router-link :to="{ name: 'About' }" class="main-routes">About Me</router-link>
      </div>
    </nav>
    <div class="h-[89%]">
      <router-view></router-view>
    </div>
  </div>
</template>
