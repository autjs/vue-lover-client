<template>
    <div class="city-picker">
        <div class="city-top">
            <header>
                <span @click="back"> &lt; </span>
                <title>城市选择</title>
            </header>
            <section class="selected-city">
                <p><strong>当前城市</strong></p>
                <p><strong>{{curCity}}</strong></p>
            </section>
        </div>
        <div class="city-space"></div>
        <section class="module" v-for="(item, index) in cityData" :key="index">
            <h5>{{item[0]}}</h5>
            <div class="items">
                <div class="item" v-for="(obj,k) in item[1]" :key="k"
                        @click="selectedOnecity(obj)"
                        :ref="obj.py"
                    >
                    <p>{{obj.name}}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.city-top {
    position: fixed;
    width: 100%;
    background-color: #fbe5e8;
        box-shadow: 2px 2px 10px #b0b3b5;
}
/* .city-picker { position: relative; } */
header{ display: flex; flex-direction: row; padding-bottom: .2rem; padding-top: .2rem; position: relative;}
header::after { content: ""; border-bottom: 1Px solid #9a7e7e; position: absolute; top: 100%; left: 3%; width: 94%; }
header > span { width: 2rem; text-align: center; }
header > title { flex: 1; text-align: center; padding-right: 2rem; }

.city-picker > .search { margin-top: 40px; margin-left: 100px; margin-right: 100px; display: flex; }
.city-picker > .search > i { font-size: 60px; }
.city-picker > .search > input { font-size: 60px; flex: 1; border: 0; outline: 0; background: 0 0; font-size: 50px; padding-left: 20px; }

.selected-city {
    display: flex;
        justify-content: center;
        align-items: center;
        font-size: 40px;
}

.selected-city > p {
    text-align: left;
    margin-left: 20px;
    margin-right: 20px;
}
.module {  margin-left: 5%; margin-right: 5%; margin-top: 50px; margin-bottom: 50px; }
.module > .items { display: flex; flex-direction: row;  flex-wrap: wrap;  font-size: 30px;}
.module > .items > .item { box-sizing: border-box; width: 50%; text-align: center; height: 120px; line-height: 120px; overflow: hidden;}
.module > .items > .item > p {
                                border-radius: 0.2rem;
                                margin: 0.1rem;
                                border: 0.01rem solid rgb(0, 0, 0);
                                display: block;
                                background-color: 0 0;
                            }

.selected-city-skin {
    font-size: 38px;
    font-weight: bold;
    color: red;
}

.hotcity {  padding-left: 100px;    padding-right: 100px; margin-top: 60px; }

.city-space { height: 220px;}
</style>

<script>
import cityData from './js/CityData'

export default {
    data() {
        return {
            cityData: cityData,
            curCity: '北京',
            lastCityEl: null
        }
    },
    methods: {
        selectedOnecity(obj) {
            this.curCity = obj.name
            if(this.lastCityEl) this.lastCityEl.classList.remove('selected-city-skin')
            this.lastCityEl = this.$refs[obj.py][0]
            this.lastCityEl.classList.add('selected-city-skin')
            this.$emit('selected', this.curCity)
        },
        back() {
            this.$emit('onSave', this.curCity)
            console.log('...........')
        }
    }
}
</script>