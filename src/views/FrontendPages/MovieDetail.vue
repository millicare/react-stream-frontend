<template>
<div>
  <Details :mId="$route.params.mId"/>
  <Upcomming/>
  <MoreLike/>
</div>
</template>
<script>
import { core } from '../../config/pluginInit'
import Details from './MovieDetailPage/Detail'
import Upcomming from './MovieDetailPage/Upcomming'
import MoreLike from './MovieDetailPage/MoreLike'
export default {
  name: 'MovieDetail',
  components: {
    Details,
    Upcomming,
    MoreLike
  },
  mounted () {
    core.index()
  }
}
</script>
