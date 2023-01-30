<script>
import { reactive, ref } from 'vue';

export default {
  name: "App",
  setup: function() {
    const themeIcons = reactive({
      dark: "far fa-moon",
      light: "far fa-sun"
    });

    const currentTheme = ref("dark");

    function changeTheme() {
      const targetElement = document.getElementById("theme-switcher");
      const attributeValue = targetElement.getAttribute("data-theme");
      if(attributeValue === "dark") {
        currentTheme.value = "light"
        targetElement.setAttribute("data-theme", "garden");
      } else if(attributeValue === "garden") {
        currentTheme.value = "dark"
        targetElement.setAttribute("data-theme", "dark");
      }
    }

    return {
      themeIcons, currentTheme, changeTheme
    }
  }
}
</script>

<template>
  <div class="w-full h-screen">
    <nav class="h-[11%] shadow-md flex flex-col px-2 items-center">
      <h1 class="text-3xl font-dancing">
        Bikathi Martin
        <sup class="text-sm">
          <button
            @click="changeTheme">
            <i :class="currentTheme === 'dark' ? themeIcons.light : themeIcons.dark"></i>
          </button>
        </sup>
      </h1>
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
