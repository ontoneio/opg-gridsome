<template>
  <div>
    <Sidebar/>
  </div>  
</template>

<script>
import Sidebar from '../components/Sidebar'
export default {
  metaInfo: {
    title: 'OPG-Sidebar Static'
  },
  components:{
    Sidebar
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
</style>
