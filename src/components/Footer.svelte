<script>
	import githubIcon from '../../static/icons/github.svg';
	import twitterIcon from '../../static/icons/twitter.svg';
	import linkedinIcon from '../../static/icons/linkedin.svg';
</script>

<footer
	class="bg-primary-greyish-blue text-secondary-very-light-grey flex flex-col place-items-center sm:justify-between py-14 sm:py-7 sm:flex-row sm:px-10"
>
	<ul class="font-body text-xs text-center flex flex-col gap-8 sm:flex-row">
		<li><a href="/">HOME</a></li>
		<li><a href="/portfolio">PORTFOLIO</a></li>
		<li><a href="/contact-me">CONTACT ME</a></li>
	</ul>
	<div class="flex gap-4 mt-14 sm:mt-0">
		<a href="https://github.com/jim9112" target="blank"
			><img src={githubIcon} alt="github icon" /></a
		>
		<a href="https://twitter.com/jim9112" target="blank"
			><img src={twitterIcon} alt="twitter icon" /></a
		>
		<a href="https://www.linkedin.com/in/james-hannan-811771144/" target="blank"
			><img src={linkedinIcon} alt="linkedin icon" /></a
		>
	</div>
</footer>
