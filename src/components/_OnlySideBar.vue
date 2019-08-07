<template>
    <div class="container main">
        <div class="row row-offcanvas row-offcanvas-left">
            <Sidebar />
        </div>
    </div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'

export default {
    components: {
    Sidebar,
  }
    
}
</script>

<style>
 #backtop {
    position: fixed;
    left: auto;
    right: 20px;
    top: auto;
    bottom: 20px;
    outline: none;
    overflow: hidden;
    color: #fff;
    text-align: center;
    background-color: rgba(154, 205, 50, 0.84);
    height: 40px;
    width: 40px;
    line-height: 40px;
    font-size: 14px;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.3s linear;
    z-index: 999999;

    opacity: 1;
    /* display: none; */
}

#backtop:hover {
    background-color: #9ACD32;
}

#backtop.mcOut {
    opacity: 0;
}



</style>