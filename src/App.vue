<template>
  <div>
    <site-header></site-header>
  </div>
  <router-view/>
</template>

<script>
import SiteHeader from '@/components/SiteHeader.vue';

export default {
  name: 'HomePage',
  components: {
    SiteHeader,
  },
  
}
</script>

<style>
@import '@/assets/css/bootstrap/bootstrap.css';
@import '@/assets/css/animate.css';
@import '@/assets/css/bootstrap.css';
@import '@/assets/css/font-awesome.css';
@import '@/assets/css/templatemo-misc.css';
@import '@/assets/css/templatemo-style.css';

.fade-enter,
.fade-leave-to {
  opacity: 1;
  transition: opacity 0.5s;
}
.fade-enter-to,
.fade-leave {
  opacity: 0;
}

</style>
