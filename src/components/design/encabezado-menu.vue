<template>
	<header class="drawer-header">
		<img src="/src/assets/user.jpg" class="avatar">
		<div class="avatar-dropdown">
			<span>hello@example.com</span>
			<div class="mdl-layout-spacer"></div>
			<button id="accbtn" class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon">
				<i class="material-icons" role="presentation">arrow_drop_down</i>
				<span class="visuallyhidden">Accounts</span>
			</button>
			<ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect" for="accbtn">
				<li class="mdl-menu__item">hello@example.com</li>
				<li class="mdl-menu__item">info@example.com</li>
				<li class="mdl-menu__item"><i class="material-icons">add</i>Add another account...</li>
			</ul>
		</div>
	</header>
</template>

<style type="text/css">
	.avatar {
		width: 48px;
		height: 48px;
		border-radius: 24px;
	}
	.drawer-header {
		box-sizing: border-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-flex-direction: column;
				-ms-flex-direction: column;
						flex-direction: column;
		-webkit-justify-content: flex-end;
				-ms-flex-pack: end;
						justify-content: flex-end;
		padding: 16px;
		height: 151px;
	}

	.avatar-dropdown {
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		position: relative;
		-webkit-flex-direction: row;
				-ms-flex-direction: row;
						flex-direction: row;
		-webkit-align-items: center;
				-ms-flex-align: center;
						align-items: center;
		width: 100%;
	}

</style>