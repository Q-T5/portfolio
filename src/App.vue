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
    <nav class="h-[10%] shadow-md flex flex-col px-2 items-center">
      <h1 class="text-2xl">Bikathi Martin</h1>
      <div>
        <router-link :to="{ name: 'Home' }">Home</router-link>
        <router-link :to="{ name: 'Projects' }">Projects</router-link>
        <router-link :to="{ name: 'About' }">About Me</router-link>
      </div>
    </nav>
    <div class="h-[90%]">
      <router-view></router-view>
    </div>
  </div>
</template>
