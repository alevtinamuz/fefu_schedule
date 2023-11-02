<template>
  <div>
    <li v-for="content in contents" :key="content.id">
      <h2>{{ content.event_name }}</h2>
    </li>
  </div>
  <!-- <div class="schedule">
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
  </div> -->
</template>


<script>
import axios from 'axios';
export default({
  name: "schedule",
  data() {
    return {
      contents: null,
    }
  },
  mounted() {
    axios
      .get('http://localhost:8080/api/view?group_name=Б9121-01.03.02сп&begin=2023-11-06&end=2023-11-12&subgroup=1')
      .then((response) => (this.contents = response.data));
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
