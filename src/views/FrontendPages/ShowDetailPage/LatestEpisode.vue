<template>
    <section id="iq-favorites">
        <b-container fluid >
            <div class="block-space">
                <b-row>
                    <b-col sm="12" class="overflow-hidden">
                        <div class="iq-main-header d-flex align-items-center justify-content-between">
                        <h4 class="main-title">Latest Episodes</h4>
                       <router-link :to="{ name: 'landing-page.show-single', params: {sId: show.id}}" class="text-primary">View all</router-link>
                        </div>
                    </b-col>
                </b-row>
                <div class="row">
                    <b-col md="6" class="col-1-5 iq-mb-30" v-for="(item,index) in show.episodes" :key="index">
                        <div class="epi-box">
                            <div class="epi-img position-relative">
                                <img :src="'http://localhost:8001/' + item.file" class="img-fluid img-zoom" alt="">
                                <div class="episode-number">{{item.episode}}</div>
                                <div class="episode-play-info">
                                    <div class="episode-play">
                                        <router-link :to="{ name: 'landing-page.category-detail', params: {eId: item.id}}">
                                        <i class="ri-play-fill"></i>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                            <div class="epi-desc p-3">
                                <div class="d-flex align-items-center justify-content-between">
                                    <span class="text-white">{{item.date}}</span>
                                    <span class="text-primary">{{item.duration}}</span>
                                </div>
                                <router-link :to="{ name: 'landing-page.category-detail' }">
                                    <h6 class="epi-name text-white mb-0">{{item.name}}</h6>
                                </router-link>
                            </div>
                        </div>
                    </b-col>
                </div>
            </div>
        </b-container>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'LatestEpisode',
  props: ['eId'],
  components: {
  },
  mounted () {
  },
  data () {
    return {
      latestData: [
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '1', date: '11 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '2', date: '12 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '3', date: '14 Aug 20', time: '20m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '4', date: '15 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '5', date: '16 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '6', date: '20 Aug 20', time: '35m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '7', date: '21 Aug 20', time: '40m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '8', date: '23 Aug 20', time: '45m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '9', date: '24 Aug 20', time: '25m', text: 'Lorem Ipsum is simply dummy text' },
        { image: require('../../../assets/images/frontend/episodes/01.jpg'), episode: '10', date: '25 Aug 20', time: '30m', text: 'Lorem Ipsum is simply dummy text' }
      ]
    }
  },
  computed: {
    ...mapGetters({
      showList: 'Show/showState',
    }),
    show () {
      let suitFor = function (item) {
         return item.id == this;
      }
      for (var sInx in this.showList)
      {
          var show = this.showList[sInx]
          var episode = show.episodes.find(suitFor, this.eId)
          if (episode) {
            break;
          }
      }
      return show
    }
  }
}
</script>
