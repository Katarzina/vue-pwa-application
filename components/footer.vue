<template lang="pug">
footer.footer
  .container__inner
    .footer__top
      ul.footer__list
        h3.footer__header Contact

        li
          | Phone:
          = '+420 776 510 122'
        li
          | GitHub:
          = ' '
          a(href="https://github.com/Katarzina" target="_blank" rel="noopener")
          span.at Katarzina
        li
          | Twitter:
          = ' '
          a(href="https://twitter.com/BraveUkraine" target="_blank" rel="noopener")
            span.at BraveUkraine
        li
          | Upwork:
          = ' '
          a(href="https://www.upwork.com/o/profiles/users/_~0189ba70643929ceda/" target="_blank" rel="noopener")
            span My account
        li
          | Email:
          a  kateryna.parfenova
            span.at gmail.com
      ul.footer__list.footer__list--small
        h3.footer__header Useful links
        li: nuxt-link(to="/rezume") Rezume
        li: nuxt-link(to="/portfolio") Portfolio
        li: nuxt-link(to="/use") Use
        li: nuxt-link(to="/blog") Blog       
        
    .footer__bottom
     
      .footer__copyright
        | Copyright 2017 pkrf.eu        
      
</template>

<style lang="sass">
@import ~assets/css/base/helpers

.footer
  padding-top: 10px
  padding-bottom: 10px
  padding-left: 20px
  background: $color-white

.footer__top
  padding-bottom: 40px

  @media #{$medium-up}
    display: flex
    justify-content: space-around

.footer__list
  list-style: none
  padding-left: 20px
  margin: 0
  font-size: 22px

  li
    line-height: 1.4
    font-weight: 300

  a
    font-weight: 400
    color: $color-link
    text-decoration: none

  &.footer__list--small
    font-size: 20px

.footer__header
  margin: 15px 0
  font-size: 36px
  font-weight: 300
  color: $color-text

.footer__bottom
  font-size: 20px
  font-weight: 400
  line-height: 36px
  text-align: center
  color: $color-text

  a
    text-decoration: none
    color: $color-text
    white-space: nowrap

.footer__img
  height: 24px
  display: inline-block
  margin-bottom: -3px
  margin-left: 4px

.footer__copyright
  font-size: 13px
  margin-top: 0
  color: #9D9D9D

span.at:before
  content: '@'
</style>
