<template>
  <div class="schedule">
    <section>
      <div>
        <div>event_id</div>
        <div>event_name</div>
        <div>order</div>
        <div>begin</div>
        <div>end</div>
        <div>facility</div>
        <div>spec</div>
        <div>capacity</div>
        <div>teacher</div>
        <div>group</div>
        <div>subgroup</div>
      </div>
    </section>
  </div>
</template>


<script>
import axios from 'axios';
new schedule_data({
  el: '#app',
  data() {
    return {
      info: null
    };
  },
  mounted() {
    axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (this.info = response.data.bpi));
  }
});
// import { computed, ref } from "vue";
// import { useFetch } from "@vueuse/core";

// const groupname = ref("Б9121-01.03.02сп")
// const begin = ref("2023-11-06")
// const end = ref("2023-11-12")
// const subgroup = ref(1)
// const url = computed(() => {
//   return 'https://fefuschedule.rn7cvj-dev.ru/api/view?group_name=${groupname.value}&begin=${begin.value}&end=${end.value}&subgroup=${subgroup.value}'
// })

// const { isFetching, error, data } = useFetch(url, {
//   refetch: true
// }).json()
</script>

<style>
#schedule {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

#schedule,
div,
#schedule,<div {
  border: 1px solid #ddd;
  padding: 8px;
}

#schedule,
tr:nth-child(even) {
  background-color: #f2f2f2;
}

#schedule,
tr:hover {
  background-color: #ddd;
}

#schedule,<div {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
