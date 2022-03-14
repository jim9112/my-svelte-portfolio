<script lang="ts">
	import Heading2 from '../components/global/Heading2.svelte';
	import Body2 from '../components/global/Body2.svelte';
	import GithubDarkIcon from '/icons/github-dark.svg';
	import TwitterDarkIcon from '/icons/twitter-dark.svg';
	import LinkedinDarkIcon from '/icons/linkedin-dark.svg';
</script>

<main class="px-3 lg:px-40">
	<section class="border-y-2 border-secondary-light-grey py-6 mb-6 grid grid-cols-1 md:grid-cols-2">
		<div>
			<Heading2>Get in Touch</Heading2>
		</div>
		<div class="flex flex-col gap-6">
			<Body2>
				I’d love to hear about what you’re working on and how I could help. I’m currently looking
				for a new role and am open to a wide range of opportunities. My preference would be to find
				a position in a company in the Southern New Hampshore / Greater Boston area, but I’m also
				happy to hear about opportunites that don’t fit that description. I’m a hard-working and
				positive person who will always approach each task with a sense of purpose and attention to
				detail. Please do feel free to check out my online profiles below and get in touch using the
				form.
			</Body2>
			<div class="flex gap-4">
				<img src={GithubDarkIcon} alt="Github Icon" />
				<img src={TwitterDarkIcon} alt="Twitter Icon" />
				<img src={LinkedinDarkIcon} alt="Linkedin Icon" />
			</div>
		</div>
	</section>
	<section class="grid grid-cols-1 md:grid-cols-2 py-6">
		<div>
			<Heading2>Contact Me</Heading2>
		</div>
		<div>
			<form class="flex flex-col gap-6">
				<div class="flex flex-col gap-2">
					<label for="name">Name</label>
					<input class="bg-secondary-light-grey h-12" type="text" name="name" id="name" />
				</div>
				<div class="flex flex-col gap-2">
					<label for="email">Email</label>
					<input class="bg-secondary-light-grey h-12" type="email" name="email" id="email" />
				</div>
				<div class="flex flex-col gap-2">
					<label for="message">Message</label>
					<textarea
						class="bg-secondary-light-grey"
						style="resize: none;"
						name="message"
						id="message"
						rows="5"
					/>
				</div>
				<input
					class="bg-primary-dark-blue w-fit text-secondary-light-grey py-4 px-9"
					type="submit"
					value="SEND MESSAGE"
				/>
			</form>
		</div>
	</section>
</main>
