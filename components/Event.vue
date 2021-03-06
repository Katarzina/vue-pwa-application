<template lang="pug">
.event__container
  .event-card(
    v-if="event.type!=='after-party'",
    :id="id",
    :class="{ 'event-card--expanded': isOpen, 'event-card--not-expandable': isNotExpandable }",
    @click="toggle"
  )
    .event__header      
      .event__images-container
        img.event__image(
          v-for="image of images",
          :src="image",
          :alt="event.author",
          :class="{'event__image--dark': event.imgDark}")
      .event__header-content
        .event__author-container(v-if="event.author")
          div
            .event__author {{ event.author }}
            .event__author-info {{ event.theme }}
          .event__social__container
            .event__social(v-for="social of event.social")
              a.icon.icon--github(v-if="social.github", :href="social.github" target="_blank")
              a.icon.icon--gitlab(v-if="social.gitlab", :href="social.gitlab" target="_blank")
              a.icon.icon--twitter(v-if="social.twitter", :href="social.twitter" target="_blank")
              a.icon.icon--facebook(v-if="social.facebook", :href="social.facebook" target="_blank")
        .event__duration(v-if="event.date") {{ event.date }}
        h2.event__topic(:class="event.type=='other' && 'event__topic--other'") {{ event.topic }}
    .event__accordion
      .event__description(v-if="event.description")
        slot
          p {{ event.description }}
      img.event__picture(v-if="event.image"
          v-for="picture of pictures",
          :src="picture",
          :alt="event.author",
          :class="{'event__image--dark': event.imgDark}")    

  .event-card.event-card--not-expandable.event-card--after-party(
    v-else,
    :style="{backgroundImage: 'url('+ event.img+')'}"
    )
    .event__header
      .event__time.event__time--after-party {{ event.startTime }}
      .event__after-party-content
        h1.event__after-party-title {{ event.title }}
        h2.event__after-party-title {{ event.subtitle }}
        .event__after-party-address {{ event.address }}
    .event__accordion
      .event__description(v-if="event.description")
        slot
          p {{ event.description }}
</template>

<script>
export default {
  name: 'Event',
  props: ['event', 'descFlex'],
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle () {
      this.isOpen = !this.isOpen
    }
  },
  computed: {
    images () {
      return Array.isArray(this.event.img) ? this.event.img : [this.event.img]
    },
    pictures () {
      return Array.isArray(this.event.image) ? this.event.image : [this.event.image]
    },
    id () {
      if(this.event.author) {
        return this.event.author.toLowerCase().split(' ').join('-')
      }
      return this.event.topic.toLowerCase().split(' ').join('-')
    },
    isNotExpandable () {
      return !this.event.description
    }
  }
}
</script>

<style lang="sass" scoped>
@import ~assets/css/base/helpers
@import ~assets/css/components/card

.event__container
  position: relative
  padding-bottom: 40px

.event__time
  text-align: center
  font-weight: 600
  font-size: 28px
  line-height: 28px
  height: 28px
  padding-bottom: 20px

  @media #{$medium-up}
    position: absolute
    left: -174px
    top: calc(50% - 14px)
    width: 120px
    padding-bottom: 0

.event__time:after
  content: ""
  display: none
  position: absolute
  width: 11px
  height: 11px
  border-radius: 50%
  background-color: #ddd
  top: 40px
  right: calc(50% - 5px)

  @media #{$medium-up}
    display: block
    top: calc(50% - 5px)
    right: -7px

.event-card
  padding: 20px 20px
  @include card

  @media #{$medium-up}
    margin-left: 114px

.event-card--not-expandable
  cursor: auto
  &:hover
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.03), 0 5px 15px rgba(0, 0, 0, 0.06)

.event__container:last-child .event-card:before
  display: none

@media #{$medium-up}
  .event__container:first-child        

  .event__container:last-child .event-card:before
    display: block
    bottom: auto
    height: calc(50% - 20px)

.event__description
  display: flex
  height: 100%
  white-space: pre-line
  padding: 0 15px 10px 15px

  p, ul, li
    font-size: 18px
    text-align: left

  ul
    margin: 0
    padding-left: 30px

  @media #{$medium-up}
    padding-left: 100px

.event__accordion
  overflow: hidden
  max-height: 0
  transition: max-height 0.6s ease-in-out

  @media #{$medium-up}
    transition: max-height 0.2s ease-in-out

.event-card--expanded
  .event__accordion
    max-height: 1200px

    @media #{$medium-up}
      max-height: 600px


.event__header
  position: relative
  display: flex
  flex-direction: column
  align-items: center
  justify-content: flex-start
  @media #{$medium-up}
    flex-direction: row

.event__image
  display: inline-block
  height: 100px
  width: 120px
  border-radius: 10px
  margin-left: -20px
  margin-bottom: 10px
  background-color: #efefef
  
  &:first-child
    margin-left: 0

  @media #{$medium-up}
    display: block
    margin-left: 0
    margin-right: 20px
    margin-top: -20px
    padding-bottom: 0
    &:first-child
      margin-top: 0

.event__picture
  display: inline-block
  max-height: 100%
  max-width: 100%
  border-radius: 2%
  margin-left: -20px
  margin-bottom: 10px
  background-color: #efefef
  
  &:first-child
    margin-left: 0

  @media #{$medium-up}
    display: block
    margin-left: 0
    margin-right: 20px
    margin-top: -20px
    padding-bottom: 0
    &:first-child
      margin-top: 0      

.event__image--dark
  background-color: #3c5369

.event__social__container
  display: flex
  flex-direction: row

.event__social
  padding: 10px 20px
  .icon:not(:last-child)
    padding-right: 10px

  @media #{$medium-up}
    border-left: 1px solid #efefef
    &:first-child
      margin-left: 20px

.event__topic
  color: $color-vue-green
  margin: 10px 0
  text-align: center
  font-weight: 600
  font-size: 22px

  small
    font-size: 22px
    font-weight: 300

  @media #{$medium-up}
    text-align: left
    font-size: 24px
    small
      font-size: 24px

  @media #{$large-up}
    font-size: 26px
    small
      font-size: 26px

.event__topic--other
  color: $color-text

.event__author-container
  display: flex
  align-items: center
  justify-content: center
  flex-direction: column
  @media #{$medium-up}
    justify-content: flex-start
    flex-direction: row


.event__author
  text-align: center
  font-weight: 600
  font-size: 20px
  @media #{$medium-up}
    text-align: left

.event__author-info
  text-align: center
  font-size: 12px
  text-transform: uppercase
  @media #{$medium-up}
    text-align: left

.event__duration
  position: absolute
  right: 0
  top: 0
  color: #fff
  background: $color-vue-green
  padding: 3px
  border-radius: 5px
  font-size: 12px
  @media #{$medium-up}
    font-size: 16px 
    padding: 3px 5px 

.event-card--after-party
  background-repeat: no-repeat
  background-position: center center
  background-size: cover

.event__time--after-party
  display: none
  @media #{$medium-up}
    display: block
.event__after-party-content
  text-align: center
  color: $color-white
  text-shadow: 0px 0px 32px #000000;
  margin: 16px 0
  @media #{$medium-up}
    margin: 0 12px
    text-align: left
.event__after-party-title
  color: $color-white
  margin: 0 0 -0.2em 0
  font-weight: 600
.event__after-party-address
  margin-top: 0.5em
</style>
