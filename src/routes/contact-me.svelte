<script lang="ts">
	import Heading2 from '../components/global/Heading2.svelte';
	import Body2 from '../components/global/Body2.svelte';
	import GithubDarkIcon from '/icons/github-dark.svg';
	import TwitterDarkIcon from '/icons/twitter-dark.svg';
	import LinkedinDarkIcon from '/icons/linkedin-dark.svg';
</script>

<section class="px-8">
	<div class="border-y-2 border-secondary-light-grey py-6 flex flex-col gap-6 mb-6">
		<Heading2>Get in Touch</Heading2>
		<Body2>
			I’d love to hear about what you’re working on and how I could help. I’m currently looking for
			a new role and am open to a wide range of opportunities. My preference would be to find a
			position in a company in the Southern New Hampshore / Greater Boston area, but I’m also happy
			to hear about opportunites that don’t fit that description. I’m a hard-working and positive
			person who will always approach each task with a sense of purpose and attention to detail.
			Please do feel free to check out my online profiles below and get in touch using the form.
		</Body2>
		<div class="flex gap-4">
			<img src={GithubDarkIcon} alt="Github Icon" />
			<img src={TwitterDarkIcon} alt="Twitter Icon" />
			<img src={LinkedinDarkIcon} alt="Linkedin Icon" />
		</div>
	</div>
</section>
