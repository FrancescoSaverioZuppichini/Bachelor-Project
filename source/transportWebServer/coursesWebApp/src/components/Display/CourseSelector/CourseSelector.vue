<template>
<div class="uk-flex uk-flex-left uk-margin-top uk-margin-left uk-margin-remove@s">
  <transition name='fade' class='f-w'>
    <div class="uk-alert-danger f-w uk-width-1-1" uk-alert v-if="$store.state.courses.error.isError">
      <p>{{$store.state.courses.error.msg}}</p>
    </div>
  </transition>
  <preference-selector></preference-selector>
</div>
</template>
<script>
import PreferenceSelector from '../../PreferenceSelector/PreferenceSelector.vue'

export default {
  name: "CourseSelector",
  components: {
    PreferenceSelector
  },
  data() {
    return {
      current: {},
      toggledType: {},
      toggledYear: {},
      query: {
        type: 'Bachelor',
        studyType: 'Bachelor of Science in Informatics',
        facultyId: 2,
        year: 1
      }
    }
  },
  methods: {
    toogleAndUpdateType(type, $event) {
      this.query = {}
      this.query.type = type

    },
    toogleAndUpdateYear(year, $event) {
      this.query.year = year
      if (this.toggledYear.el != undefined) this.toggledYear.el.classList.remove('btn--toogle');
      const el = $event.target
      el.className += " btn--toogle"
      this.toggledYear.el = el
    },
    toogleAndUpdateTypeStudy(type, $event) {
      this.query.studyType = type
      const el = $event.target
      if (this.toggledType.el == undefined) this.toggledType.el = el
      else {
        this.toggledType.el.classList.remove('btn--toogle');
        // if (this.toggledType.el !== el)
        //   if (this.toggledYear.el != undefined) this.toggledYear.el.classList.remove('btn--toogle');
      }
      el.className += " btn--toogle"
      this.toggledType.el = el

    },
    toogleAndUpdateQuery(newQuery, $event) {
      this.query = Object.assign(this.query, newQuery)
      $event.target.className += " btn--toogle"
    },
    updateQuery(year) {
      this.query.type = year.type
      this.query.year = year.yearNumber
    },
    update(facultyId) {
      this.query.facultyId = facultyId
      $('#fullcalendar').fullCalendar('removeEvents')
      this.$store.actions.fetchCourses(this.query)
      if (this.toggledType.el != undefined) this.toggledType.el.classList.remove('btn--toogle');
      if (this.toggledYear.el != undefined) this.toggledYear.el.classList.remove('btn--toogle');
      // this.toggled.forEach(toogleEl => toogleEl.toogle = false)

      // $('#fullcalendar').fullCalendar('refetchEvents')
    },
    createCalendar() {
      $('#fullcalendar').fullCalendar({
        that: this,
        header: {
          left: 'prev,next today',
          center: 'title',
          right: 'agendaWeek,month'
        },
        views: {
          listWeek: {
            buttonText: 'list week'
          },
          listMonth: {
            buttonText: 'list month'
          },
          listYear: {
            buttonText: 'list year'
          }
        },
        defaultView: 'agendaWeek',
        allDaySlot: false,
        minTime: "08:00:00",
        maxTime: "18:00:00",
        height: 'auto',
        weekends: false,
        eventTextColor: "Black",
      })
    }
  },
  mounted() {
    this.createCalendar()
    this.$store.actions.fetchFaculties()
    this.$store.actions.fetchYears()
    this.update(this.query.facultyId)

  }
}
</script>
<style>
</style>
