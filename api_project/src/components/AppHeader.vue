<template>
	<header>
		<div class="ass1-header">
			<div class="container">
				<a href="index.html" class="ass1-logo">
				Quang Group
				</a>
				<nav>
					<ul class="ass1-header__menu">
						<li>
							<a href="#">Danh mục</a>
							<div class="ass1-header__nav" style="display: none;">
								<div class="container">
									<ul>
										<li><a href="index.html">Funny</a></li>
										<li><a href="index.html">Animals</a></li>
										<li><a href="index.html">Anime & Mâng</a></li>
										<li><a href="index.html">Awesome</a></li>
										<li><a href="index.html">Basketball</a></li>
									</ul>
									<ul>
										<li><a href="index.html">Car</a></li>
										<li><a href="index.html">Comic</a></li>
										<li><a href="index.html">Cosplay</a></li>
										<li><a href="index.html">Countryballs</a></li>
										<li><a href="index.html">Classical Art Memes</a></li>
									</ul>
									<ul>
										<li><a href="index.html">Girl</a></li>
										<li><a href="index.html">History</a></li>
										<li><a href="index.html">K-POP</a></li>
										<li><a href="index.html">V-POP</a></li>
										<li><a href="index.html">Pokémon</a></li>
									</ul>
									<ul>
										<li><a href="index.html">School</a></li>
										<li><a href="index.html">Star war</a></li>
										<li><a href="index.html">Coder</a></li>
										<li><a href="index.html">Travel</a></li>
										<li><a href="index.html">Sport</a></li>
									</ul>
								</div>
								<div class="ass1-header__menu-transition"></div>
							</div>
						</li>
						<li class="active">
							<a href="index.html">Hot</a>
							<div class="ass1-header__nav" style="display: none;">
								<div class="container">
									<ul>
										<li><a href="index.html">Funny</a></li>
										<li><a href="index.html">Animals</a></li>
										<li><a href="index.html">Anime & Mâng</a></li>
										<li><a href="index.html">Awesome</a></li>
										<li><a href="index.html">Basketball</a></li>
									</ul>
									<ul>
										<li><a href="index.html">Car</a></li>
										<li><a href="index.html">Comic</a></li>
										<li><a href="index.html">Cosplay</a></li>
										<li><a href="index.html">Countryballs</a></li>
										<li><a href="index.html">Classical Art Memes</a></li>
									</ul>
									<ul>
										<li><a href="index.html">Girl</a></li>
										<li><a href="index.html">History</a></li>
										<li><a href="index.html">K-POP</a></li>
										<li><a href="index.html">V-POP</a></li>
										<li><a href="index.html">Pokémon</a></li>
									</ul>
									<ul>
										<li><a href="index.html">School</a></li>
										<li><a href="index.html">Star war</a></li>
										<li><a href="index.html">Coder</a></li>
										<li><a href="index.html">Travel</a></li>
										<li><a href="index.html">Sport</a></li>
									</ul>
								</div>
								<div class="ass1-header__menu-transition"></div>
							</div>
						</li>
					</ul>
				</nav>
				<div class="ass1-header__search">
					<form action="#">
						<label>
						<input type="search" name="search-text" class="form-control" placeholder="Nhập từ khóa ...">
						<i class="icon-Search"></i>
						</label>
					</form>
				</div>
				<a href="#" class="ass1-header__btn-upload ass1-btn">
				<i class="icon-Upvote"></i> Upload
				</a>
				<a href="dang-nhap.html" class="ass1-header__btn-upload ass1-btn">
				Login
				</a>
			</div>
		</div>
	</header>
</template>

<script>
import $ from "jquery";
export default {
	name: 'app-header',
	mounted() {
		$(".ass1-header__menu li > a").click(function(e) {
            $(this).parent().find(".ass1-header__nav").slideToggle(300, 'swing');
		});
	}
}
</script>

<style scoped>
	.user-header {
		position: relative;
		color: #1e1633;
		transition: all .2s ease;
		display: inline-block;
	}
	.user-header:hover {
		color: #3482e2;
	}
	.user-header > span {
		display: inline-block;
		vertical-align: middle;
	}
	.user-header .avatar {
		width: 35px;
		height: 35px;
		margin-right: 4px;
		border-radius: 100%;
		overflow: hidden;
	}
	.user-header .avatar img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	.wrapper-user {
		position: relative;
	}
	.logout {
		right: 0;
		top: 100%;
		position: absolute;
		background-color: #fff;
		padding: 10px 30px;
		min-width: 150px;
		text-align: right;
		border-radius: 3px;
		box-shadow: 0 0 5px 0px rgba(0,0,0,0.1);
		z-index: 0;
		transition: all .3s ease;
		opacity: 0;
		pointer-events: none;
		cursor: pointer;
	}
	.wrapper-user .logout:hover,
	.wrapper-user .user-header:hover + .logout {
		opacity: 1;
		z-index: 2;
		pointer-events: auto;
	}
	.ass1-header__nav > .container ul {
		flex-direction: row;
		flex-wrap: wrap;
	}
	.ass1-header__nav > .container ul li {
		flex: 0 0 25%;
		max-width: 25%;
	}
	.ass1-header__nav > .container ul li:first-child {
		margin-top: 8px;
	}
</style>