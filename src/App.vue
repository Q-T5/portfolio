<script>
import { ref } from 'vue';

export default {
  name: "App",
  setup: function () {
    const currentTheme = ref("cupcake");
    const drawerOpen = ref(false)
    const mainRoutes = ref([
      { to: "Home", name: "Home" },
      { to: "Projects", name: "Projects" },
      { to: "About", name: "About" },
      { to: "Contact", name: "Contact" }
    ])

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
      currentTheme, changeTheme, drawerOpen, mainRoutes
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
              <font-awesome-icon :icon="currentTheme == 'cupcake' ? 'fa-solid fa-sun' : 'fa-solid fa-moon'"
                @click="changeTheme" class="hover:cursor-pointer" />
            </sup>
          </p>
        </div>
      </div>
      <div>
        <router-view></router-view>
      </div>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="p-1 w-[21rem] bg-base-100 space-y-2 flex flex-col pt-4 justify-between">
        <!-- Sidebar content here -->
        <div v-for="(route, index) in mainRoutes" :key="index" class="h-fit">
          <router-link 
            :to="{ name: route.to }" 
            class="text-lg p-2 block">{{ route.name }}
          </router-link>
          <div 
            v-show="route.to == 'Projects'"
            class="flex justify-center border-[1px] rounded-sm h-96 p-2 my-3">
            <input 
              type="text" 
              id="projects-search" 
              placeholder="Search My Projects..." />
          </div>
        </div>
        <div>
          
        </div>
      </ul>
    </div>
  </div>
</template>
