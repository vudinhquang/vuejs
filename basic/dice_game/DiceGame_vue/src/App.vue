<template>
	<div id="app">
        <div class="wrapper clearfix">

            <players 
                v-bind:activePlayer="activePlayer"
                v-bind:currentScore="currentScore"
                v-bind:scoresPlayer="scoresPlayer"
            />

            <controls 
                v-on:handleNewGame="handleNewGame"
            />
            
            <dices 
                v-bind:dices="dices"
            />

            <popup-rule 
                v-on:handleConfirm="handleConfirm"
                v-bind:isOpenPopup="isOpenPopup"
            />
        </div>
	</div>
</template>

<script>
import Players from './components/Players';
import Controls from './components/Controls';
import Dices from './components/Dices';
import PopupRule from './components/PopupRule';
export default {
	name: 'app',
	data () {
		return {
            isPlaying: false,
            isOpenPopup: false,
            activePlayer: 0, // Để nhận diện xem ai là người chơi hiện tại
            scoresPlayer: [10, 20],
            dices: [2, 5],
            currentScore: 30
		}
	},
	components: {
        Players,
        Controls,
        Dices,
        PopupRule
    },
    methods: {
        handleConfirm() {
            console.log('handleConfirm App.vue');
            this.isPlaying = true;
            this.isOpenPopup = false;
            this.activePlayer = 0;
            this.dices = [1, 1];
            this.scoresPlayer = [0, 0];
            this.currentScore = 0;
        },
        handleNewGame() {
            console.log('handleNewGame App.vue');
            // Hiển thị Popup -> show luật chơi
            this.isOpenPopup = true;
        }
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
}

.clearfix::after {
    content: "";
    display: table;
    clear: both;
}

body {
    background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg');
    background-size: cover;
    background-position: center;
    font-family: Lato;
    font-weight: 300;
    position: relative;
    height: 100vh;
    color: #555;
}

.wrapper {
    width: 1000px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
    overflow: hidden;
}
</style>
