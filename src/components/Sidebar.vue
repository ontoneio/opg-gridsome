<template>
   <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <!-- PANEL LIST GROUP -->
        <div class="list-group">
          <p id="ch-label" class="title">CHAPTERS</p>
          <p CLASS="linkTitle">PROGRAMS</p>

          <!-- ATTACHING menuList DATA HERE -->
          <TopLevelMenu v-for="topLevel in sidebarSections" 
            :key="slugID(topLevel.topLevelText)"
            :topId="slugID(topLevel.topLevelText)" 
            :topLevelMenu="topLevel.secondLevel">

            <template #topLevel>{{ topLevel.topLevelText }}</template>
          </TopLevelMenu>
            
          
        </div>
   </div>
</template>

<script>
import TopLevelMenu from './TopLevelMenu'
export default {
    name: 'Sidebar',
    components: {
      TopLevelMenu
    },
    data() {
      return {
        
      sidebarSections: [
          // CHAPTER OBJECT
          {
            topLevelText: '1. Emergency Response',
            secondLevel: [
              {
                subTitle: 'General Information',
                thirdLevel: [
                  {
                    linkText: 'Chapter Overview',
                    link: "#"
                    },
                  {
                    linkText: 'Another Road to Safety(ARS)',
                    link: "#"
                    },
                  {
                    linkText: 'Assignment of Referrals',
                    link: "#"
                    },
                  {
                    linkText: 'Authorities & References',
                    link: "#"
                    },
                  ]
              },
              {
                subTitle: 'Intake and Screening',
                thirdLevel: [
                  {
                    linkText: 'Chapter Overview' ,
                    link: "#"
                    },
                  {
                    linkText: 'Another Road to Safety(ARS)' ,
                    link: "#"
                    },
                  {
                    linkText: 'Assignment of Referrals',
                    link: "#"
                    },
                  {
                    linkText: 'Authorities & References',
                    link: "#"
                    },
                ]
              },
            ]
          }, // END OF CHAPTER OBJECT

          // CHAPTER OBJECT
          {
            topLevelText: '2. Dependency Investigations',
            secondLevel: [
              {
                subTitle: 'General Information',
                thirdLevel: [
                  {
                    linkText:'Chapter Overview',
                    link: '#'
                  },
                  {
                    linkText:'DI Program',
                    link: '#'
                  },
                  {
                    linkText:'TDM Procedures & Checklist',
                    link: '#'
                  },
                  {
                    linkText:'SDM Procedures',
                    link: '#'
                  },
                  ]
              },
              {
                subTitle: 'Case Transfer Guidelines',
                thirdLevel: [
                {
                  linkText:'To FM',
                  link: '#'
                },
                {
                  linkText:'To PYC',
                  link: '#'
                },
                {
                  linkText:'To FR',
                  link: '#'
                },
                {
                  linkText:'To Adoptions',
                  link: '#'
                },
                {
                  linkText:'To ILSP',
                  link: '#'
                },
                ]
              },
            ]
          }, // END OF CHAPTER OBJECT

          // CHAPTER OBJECT
          {
            topLevelText: '3. Family Maintenance',
            secondLevel: [
              {
                subTitle: 'General Information',
                thirdLevel: [
                {
                  linkText:'Chapter Overview' ,
                  link: '#'
                },
                {
                  linkText:'FM Program Overview',
                  link: '#'
                }, 
                {
                  linkText:'Informal FM Program',
                  link: '#'
                },
                {
                  linkText:'Expectations and Responsibilities',
                  link: '#'
                },
                ]
              },
              {
                subTitle: 'CASE TRANSFER GUIDLINES',
                thirdLevel: [
                {
                  linkText: 'To ILSP(FR)',
                  link: '#'
                  },
                {
                  linkText: 'To DI',
                  link: '#'
                  },
                ]
              },
              {
                subTitle: 'CASE MANAGEMENT',
                thirdLevel: [
                {
                  linkText: 'Initial Case Planning and Activities',
                  link: '#'
                  },
                {
                  linkText: 'Case Management',
                  link: '#'
                  },
                {
                  linkText: 'Home Calls',
                  link: '#'
                  }, 
                {
                  linkText: 'Risk Assessment',
                  link: '#'
                  },
                ]
              },
            ]
          }, // END OF CHAPTER OBJECT
        ],
      };
        
    },
    methods: {
      slugID(stringValue) {
                let prefix = /(\d)\W+/g;
                let allSpecialChars = /[^a-zA-Z ]/g;
                let word = stringValue.toLowerCase()
                const noPrefix = word.replace(prefix, '')
                const noSpecials = noPrefix.replace(allSpecialChars, ' ')
                const slug = noPrefix.replace(/\s/g, '-')
                return slug
        },
      setAnchor() {
              let linkItems = document.querySelectorAll(`[role='tab'] > .panel-title > a`);
              [...linkItems].forEach( link => {
                  let anchorLink = link.attributes.href.value;
                  return link.attributes.href.value = `#${anchorLink}`
              });
          },
    },
    created() {
      this.firstLevelId = 0;
      this.slugID;
    },
    mounted() {
      this.setAnchor()
    }

}
</script>

<style>
@media only screen and (max-width:768px) {
   #sidebar {
     margin-top: 1rem;
   }
   #ch-label {
     font-size: 16px !important;
     text-align: center;
   }
  }

</style>