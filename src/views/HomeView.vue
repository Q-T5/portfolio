<!--
 Copyright 2023 Bikathi Martin
 
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 
     http://www.apache.org/licenses/LICENSE-2.0
 
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
-->

<script lang="js">
export default {
    name: "HomeView",
    setup() {
        
    }
}
</script>

<template>
    <div 
        class="h-full w-full flex flex-col items-center justify-center" 
        style="
            background-image: url('https://files.fm/thumb_show.php?i=mqvbkhcfw');
            background-position: center;
            filter: blur(0px);
            -webkit-filter: blur(0px);
            height: 100%;
            background-repeat: no-repeat;">
        <div class="absolute z-20 border-[1px] rounded-sm flex flex-col justify-around items-center backdrop-blur-md bg-black/50 h-[40%] p-4">
            <h1 class="text-4xl">I am Bikathi Martin</h1>
            <h2 class="text-3xl">Welcome to The Home of My Personal & Public Projects</h2>
            <button 
                class="btn rounded-full no-animation w-fit inline-flex"
                @click="$router.push({ name: 'Projects' })">See My Projects
                <i class="material-icons ml-1">arrow_forward</i>
            </button>
        </div>
        <div class="absolute bottom-1 space-x-3 flex items-baseline">
            <a href="https://www.github.com/q-t5" target="_blank">
                <i class="fab fa-github fa-lg"></i>
            </a>
            <a href="https://www.linkedin.com/in/bikathi-martin-665a42261/" target="_blank">
                <i class="fab fa-linkedin fa-lg"></i>
            </a>
        </div>
    </div>
</template>