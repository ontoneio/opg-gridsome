<template>
<!-- 1ST LEVEL PANEL GROUP -->
    <div class="panel-group" role="tablist" v-uni-id="'accordion'" aria-multiselectable="true">

        <!-- 1ST LEVEL PANEL WRAPPER -->

      <div class="panel panel-default">

                  <!-- PANEL HEADING / 1ST LEVEL LABEL INFO -->
                <div  class="panel-heading" role="tab" v-uni-id="topId">
                  <h4 class="panel-title">
                    <a  role="button" 
                        data-toggle="collapse" 
                        v-uni-data-parent="'accordion'"
                        v-uni-href="`collapse`"
                        aria-expanded="false" 
                        v-uni-aria-controls="'collapse' "
                        class="list-group-item collapsed">
                      <slot name="topLevel"></slot>
                    </a>
                  </h4>
                </div>
                  <!-- END OF <ChapterSection/> PANEL HEADING -->
  
                  <!-- START PANEL BODY -->
                <div v-uni-id="'collapse'" class="panel-collapse collapse" role="tabpanel" v-uni-aria-labelledby="topId">
                  <div class="panel-body">                      
                     <!-- 1ST LEVEL PANEL WRAPPER -->
                     <SecondLevelMenu 
                        :id="topId" 
                        v-for="(subMenu, index) in topLevelMenu" 
                        :key="topId + index"
                        :secondLevelMenu="subMenu.thirdLevel">
                       <template #firstLevel>
                            {{ subMenu.subTitle }}
                       </template>
                     </SecondLevelMenu>
                      <!-- END <SecondLevelMenu/> LEVEL WRAPPER -->
                  </div>
  
                </div>
  
              </div>
            
            <!-- END OF 1ST LEVEL WRAPPER -->
          </div> 
        <!-- END OF PANEL GROUP -->
</template>

<script>
import SecondLevelMenu from './sidebar/SecondLevelMenu'
    export default {
        components: {
            SecondLevelMenu
        },
        props: {
            topId: String,  
            topLevelMenu: Array,
        },
        data() {
            return {
              count: 0,
            }
        },
        methods: {
           topSlugID(stringValue) {
            //  console.log(
            //  this.$parent.$options.methods.slugID(stringValue)
            //  )
        },

            
            
        },
        created() {
          this.topSlugID; 
        }
        
    }
</script>

<style>

</style>