<template>
 <section id="iq-topten">
   <b-container fluid>
      <b-row>
         <b-col sm="12" class="overflow-hidden">
            <div class="iq-main-header d-flex align-items-center justify-content-between">
               <h4 class="main-title topten-title-sm">Top 10</h4>
            </div>
            <div class="topten-contens">
               <h4 class="main-title topten-title">Top 10</h4>
               <Slick id="top-ten-slider"  class="list-inline p-0 m-0  d-flex align-items-center" :option="sliderOption1">
                  <li  v-for="(item,index) in topTenSlider" :key="index">
                     <!-- <router-link :to="{ name: 'landing-page.movie-detail' }"> -->
                        <img :src="'http://localhost:8001/' + item" class="img-fluid w-100" alt="">
                        <!-- <img :src="item" class="img-fluid w-100" alt=""/> -->
                     <!-- </router-link> -->
                  </li>
               </Slick>
               <div class="vertical_s">
                  <Slick class="list-inline p-0 m-0  d-flex align-items-center" id="top-ten-slider-nav" :option="sliderOption2">
                     <li    v-for="(item,index1) in topTenNavSlider " :key="index1">
                        <div class="block-images position-relative">
                           <router-link :to="{ name: 'landing-page.movie-detail' }">
                              <img :src="'http://localhost:8001/' + item.file" class="img-fluid w-100" alt=""/>
                              <!-- <img :src="item.image" class="img-fluid w-100" alt=""> -->
                           </router-link>
                           <div class="block-description">
                              <h5>{{item.title}}</h5>
                              <div class="movie-time d-flex align-items-center my-2">
                                 <div class="badge badge-secondary p-1 mr-2">12</div>
                                 <span class="text-white">{{ item.duration ? item.duration : item.seasons + ' Seasons'}}</span>
                                 <!-- <span class="text-white">{{item.time}}</span> -->
                              </div>
                              <div class="hover-buttons">
                                 <router-link :to="item.episodes ? { name: 'landing-page.show-single', params: {sId: item.id}} : { name: 'landing-page.movie-detail', params: {mId: item.id}}" class="btn btn-hover" tabindex="0">
                                    <i class="fa fa-play mr-1" aria-hidden="true"></i> Play Now
                                 </router-link>
                              </div>
                           </div>
                        </div>
                     </li>
                  </Slick>
               </div>
            </div>
         </b-col>
      </b-row>
   </b-container>
</section>
</template>
<script>

import { mapGetters } from 'vuex'

export default {
  name: 'Top',
  components: {
  },
  mounted () {
  },
  data () {
    return {
      // topTenSlider: [
      //   require('../../../../assets/images/frontend/top-10/01.jpg'),
      //   require('../../../../assets/images/frontend/top-10/02.jpg'),
      //   require('../../../../assets/images/frontend/top-10/03.jpg'),
      //   require('../../../../assets/images/frontend/top-10/04.jpg'),
      //   require('../../../../assets/images/frontend/top-10/05.jpg'),
      //   require('../../../../assets/images/frontend/top-10/06.jpg')
      // ],
      // topTenNavSlider: [
      //   { image: require('../../../../assets/images/frontend/top-10/01.jpg'), title: 'The Illusion', age: '10+', time: '3h 15m' },
      //   { image: require('../../../../assets/images/frontend/top-10/02.jpg'), title: 'Burning', age: '13+', time: '3h 15m' },
      //   { image: require('../../../../assets/images/frontend/top-10/03.jpg'), title: 'Hubby Kubby', age: '15+', time: '2h 15m' },
      //   { image: require('../../../../assets/images/frontend/top-10/04.jpg'), title: 'Open Dead Shot', age: '18+', time: '3h 15m' },
      //   { image: require('../../../../assets/images/frontend/top-10/05.jpg'), title: 'Jumbo Queen', age: '6+', time: '4h 15m' },
      //   { image: require('../../../../assets/images/frontend/top-10/06.jpg'), title: 'The Lost Journey', age: '10+', time: '3h 15m' }
      // ],
      sliderOption1: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#top-ten-slider-nav',
        responsive: [
          {
            breakpoint: 992,
            settings: {
              asNavFor: false,
              arrows: true,
              nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
              prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>'
            }
          }
        ]
      },
      sliderOption2: {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '#top-ten-slider',
        dots: false,
        arrows: true,
        infinite: true,
        vertical: true,
        verticalSwiping: true,
        centerMode: false,
        nextArrow: '<button class="NextArrow"><i class="ri-arrow-down-s-line"></i></button>',
        prevArrow: '<button class="PreArrow"><i class="ri-arrow-up-s-line"></i></button>',
        focusOnSelect: true,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 600,
            settings: {
              asNavFor: false
            }
          }
        ]
      }
    }
  },
   computed: {
    ...mapGetters({
      movieList: 'Movie/movieState',
      showList: 'Show/showState',
      cmapList: 'ContentMap/cmapState'
    }),
    topTenSlider () {
      let ttList = []
      for (var index in this.topTenNavSlider)
      {
         ttList.push(this.topTenNavSlider[index].file)
      }
      return ttList
    },
    topTenNavSlider () {
      let cmapItem = this.cmapList.topten
      let ttNavList = []

      let suitFor = function (item) {
         return item.id == this;
      }
      
      for (var index in cmapItem)
      {
         let cType = cmapItem[index].content_type
         let cId = cmapItem[index].content_id
         var favoItem

         if (cType == 'movie')
         {
            if (favoItem = this.movieList.find(suitFor, cId))
               ttNavList.push(favoItem)
         }
         else if (cType == 'show')
         {
            if (favoItem = this.showList.find(suitFor, cId))
               ttNavList.push(favoItem)
         }
      }
      return ttNavList
    }
  }
}
</script>
