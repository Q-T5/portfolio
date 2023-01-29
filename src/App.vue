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
    <nav class="h-[12%] shadow-md flex flex-col px-2 items-center">
      <h1 class="text-4xl font-dancing">Bikathi Martin</h1>
      <div class="w-[40%] flex justify-center space-x-4  text-xl">
        <router-link :to="{ name: 'Home' }">Home</router-link> &nbsp;
        <router-link :to="{ name: 'Projects' }">Projects</router-link> &nbsp;
        <router-link :to="{ name: 'About' }">About Me</router-link>
      </div>
    </nav>
    <div class="h-[88%]">
      <router-view></router-view>
    </div>
  </div>
</template>
