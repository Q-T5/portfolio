// Copyright 2023 Bikathi Martin
// 
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
// 
//     http://www.apache.org/licenses/LICENSE-2.0
// 
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { createRouter, createWebHistory } from "vue-router"
// import HomeView from '/src/views/HomeView.vue'
// import ProjectsView from '/src/views/ProjectsView.vue'
// import AboutView from '/src/views/AboutView.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        /*
        {
            path: "/portfolio/",
            component: HomeView,
            name: "Home"
        },
        {
            path: "/projects/",
            component: ProjectsView,
            name: "Projects"
        },
        {
            path: "/about/",
            component: AboutView,
            name: "About"
        }
        */
    ]
});

export default router;