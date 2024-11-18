<template>
  <div class="bg-white bg-[url(~/assets/imgs/container@1x.png)] bg-no-repeat bg-center bg-cover min-h-screen">
    <div class="relative isolate px-6 lg:px-8 flex flex-col items-center justify-center h-screen space-y-10">
      <div class="mx-auto max-w-2xl">
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          <!-- <div
            class="relative rounded-full px-3 py-1 text-sm/6 text-gray-300 ring-1 ring-gray-100/10 hover:ring-gray-100/20">
            ——<a href="#" class="font-semibold text-indigo-400"><span class="absolute inset-0" aria-hidden="true" />
              更多相关<span aria-hidden="true">&rarr;</span></a>
          </div> -->
        </div>
        <div class="text-center">
          <h1 class="text-balance text-5xl font-semibold tracking-tight text-gray-100 sm:text-7xl">让情感在故事中绽放</h1>
          <h4></h4>
          <p class="mt-8 text-pretty text-lg leading-8 font-medium text-gray-300">
            星光恋语社是一款专为女性用户打造的互动故事与情感陪伴平台。在这里，你可以沉浸在浪漫的情节中，与不同角色展开独一无二的情感互动。
            从甜美恋曲到心动冒险，每一个故事都由顶级编剧精心打造，结合你的选择，创造无限可能.</p>
          <!-- <div class="mt-10 flex items-center justify-center gap-x-6">
            <a href="#"
              class="rounded-md bg-indigo-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400">立即加入饭圈</a>
            <a href="#" class="text-sm/6 font-semibold text-gray-100">了解更多<span aria-hidden="true">→</span></a>
          </div> -->
        </div>
      </div>

      <div class="mx-auto lg:max-w-4xl">
        <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div v-for="feature in features" :key="feature.name" class="relative pl-16">
            <dt class="text-base/7 font-semibold text-gray-100">
              <div class="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg ">
                <bdi>{{ feature.icon }}</bdi>
              </div>
              {{ feature.name }}
            </dt>
            <dd class="mt-2 text-base/7 text-gray-300">{{ feature.desc }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHomePage } from './index.hook'

useHead({
  bodyAttrs: {
    class: 'scrollbar'
  }
})

const { features } = useHomePage()
</script>
