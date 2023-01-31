<script setup lang="ts"></script>

<template>
   <router-view v-slot="{ Component }">
      <KeepAlive>
         <component :is="Component"></component>
      </KeepAlive>
   </router-view>
</template>
