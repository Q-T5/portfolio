<script>
import { reactive, ref } from 'vue';

export default {
  name: "App",
  setup: function () {
    const currentTheme = ref("cupcake");
    const drawerOpen = ref(false)

    function changeTheme() {
      let targetElement = document.getElementById("theme-switcher");
      let attributeValue = targetElement.getAttribute("data-theme");
      if (attributeValue == "cupcake") {
        currentTheme.value = "halloween"
        targetElement.setAttribute("data-theme", "halloween");
      } else if (attributeValue == "halloween") {
        currentTheme.value = "cupcake"
        targetElement.setAttribute("data-theme", "cupcake");
      }
    }

    return {
      currentTheme, changeTheme, drawerOpen
    }
  }
}
</script>

<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" v-model="drawerOpen" />
    <div class="drawer-content">
      <!-- Page content here -->
      <div class="navbar shadow-md">
        <div class="flex-none">
          <button class="btn btn-square btn-ghost" @click="drawerOpen = !drawerOpen">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              class="inline-block w-5 h-5 stroke-current">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div class="flex-1">
          <p class="text-xl">Bikathi Martin
            <sup>
              <font-awesome-icon 
                :icon="currentTheme == 'cupcake' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'" 
                @click="changeTheme"
                class="hover:cursor-pointer" />
            </sup>
          </p>
        </div>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <!-- Sidebar content here -->
        <li><a>Sidebar Item 1</a></li>
        <li><a>Sidebar Item 2</a></li>
      </ul>
    </div>
  </div>
</template>
