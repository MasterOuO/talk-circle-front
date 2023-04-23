<template>
  <div>
    <!-- 把主頁面的 HTML 內容放在這裡 -->
    <MainSlider />
  </div>
</template>

<script>
import MainSlider from '@/components/MainSlider.vue';

export default {
  name: 'HomePage',
  components: {
    MainSlider,
  },
  
}
</script>