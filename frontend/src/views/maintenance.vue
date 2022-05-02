<script setup></script>

<template>
	<div class="welcome-view">
		<img src="../assets/logo.png" />
		<h1>{{ $t("welcome") }}</h1>
	</div>
</template>

<style scoped>
.welcome-view {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 50%;
	margin: auto;
}
</style>
