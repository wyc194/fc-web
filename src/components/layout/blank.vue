<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" enter-active-class="animated fadeIn" mode="out-in">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </transition>
  </router-view>
</template>

<script>
export default {
  name: 'Blank'
}
</script>
