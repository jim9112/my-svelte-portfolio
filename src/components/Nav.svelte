<script>
	import logo from '../../static/logo.svg';
	import hamburgerIcon from '../../static/icons/hamburger.svg';
</script>

<div class="flex px-8 py-8 justify-between items-center">
	<div>
		<img src={logo} alt="logo" />
	</div>
	<ul class="sm:flex gap-x-10 hidden">
		<li>HOME</li>
		<li>PORTFOLIO</li>
		<li>CONTACT ME</li>
	</ul>
	<div class="sm:hidden">
		<img src={hamburgerIcon} alt="hamburger icon" />
	</div>
</div>
<h1>Nav Component</h1>
