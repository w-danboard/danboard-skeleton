<template>
  <div class="app-header">
    <!-- logo -->
    <div class="logo-wrap">
      <img class="logo-icon" src="@/assets/images/logo.png" width="32">
      <span class="logo-text">{{ $config.title }}</span>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.app-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    height: 56px;
    line-height: 56px;
    background: white;;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    z-index: 999;
}

.logo-wrap {
    width: 230px;
    background: #2f323d;
    padding-left: 1px;
}

.logo-icon {
  display: inline-block;
  vertical-align: middle;
  margin: 0 var(--margin-mini);
}

.logo-text {
  display: inline-block;
  vertical-align: middle;
  color: white;
  font-size: 15px;
  font-weight: 700;
}
</style>