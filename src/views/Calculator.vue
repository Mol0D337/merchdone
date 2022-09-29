<template>
  <div class="container" data-view>
    <div class="container__inner">
      <div>
        <Header />
        <div class="calc">
          <div class="calc__top">
            <div class="calc__top_left">
              <div class="calc__top_title">
                Калькуляр
              </div>
              <div class="calc__top_subtitle">
                Щоб сформувати точну вартість
                слід відповісти на 5 питань від
                яких залежить фінальна вартість
              </div>
            </div>
            <div class="calc__top_right">

              <div class="calc__top_right--left">
                <div class="calc__top_right--top">ХУДІ</div>
                <div class="calc__top_right--bottom">УСЬОГО, ГРИВНІ:</div>
                <button class="button_white button_white--small">ЗАМОВИТИ</button>
              </div>
              <div class="calc__top_right--right">
                <div class="calc__top_right--top">
                  <div>х 1</div>
                  <div>890</div>
                </div>
                <div class="calc__top_right--bottom">
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;</div>
                  <div>19 000</div>
                </div>
                <div class="calc__top_right--bottom-sub">МИ ЗВ’ЯЖЕМОСЬ ТА ЗРОБИМО
                  ВІЗУАЛІЗАЦІЮ ЗАМОВЛЕННЯ</div>
              </div>
            </div>
          </div>
          <div class="calc__bottom">
            <div class="calc__select">
              <div class="calc__options calc__options--active">{{ $t('calc.1') }}</div>
              <svg class="calc__svg--active" width="43" height="44" viewBox="0 0 43 44" fill="none" stroke="#EDEDED" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1695 22L20.1695 2M40.1695 22L20.1695 42M40.1695 22H0" stroke-width="4"/>
              </svg>
              <div class="calc__options">{{ $t('calc.2') }}</div>
              <svg width="43" height="44" viewBox="0 0 43 44" fill="none" stroke="#EDEDED" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1695 22L20.1695 2M40.1695 22L20.1695 42M40.1695 22H0" stroke-width="4"/>
              </svg>
              <div class="calc__options">{{ $t('calc.3') }}</div>
              <svg width="43" height="44" viewBox="0 0 43 44" fill="none" stroke="#EDEDED" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1695 22L20.1695 2M40.1695 22L20.1695 42M40.1695 22H0" stroke-width="4"/>
              </svg>
              <div class="calc__options">{{ $t('calc.4') }}</div>
              <svg width="43" height="44" viewBox="0 0 43 44" fill="none" stroke="#EDEDED" xmlns="http://www.w3.org/2000/svg">
                <path d="M40.1695 22L20.1695 2M40.1695 22L20.1695 42M40.1695 22H0" stroke-width="4"/>
              </svg>
              <div class="calc__options">{{ $t('calc.5') }}</div>
            </div>
            <div class="calc__about">Оберіть будь ласка, який тип одягу ви хочете замовити: </div>
            <div class="calc__step">
              <div class="calc__step--1">
                <button v-for="item in 12" :class="{'button_white--calc-green': item === 12}" class="button_white button_white--calc">{{ $t(`calc.step1.${item}`) }}</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
  import Header from "@/components/Header.vue";
  import Footer from "../components/Footer";

  export default {
    name: "Calculator",
    components: {Footer, Header},
  }
</script>

<style scoped>

</style>
