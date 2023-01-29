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
import { ref } from 'vue'
import ContactComp from "/src/components/ContactComp.vue"
import EducationComp from "/src/components/EducationComp.vue"
import LikesAndHobbysComp from "/src/components/LikesHobbysComp.vue"
import WhoAmIComp from "/src/components/WhoAmIComp.vue"

export default {
    name: "AboutView",
    components: {
        ContactComp, EducationComp, LikesAndHobbysComp, WhoAmIComp
    },
    setup() {
        const comps = ref([
            { name: "who-am-i-comp", text: "Who Am I" },
            { name: "education-comp", text: "Education" },
            { name: "likes-and-hobbys-comp", text: "Likes & Hobbys" },
            { name: "contact-comp", text: "Contact Me" }
        ]);

        const activeComp = ref("who-am-i-comp");

        return {
            comps, activeComp
        }
    }
}
</script>

<template>
    <div class="h-full flex">
        <div class="w-[40%] h-full shadow-md">
            <h1>Hello World</h1>
        </div>
        <div class="w-[60%]">
            <div class="h-[80%]">
                <keep-alive>
                    <component :is="activeComp" />
                </keep-alive>
            </div>
            <div class="w-full h-fit flex justify-center">
                <hr class="opacity-50 w-[85%]" />
            </div>
            <div class="h-fit flex justify-center space-x-2 mt-2">
                <button
                    v-for="(comp, index) in comps"
                    :key="index"
                    @click="activeComp = comp.name"
                    class="about-routes"
                    :class="activeComp === comp.name ? 'active-comp' : ''">{{ comp.text }}</button>
            </div>
        </div>
    </div>
</template>