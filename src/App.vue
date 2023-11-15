<template>
  <div class="grid">
    <div id="days">
      <li>пн</li>
      <li>вт</li>
      <li>ср</li>
      <li>чт</li>
      <li>пт</li>
      <li>сб</li>
    </div>
    <div id="time">
      <li>8:30-10:00</li>
      <li>10:10-11:40</li>
      <li>11:50-13:20</li>
      <li>13:30-15:00</li>
      <li>15:10-16:40</li>
      <li>16:50-18:20</li>
      <li>18:30-20:00</li>
      <li>20:10-21:40</li>
    </div>
    <div class="schedule">
        <li id="lesson" v-for="event in events" :key="event.id">
            {{ event.event_name }}
        </li>
    </div>
  </div>
  
</template>


<script>
import axios from 'axios';
export default({
// eslint-disable-next-line vue/multi-word-component-names
  name: "schedule",
  data() {
    return {
      contents: null,
      events: []
    }
  },
  created() {
    axios
      .get('http://localhost:8080/api/event/view?group_name=%D0%919121-01.03.02%D1%81%D0%BF&begin=2023-11-20&end=2023-11-27&subgroup=1')
      .then((response) => (this.contents = response.data))
      .catch(error => {console.log(error)});
  },

  mounted() {

    for (let i = 0; i < 48; i++) {
      this.events.push({
        event_name: "",
        start: "",
        end: "",
        title: ''
      })
      console.log(this.contents)
    }

    for (let content in this.contents) {
      console.groupCollapsed(content)
      let year = Number(content.begin.slice(0, 4))
      let month = Number(content.begin.slice(5, 7)) - 1
      let day = Number(content.begin.slice(8, 10))
      let date = new Date(year, month, day)
      let weekDay = date.getDay()
      this.events[content.order - 1 + weekDay * 6] = content
      console.log(1)
    }
  }

});

</script>

<style>
.grid {
  display: grid;
  grid-template-areas: 
  ". . . date date . b"
  ". day day day day day day"
  "time les les les les les les"
  "time les les les les les les"
  "time les les les les les les"
  "time les les les les les les"
  "time les les les les les les"
  "time les les les les les les"
  "time les les les les les les"
  "time les les les les les les";
  grid-template-columns: 1fr repeat(6, 4fr);
  grid-template-rows: 1fr 0.5fr repeat(8, 2fr);
}

li {
  list-style-type: none;
  border: 1px solid #A0C6FF;
  border-radius: 3px;
  margin: 3px;
  margin-top: 5px;
  margin-bottom: 5px;
  text-align: center;
  font-size: 17px;
  padding: 0;
}

#days {
  grid-area: day;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
}

#time {
  grid-area: time;
  display: grid;
  grid-template-rows: repeat(8, 1fr);
}

.schedule {
  grid-area: les;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(8, 1fr);
}

#schedule,
tr:nth-child(even) {
  background-color: #f2f2f2;
}
</style>
