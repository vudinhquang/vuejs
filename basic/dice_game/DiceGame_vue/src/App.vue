<template>
	<div id="app">
        <div class="wrapper clearfix">

            <players 
                v-bind:activePlayer="activePlayer"
                v-bind:currentScore="currentScore"
                v-bind:scoresPlayer="scoresPlayer"
            />

            <controls
                v-on:handleHoldScore="handleHoldScore"
                v-on:handleNewGame="handleNewGame"
                v-on:handleRollDice="handleRollDice"
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
        handleHoldScore() {
            if (this.isPlaying) {
                // console.log('handleHoldScore App.vue');
                // activePlayer = 0 -> Người chơi 1 đang chơi
                // activePlayer = 1 -> Người chơi 2 đang chơi
                let { scoresPlayer, activePlayer, currentScore } = this;
                let scoreOld = scoresPlayer[activePlayer];
                // let cloneScorePlayer = [...scoresPlayer];
                //     cloneScorePlayer[activePlayer] = scoreOld + currentScore;
                // this.scoresPlayer = cloneScorePlayer;

                this.$set(this.scoresPlayer, activePlayer, scoreOld + currentScore);
                this.nextPlayer();
            } else {
                alert('Vui lòng nhấn vào nút NewGame');
            }
        },
        nextPlayer() {
            // scoresPlayer = 0 -> Đổi lại thành 1 và người lại
            this.activePlayer = this.activePlayer === 0 ? 1 : 0;
            this.currentScore = 0;

        },
        handleRollDice() {
            console.log('handleRollDice App.vue');
            if (this.isPlaying) {
                // Xoay xúc xắc
                // Math.random():0 -> 1( 0 < x < 1)
                var dice1 = Math.ceil(Math.random() * 6);
                var dice2 = Math.ceil(Math.random() * 6);
                this.dices = [dice1, dice2];
                console.log(dice1, dice2);
                if (dice1 === 1 || dice2 === 1) {
                    // Đổi lượt chơi
                    // Reset điểm tạm thời về 0
                    // let activePlayer = this.activePlayer;
                    setTimeout(() => {
                        alert(`Người chơi Player ${this.activePlayer + 1} đã quay trúng số 1. Rất tiếc`)
                    }, 10);
                    this.nextPlayer();
                } else {
                    // Cộng dồn vào điểm tạm thời cho người đang chơi
                    this.currentScore = this.currentScore + dice1 + dice2;
                }
            } else {
                alert('Vui lòng nhấn vào nút NewGame');
            }
        },
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
