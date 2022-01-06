<script>
	import hamburgerIcon from '../../static/icons/hamburger.svg';
</script>

<header class="flex px-8 py-8 justify-between items-center">
	<div>
		<h1 class="font-heading font-bold text-4xl">JH</h1>
	</div>
	<ul class="sm:flex gap-x-10 hidden">
		<li>HOME</li>
		<li>PORTFOLIO</li>
		<li>CONTACT ME</li>
	</ul>
	<div class="sm:hidden">
		<img src={hamburgerIcon} alt="hamburger icon" />
	</div>
</header>
