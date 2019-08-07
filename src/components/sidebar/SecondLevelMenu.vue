<template>
      <div class="panel-group" v-uni-id="'1-acc-panel'">
        <div class="panel panel-default">
                  <!-- PANEL HEADING / 2ND LEVEL LABEL INFO -->
                <div  class="panel-heading" role="tab" v-uni-id="'2-accordion'">
                  <h5 class="panel-title">
                    <a 
                      role="button" 
                      data-toggle="collapse" 
                      v-uni-data-parent="'1-acc-panel'" 
                      v-uni-href="'2-acc-collapse'"
                      aria-expanded="false" 
                      v-uni-aria-controls="'2-acc-collapse'" 
                      class="list-group-item collapsed">
                      <slot name="firstLevel"></slot>
                    </a>
                  </h5>
                </div>
                  <!-- END OF 2ND LEVEL PANEL HEADING -->
  
                  <!-- START PANEL BODY -->
                <div 
                  v-uni-id="'2-acc-collapse'" 
                  class="panel-collapse collapse" 
                  role="tabpanel"
                  v-uni-aria-labelledby="'2-accordion'">
                  <div class="panel-body">
                    
  
                     <!-- 2ND LEVEL PANEL WRAPPER -->
                     <ul>
                        <li 
                          v-for="(third, index) in secondLevelMenu" 
                          :key="index">
                                <a :href="`#${parentSlugID(third.linkText)}`">{{ third.linkText }}</a>
                        </li>
                     </ul>
                      <!-- END SECOND LEVEL WRAPPER -->
                    
  
                  </div>
  
                </div>
  
              </div>
            </div>
</template>

<script>
    export default {
      props:{
        secondLevelMenu: Array
      },
      methods: {
        parentSlugID(value) {
          console.log(
          this.$parent.$options.methods.topSlugID(value)
          )
        }
      },
      mounted() {
        this.parentSlugID;
      }

    }
</script>

<style>

</style>